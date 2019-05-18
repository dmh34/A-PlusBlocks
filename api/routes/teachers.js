const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Teacher = require('../../models/teacher')

router.get('/', (req, res, next) => {
  Teacher.find()
  .select("firstName lastName _id")
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      teachers: docs.map(doc => {
        return {
          firstName: doc.firstName,
          lastName: doc.lastName,
          _id: doc._id,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/teachers/' + doc._id
          }
        }
      })
    }
    console.log(response);
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

router.post('/', (req, res, next) => {
  const teacher = new Teacher({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  
  teacher.save()
  .then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Handling  POST requests to /teachers',
      createdTeacher: teacher
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });


});

router.get('/:teacherId', (req, res, next) => {
  const id = req.params.teacherId;
  Teacher.findById(id).exec()
  .then(doc => {
    console.log("From database", doc);
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({message: 'No valid entry found'})
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
});

router.patch('/:teacherId', (req, res, next) => {
  const id = req.params.teacherId
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Teacher.update({ _id: id}, { $set: updateOps })
  .exec()
  .then(result => {
    console.log(result);
    res.status(500).json(result);
  });
});

router.delete('/:teacherId', (req, res, next) => {
  const id = req.params.teacherId;
  Teacher.remove({ _id: id })
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ error: err })
  });
});



module.exports = router;

