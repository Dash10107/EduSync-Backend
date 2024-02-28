const express = require("express");
const router = express.Router();
const subAdminCheck = require("../middlewares/SubAdmin");
const adminCheck = require("../middlewares/Admin");
const verifyToken = require("../middlewares/Token");
const Feedback = require('../models/Feedback');
const Notice = require("../models/Noticeboard")


// const openaiApiKey  = process.env.OPENAI_KEY // Replace with your OpenAI API key
// const { OpenAI } = require('openai');
// // Instantiate the OpenAI API client
// const openai = new OpenAI({ apiKey: openaiApiKey });

const axios = require('axios');
//const { processUserMessage } = require("../middlewares/chatbot");





// Route to post feedback for subadmins
router.post('/post-feedback', verifyToken, async (req, res) => {
  try {
    const { subAdminId, message } = req.body;

    // Create a new feedback instance
    const feedback = new Feedback({
      subAdminId,
      feedbackMessage:message,
    });

    // Save the feedback to the database
    await feedback.save();

    res.status(201).json({ message: 'Feedback posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all feedbacks based on subadmin's user ID
router.get('/get-feedbacks', verifyToken,subAdminCheck, async (req, res) => {
    try {
      const subAdminId = req.user.id

   
  
      // Find all feedbacks for the specified subadmin ID
      const feedbacks = await Feedback.find({ subAdminId });

            // Ensure that the user deleting the feedback is the one who posted it
      // You might want to adjust this check based on your specific requirements
      if (feedbacks.length===0) {
        return res.status(403).json({ message: 'No Feedbacks Found for the teacher.' });
      }
  
      res.json({ feedbacks });


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



// Route to delete feedback based on its ID
router.delete('/delete-feedback/:feedbackId', verifyToken,subAdminCheck, async (req, res) => {
    try {
        const feedbackId = req.params.feedbackId;

        // Delete the feedback by ID
        const result = await Feedback.deleteOne({ _id: feedbackId });
    
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Feedback not found' });
        }
     
      res.json({ message: 'Feedback deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

//---------------------------------------------------------------------------NoticeBoard-------------------------------------------------------------------------------------------



// Route to post a notice
router.post('/add-notices', verifyToken,(subAdminCheck || adminCheck), async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new notice
    const newNotice = new Notice({
      title,
      content,

    });

    // Save the notice to the database
    const savedNotice = await newNotice.save();

    res.status(201).json({message:"Notice Added Successfully ",savedNotice});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all notices
router.get('/get-notices', async (req, res) => {
    try {
      // Retrieve all notices from the database
    const allNotices = await Notice.find().sort({ date: -1 }); // Sort by date in descending order

    // Retrieve the latest 3 notices
    const latestThreeNotices = allNotices.slice(0, 3);
  
      res.status(200).json({message:"All the Notices",allNotices,latestThreeNotices});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


// Route to delete notice based on its ID
router.delete('/delete-notice/:noticeId', verifyToken,(subAdminCheck || adminCheck), async (req, res) => {
    try {
        const noticeId = req.params.noticeId;

        // Delete the feedback by ID
        const result = await Notice.deleteOne({ _id: noticeId });
    
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Notice not found' });
        }
     
      res.json({ message: 'Notice deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


//--------------------------------------------------------------------------------------Chatbot Prompt ------------------------------------------------------------------------------------------------------------------------------------


// Route to handle chatbot requests
// router.post('/chatbot',verifyToken, async (req, res) => {
//   try {
//     const { prompt } = req.body;
    
    

//     // Call the OpenAI API to generate a response based on the prompt
//     // const response = await openai.completions.create({model:"gpt-3.5-turbo-instruct",prompt:prompt});

//     // console.log('Response from GPT',response);
    
//     // Extract the generated response from the API result
//     // const chatbotResponse = response.data.choices[0].text.trim();

//     // res.status(200).json({"Response":"Your response is : " ,response: chatbotResponse });


// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


module.exports = router;