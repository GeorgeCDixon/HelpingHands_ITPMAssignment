const express = require('express');
const Courses = require('../models/coursepost');

const router = express.Router();

//Post
router.post('/course/save', (req,res)=>{

    let newCourses = new Courses(req.body);

    newCourses.save().then(() => {
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
router.get('/courses', (req,res)=> {

    Courses.find().then(courses => {
        return res.status(200).json({
            success: true,
            existingCourses: courses
        });
    }).catch(err => {
        return res.status(400).json({
            error: err
        });
    });
    

});


//PUT
router.put('/course/update/:id', (req, res) => {
    Courses.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => {
        return res.status(200).json({ success: 'Update Successfully' });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  });
  


//DELETE
router.delete('/course/delete/:id', async (req, res) => {
    try {
      const deletedCourses = await Courses.findByIdAndRemove(req.params.id).exec();
      return res.json({
        message: 'Delete Successful',
        deletedCourses,
      });
    } catch (err) {
      return res.status(400).json({
        message: 'Delete Unsuccessful',
        err,
      });
    }
  });

//GET one data
router.get('/course/:id', (req, res) => {
  let courseId = req.params.id;

  Courses.findById(courseId)
    .then(course => {
      if (!course) {
        return res.status(404).json({ success: false, message: 'Courses not found' });
      }
      return res.status(200).json({ success: true, course });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Server error' });
    });
});
  


module.exports = router;