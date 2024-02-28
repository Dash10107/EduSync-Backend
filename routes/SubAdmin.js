const express = require("express");
const router = express.Router();
const subAdminCheck = require("../middlewares/SubAdmin");
const verifyToken = require("../middlewares/Token");
const Classroom = require('../models/Classroom');
const User = require('../models/User');
const generateUniqueCode = require("../middlewares/UniqueCode");
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret,
});

// Configure Multer to use Cloudinary as storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "classroom-posts",
    allowed_formats: ["jpg", "jpeg", "png", "pdf", "doc", "docx", "xls", "xlsx"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const upload = multer({ storage: storage });


//----------------------------------------------------------------------------------SubAdmin Powers -------------------------------------------------------------------------
// Example route to check if the user is an admin
router.get("/checkSubAdmin", verifyToken, subAdminCheck, (req, res) => {
  res.json({ message: "You are an sub admin.",isSubAdmin:true });
});


//---------------------------------------------------------------------------------Classroom----------------------------------------------------------------------------------
// Create a new classroom
router.post('/addlassrooms', verifyToken, subAdminCheck, async (req, res) => {
    try {
      const { name } = req.body;
  
      // Generate a unique code for the classroom (you can use a library like shortid)
      const code = generateUniqueCode();
  
      // Get the current admin user
      const subAdminUser = await User.findById(req.user.id);
  
      // Create a new classroom
      const classroom = new Classroom({
        name,
        code,
        faculty: subAdminUser._id,
      });
  
      // Save the classroom to the database
      await classroom.save();
  
      res.status(201).json({ success: true, classroom });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create classroom' });
    }
  });
  // Route to get all classrooms for a faculty
router.get('/classrooms', verifyToken,subAdminCheck, async (req, res) => {
  try {
    const facultyId = req.user.id;

    // Find all classrooms where the faculty ID matches
    const classrooms = await Classroom.find({ faculty: facultyId })

    res.status(200).json({ classrooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  // Route to get all classrooms for a faculty
  router.get('/classroom/:code', verifyToken, async (req, res) => {
    try {
     
      const { code } = req.params;
  
      // Find all classrooms where the faculty ID matches
      const classroom = await Classroom.findOne({ code });
  
      res.status(200).json({ classroom });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Route to delete a classroom based on its code
router.delete('/classrooms/:code',verifyToken,subAdminCheck, async (req, res) => {
  try {
    const { code } = req.params;

    // Find the classroom by code
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

   // Remove the classroom from the database
   await Classroom.deleteOne({ code });

    res.json({ message: 'Classroom deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//------------------------------------------------------------students in classroom ---------------------------------------------------------------------------------------------------

// Route to get all classrooms for a student
router.get('/classrooms/student', verifyToken, async (req, res) => {
  try {
    const studentId = req.user.id;

    // Find all classrooms where the student ID matches
    const classrooms = await Classroom.find({ students: { $in: [studentId] } });

    res.status(200).json({ classrooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  // Add a student to a classroom
  router.post('/classrooms/:code/addstudents', verifyToken, async (req, res) => {
    try {
      const { code } = req.params;
  
      // Find the classroom by code
      const classroom = await Classroom.findOne({ code });
  
      if (!classroom) {
        return res.status(404).json({ error: 'Classroom not found' });
      }
  
      // Add the student to the classroom
      classroom.students.push(req.user.id);
  
      // Save the updated classroom
      await classroom.save();
  
      res.json({ success: true, classroom });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add student to classroom' });
    }
  });

// Remove a student from a classroom
router.delete('/classrooms/:code/removestudent/:studentId', verifyToken, subAdminCheck, async (req, res) => {
  try {
    const { code, studentId } = req.params;

    // Find the classroom by code
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ error: 'Classroom not found' });
    }

    // Check if the student is in the classroom
    const studentIndex = classroom.students.findIndex(student => student.toString() === studentId);

    if (studentIndex === -1) {
      return res.status(404).json({ error: 'Student not found in the classroom' });
    }

    // Remove the student from the classroom
    classroom.students.splice(studentIndex, 1);

    // Save the updated classroom
    await classroom.save();

    res.json({ success: true,message:"Student Removed Successfully", classroom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove student from classroom' });
  }
});

module.exports = router;


//------------------------------------Posting in Classroom-------------------------------------------------------------------------------------------------------------

// GET route for fetching all posts in a classroom
router.get('/classrooms/:code/posts',verifyToken, async (req, res) => {
  try {
    const { code } = req.params;

     // Find the classroom by code
     const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    // Extract posts from the classroom
    const posts = classroom.posts;

    res.status(200).json({message:"All Posts of the Classroom",posts:posts});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Example route for adding a post with text, image, or PDF
router.post("/classrooms/:code/addposts",  upload.single('file'), verifyToken, subAdminCheck, async (req, res) => {
  try {
   
    const { title,  content } = req.body;

    // if(title || title===""){
    //   console.log(req.body)
    //   return res.status(404).json({ message: 'Please Enter the Title' });
    // }
    // if(content || content===""){
    //   return res.status(404).json({ message: 'Please Enter the Content' });
    // }
    const { code } = req.params;
  
    // Find the classroom by code
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
 
    if (req.file) {
      // File is present
      console.log("Single file", req.file);

      const uploadedFile = req.file;
      const fileType = uploadedFile.mimetype.split('/')[1]; // Extract file type from MIME type
      console.log('File Type:', fileType);

      // Check if the file type is allowed
      if (!storage.params.allowed_formats.includes(fileType)) {
        return res.status(400).json({ error: 'Unsupported file type' });
      }

      console.log('Uploaded File', uploadedFile.path);

      // Append a new post to the 'posts' array with file content
      classroom.posts.push({
        title,
        content,
        fileUrl: uploadedFile.path,
      });

      classroom.save().then(() => {
        res.status(201).json({ message: 'File uploaded successfully', link: uploadedFile.path });
      });
    } else {
      // No file uploaded, only text content
      // Append a new post to the 'posts' array without file content
      classroom.posts.push({
        title,
        content,
      });

      classroom.save().then(() => {
        res.status(201).json({ message: 'Post added successfully' });
      });
    }

     


  } catch (error) {
     // Log the error stack trace
     console.error('Error Stack Trace:', error.stack);
    console.error("Error",error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to delete a single post based on its postId
router.delete('/classrooms/:code/posts/:postId',verifyToken,subAdminCheck, async (req, res) => {
  try {
    const { code,postId } = req.params;

    // Find the classroom by code
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    // Find the post by postId
    const post = classroom.posts.id(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

       // Find the post index by postId
       const postIndex = classroom.posts.findIndex(post => post._id == postId);

       if (postIndex === -1) {
         return res.status(404).json({ message: 'Post not found' });
       }
   
       // Remove the post from the classroom
       classroom.posts.splice(postIndex, 1);
       await classroom.save();
    await classroom.save();

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//------------------------------------------------Forms----------------------------------------------------------------------------------------------------------------------

// POST route for creating a form
router.post('/classrooms/:code/addforms',verifyToken, subAdminCheck, async (req, res) => {
  try {
    const { code } = req.params;
    const { title, questions } = req.body;

        // Find the classroom by code
        const classroom = await Classroom.findOne({ code });

        if (!classroom) {
          return res.status(404).json({ message: 'Classroom not found' });
        }
     
        // Append a new post to the 'posts' array
        classroom.forms.push({
          title,
          questions,
        });

        classroom.save().then(() => {
          res.status(201).json({ message: 'Form uploaded successfully',title:title });
        });


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route for fetching all forms in a classroom
router.get('/classrooms/:code/forms',verifyToken, async (req, res) => {
  try {
    const { code } = req.params;

    // Find the classroom by ID
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    // Extract forms from the classroom
    const forms = classroom.forms;

    res.status(200).json({message:"All Forms of the Classroom",forms:forms});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/classrooms/:code/update-form-results',verifyToken,subAdminCheck, async (req, res) => {
  try {
    const { studentId, formId, marks } = req.body;
    const { code } = req.params;

    // Find the classroom by ID
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

// Find the form within the classroom's forms array
const form = classroom.forms.id(formId);

if (!form) {
  return res.status(404).json({ message: 'Form not found in the classroom' });
}

// Check if a result entry for the student already exists
const existingResult = form.results.find(result => result.studentId.toString() === studentId);



if (existingResult) {
  // Update existing result
  existingResult.marks = marks;
} else {
  // Push a new result entry
  form.results.push({ studentId, marks });
}

await classroom.save();


// Update user form results
const user = await User.findOne({_id:studentId});
if (!user) {
  return res.status(404).json({ message: 'User not found ' });
}

// Check if a result entry for the student already exists
const existingUserResult = user.formResults.find(result => result.formId.toString() === formId);


if (existingUserResult) {
  // Update existing result
  existingUserResult.marks = marks;
} else {
  // Push a new result entry
  user.formResults.push({ formId, marks });
}

await user.save();


    res.status(200).json({ message: 'Form results updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Route to delete a single form based on its formId
router.delete('/classrooms/:code/forms/:formId', verifyToken,subAdminCheck, async (req, res) => {
  try {
    const { code,formId } = req.params;

    // Find the classroom by code
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    // Find the form by formId
    const form = classroom.forms.id(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

          // Find the post index by postId
          const formIndex = classroom.forms.findIndex(form => form._id == formId);

          if (formIndex === -1) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          // Remove the post from the classroom
          classroom.forms.splice(formIndex, 1);
          await classroom.save();
    await classroom.save();

    res.json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//---------------------------------------------------------------------------------Test Updation--------------------------------------------------------------------------------

// Route to update test scores in both classroom and individual user
router.put('/classrooms/:code/update-test-results', verifyToken, subAdminCheck, async (req, res) => {
  try {
    const { code } = req.params;
    const { testName, results } = req.body;

    // Find the classroom by code
    const classroom = await Classroom.findOne({ code });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    // Push test scores to the classroom
    classroom.test.push({
      testName,
      testScores: results
    });

    // Save the updated classroom
    await classroom.save();

    // Retrieve the testId from the saved test scores
    const savedTest = classroom.test.find(test => test.testName === testName);
    const testId = savedTest._id;

    // Update test scores for individual users
    for (const { studentId, marks } of results) {
      const user = await User.findOne({ _id: studentId });

      if (!user) {
        return res.status(404).json({ message: 'User not found ' });
      }

      // Check if a result entry for the student already exists
      const existingUserResult = user.testResults.find(result => result.testId.toString() === testId);

      if (existingUserResult) {
        // Update existing result
        existingUserResult.marks = marks;
      } else {
        // Push a new result entry
        user.testResults.push({ testId, marks });
      }

      // Save the updated user
      await user.save();
    }

    res.status(200).json({ message: 'Test results updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;