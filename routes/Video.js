const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secretKey;
const verifyToken = require("../middlewares/Token");
// Import the Google Drive API client
const { google } = require("googleapis");

// Define your Google Drive API credentials
const credentials = require("../private/oauthClient.json");

const client_id = credentials.web.client_id;
const client_secret = credentials.web.client_secret;
const redirect_uris = credentials.web.redirect_uris;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
const SCOPE = ['https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file']
  // Define your folder ID where videos are stored on Google Drive
  const folderId = process.env.folderId;
  
router.get('/getAuthURL', (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPE,
  });
  console.log(authUrl);
  return res.send(authUrl);
});

router.post('/getToken', (req, res) => {
  if (req.body.code == null) return res.status(400).send('Invalid Request');
  oAuth2Client.getToken(req.body.code, (err, token) => {
      if (err) {
          console.error('Error retrieving access token', err);
          return res.status(400).send('Error retrieving access token');
      }
      res.send(token);
  });
});

router.post('/getUserInfo', (req, res) => {
  if (req.body.token == null) return res.status(400).send('Token not found');
  oAuth2Client.setCredentials(req.body.token);
  const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });

  oauth2.userinfo.get((err, response) => {
      if (err) res.status(400).send(err);
      console.log(response.data);
      res.send(response.data);
  })
});

router.post('/readDrive', (req, res) => {
  if (req.body.token == null) return res.status(400).send('Token not found');
  oAuth2Client.setCredentials(req.body.token);
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
  drive.files.list({
      pageSize: 10,
  }, (err, response) => {
      if (err) {
          console.log('The API returned an error: ' + err);
          return res.status(400).send(err);
      }
      const files = response.data.files;
      if (files.length) {
          console.log('Files:');
          files.map((file) => {
              console.log(`${file.name} (${file.id})`);
          });
      } else {
          console.log('No files found.');
      }
      res.send(files);
  });
});

  
// Route to fetch videos based on module and chapter names
router.post("/:moduleName/:chapterName", async (req, res) => {
  try {
    if (req.body.token == null) return res.status(400).send('Token not found');
    oAuth2Client.setCredentials(req.body.token);
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const moduleName = req.params.moduleName;
    const chapterName = req.params.chapterName;

    // List all files in the main folder (using a fixed folderId).
    drive.files.list(
      {
        q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder'`,
      },
      (err, subFolderResponse) => {
        if (err) {
          console.error("Error listing subfolders:", err);
          res.status(500).json({ error: "Failed to fetch videos" });
          return;
        }

        // Find the subfolder with a name matching 'moduleName'.
        const subfolders = subFolderResponse.data.files;
        console.log(`Subfolders in the main folder:`);
        subfolders.forEach((folder) => {
          console.log(folder.name);
        });

        const moduleFolder = subfolders.find((folder) => folder.name === moduleName);

        if (moduleFolder) {
          console.log(`Found module folder '${moduleName}', searching for video files in it.`);

          // Now, list all subfolders under the module folder.
          drive.files.list(
            {
              q: `'${moduleFolder.id}' in parents and mimeType='application/vnd.google-apps.folder'`,
            },
            (err, chapterFolderResponse) => {
              if (err) {
                console.error("Error listing chapter folders:", err);
                res.status(500).json({ error: "Failed to fetch videos" });
                return;
              }

              // Find the subfolder with a name matching 'chapterName'.
              const chapterFolders = chapterFolderResponse.data.files;
              const chapterFolder = chapterFolders.find((folder) => folder.name === chapterName);

              if (chapterFolder) {
                console.log(`Found chapter folder '${chapterName}', searching for video files in it.`);
                // List files in the chapter folder.
                drive.files.list(
                  {
                    q: `'${chapterFolder.id}' in parents and mimeType='video/mp4'`,
                  },
                  (err, chapterFilesResponse) => {
                    if (err) {
                      console.error("Error listing chapter files:", err);
                      res.status(500).json({ error: "Failed to fetch videos" });
                      return;
                    }

                    const files = chapterFilesResponse.data.files;
                    console.log(`Files in the ${chapterName} folder:`);
                    // files.forEach((file) => {
                    //   console.log(file.name);
                    // });

                    if (files.length) {
                      // Construct an array of video URLs using the file ids.
                      const videoUrls = files.map((file) => `https://drive.google.com/file/d/${file.id}/view`);

                      console.log(`Found videos in the ${chapterName} folder:`);
                      // files.forEach((file) => {
                      //   console.log(file.name);
                      // });

                      // Send the array of video URLs in the response.
                      res.json({files, videoUrls });
                    } else {
                      console.log(`No videos found in the ${chapterName} folder.`);
                      res.status(404).json({ error: `No videos found in the ${chapterName} folder.` });
                    }
                  }
                );
              } else {
                console.log(`Chapter folder '${chapterName}' not found under ${moduleName}.`);
                res.status(404).json({ error: `Chapter folder '${chapterName}' not found under ${moduleName}` });
              }
            }
          );
        } else {
          console.log(`Module folder '${moduleName}' not found.`);
          res.status(404).json({ error: `Module folder '${moduleName}' not found` });
        }
      }
    );
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});









  
  module.exports = router;


      //   // Query the Google Drive API to fetch videos
    //   const query = `'${folderId}' in parents and '${moduleId}-${chapterId}' in name`;
    //   const { data } = await drive.files.list({
    //     auth,
    //     q: query,
    //   });
  
    //   // Extract video links from the response
    //   const videos = data.files.map((file) => file.webViewLink);
  
    //   res.json({ videos });