const express = require('express');
const {getJob,postJob,deleteJob} = require('../Controller/JobController');
const JobRouter = express.Router();
const fetchuser = require('../middleware/fetchuser');
JobRouter.route('')
.get(fetchuser,getJob)
.post(fetchuser,postJob)
.delete(deleteJob);

module.exports = JobRouter;