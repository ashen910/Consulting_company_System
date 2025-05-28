const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
//Project Proposal Management Function routes
const meetingRoutes = require('./routes/meetings');
const appointmentRoutes = require('./routes/appointments');

//Consultant Recruitment Management Function routes
const adRoutes = require('./routes/ads');
const applicantRoutes = require('./routes/applicants');

//User Profile Management & Financial Function routes
const userProfiles = require('./routes/userProfiles');
const cashflows = require('./routes/cashflows');

//Project Team Management Function routes
const teamRoutes = require('./routes/teams');


//Project Process Based Management Function routes
const projectDetailsProfiles = require('./routes/projectDetailsProfiles');


//FeedBack & Notification Management Function routes
const notificationRoutes = require('./routes/notifications');
const feedbackRoutes= require('./routes/feedbacks');

//Workshop Management Function routes
const timetableRoutes = require('./routes/timetables');
const workshopRoutes = require('./routes/workshops');

//Pre Designed Projects Sales Management Function routes
const pdpRecordRoutes = require('./routes/pdpRecords');
const buyerRoutes = require('./routes/buyers')

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
//Project Proposal Management Function middlewares
app.use(meetingRoutes);
app.use(appointmentRoutes);

//Consultant Recruitment Management Function middlewares
app.use(adRoutes);
app.use(applicantRoutes);

//User Profile Management & Financial Function middlewares
app.use(userProfiles);
app.use(cashflows);

//Project Team Management Function middlewares
app.use(teamRoutes);


//Project Process Based Management Function middlewares
app.use(projectDetailsProfiles);


//FeedBack & Notification Management Function middlewares
app.use(notificationRoutes);
app.use(feedbackRoutes);


//Workshop Management Function middlewares
app.use(timetableRoutes);
app.use(workshopRoutes);

//Pre Designed Projects Sales Management Function middlewares
app.use(pdpRecordRoutes);
app.use(buyerRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://ravana123:ravana@ravana.y2fvd.mongodb.net/Ravana_Project?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is Running on ${PORT}`);
});