const express = require('express');
const Jobs = require('../models/jobspost');


const router = express.Router();

//Post
router.post('/job/save', (req,res)=>{

    let newJobs = new Jobs(req.body);

    newJobs.save().then(() => {
        console.log('Saved successfully');
        return res.status(200).json({
        success:"Save Successfully"
    });
    }).catch((error) => {
        console.error('Error saving model:', error);
    }).finally(() => {
        // Do something else
    });
      
});

//GET
router.get('/jobs', (req,res)=> {

    Jobs.find().then(jobs => {
        return res.status(200).json({
            success: true,
            existingJobs: jobs
        });
    }).catch(err => {
        return res.status(400).json({
            error: err
        });
    });
    

});


//PUT
router.put('/job/update/:id', (req, res) => {
    Jobs.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => {
        return res.status(200).json({ success: 'Update Successfully' });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  });
  


//DELETE
router.delete('/job/delete/:id', async (req, res) => {
    try {
      const deletedJobs = await Jobs.findByIdAndRemove(req.params.id).exec();
      return res.json({
        message: 'Delete Successful',
        deletedJobs,
      });
    } catch (err) {
      return res.status(400).json({
        message: 'Delete Unsuccessful',
        err,
      });
    }
  });
 
//GET one data
router.get('/job/:id', (req, res) => {
  let jobId = req.params.id;

  Jobs.findById(jobId)
    .then(job => {
      if (!job) {
        return res.status(404).json({ success: false, message: 'Jobs not found' });
      }
      return res.status(200).json({ success: true, job });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Server error' });
    });
});
  


module.exports = router;