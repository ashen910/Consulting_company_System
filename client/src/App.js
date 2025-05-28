import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import './Error.css';

import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import login from './components/login';

import Carbon from './components/Carbon';
import HydroPower from './components/HydroPower';
import Reforestation from './components/Reforestation';
import Solar from './components/Solar';

import Service from './components/Service';


//Dashboards
import HcDashboard from './components/Dashboards/HcDashboard';
import JcDashboard from './components/Dashboards/JcDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';




//Project Proposal Management
import Appoinment from './components/Functions/PrjectProposalManagement/Appoinment';
import ViewAppoinments from './components/Functions/PrjectProposalManagement/ViewAppoinments';
import Meetings from './components/Functions/PrjectProposalManagement/Meetings';
import CreateMeetings from './components/Functions/PrjectProposalManagement/CreateMeetings';
import EditMeetings from './components/Functions/PrjectProposalManagement/EditMeetings';
import NewClientReport from './components/Functions/PrjectProposalManagement/NewClientReport';




//Consultant Recruitment Management
import Advertisments from './components/Functions/ConsultantRecruitmentManagement/Advertisments';
import CreateAdvertisments from './components/Functions/ConsultantRecruitmentManagement/CreateAdvertisments';
import EditAdvertisments from './components/Functions/ConsultantRecruitmentManagement/EditAdvertisments';
import JobAdvertisments from './components/Functions/ConsultantRecruitmentManagement/JobAdvertisments';
import JobApplicationForm from './components/Functions/ConsultantRecruitmentManagement/JobApplicationForm';
import ViewApplicants from './components/Functions/ConsultantRecruitmentManagement/ViewApplicants';
import NewJcReport from './components/Functions/ConsultantRecruitmentManagement/NewJcReport';




//User Profile Management
import UserProfiles from './components/Functions/UserProfileManagement/UserProfiles';
import CreateUserProfiles from './components/Functions/UserProfileManagement/CreateUserProfiles';
import EditUserProfiles from './components/Functions/UserProfileManagement/EditUserProfiles';




//Finacial Management
import AllCashFlows from './components/Functions/FinancialManagement/AllCashflows';
import ProjectCashFlows from './components/Functions/FinancialManagement/ProjectCash-Flows';
import CreateCashFlows from './components/Functions/FinancialManagement/CreateCash-Flows';
import EditCashFlows from './components/Functions/FinancialManagement/EditCash-Flows';
import MonthlyFinancialReport from './components/Functions/FinancialManagement/MonthlyFinancialReport';
import ViewProjectCashFlow from './components/Functions/FinancialManagement/ViewProjectCash-Flow';




//Project Detail Search
import SearchYourProject from './components/Functions/SearchYourProject';




//Project Team Management
import ProjectTeams from './components/Functions/Project Team Management/ProjectTeams';
import CreateTeamProfiles from './components/Functions/Project Team Management/CreateTeamProfiles';
import JCProjectTeams from './components/Functions/Project Team Management/JCProjectTeams';
import JCTeamProfiles from './components/Functions/Project Team Management/JCTeamProfiles';
import JCEditTeamProfiles from './components/Functions/Project Team Management/EditTeamProfiles';
import MarkInvolvement from './components/Functions/Project Team Management/markInvolvement';



//Project Process-Based Management
import ProjectDetailsProfiles from './components/Functions/ProjectProcessBasedManagement/ProjectDetailsProfiles';
import CreateProjectDetailsProfiles from './components/Functions/ProjectProcessBasedManagement/CreateProjectDetailsProfiles';
import EditProjectDetailsProfiles from './components/Functions/ProjectProcessBasedManagement/EditProjectDetailsProfiles';
import OngoingProjects from './components/Functions/ProjectProcessBasedManagement/OngoingProjets';
import ViewProjectProgress from './components/Functions/ProjectProcessBasedManagement/ViewProjectProgress';
import MonthlyProgressReport from './components/Functions/ProjectProcessBasedManagement/MonthlyProgressReport';
import AllProgress from './components/Functions/ProjectProcessBasedManagement/AllProgress';



//Feedback Management
import GiveFeedback from './components/Functions/FeedbackManagement/GiveFeedback';
import ClientReviews from './components/Functions/FeedbackManagement/ClientReviews';
import Feedback from './components/Functions/FeedbackManagement/Feedback';
import FeedbackReport from './components/Functions/FeedbackManagement/FeedbackReport';




//Notification Management
import AdminNotificationSection from './components/Functions/NotificationManagement/AdminNotificationSection';
import CreateNotice from './components/Functions/NotificationManagement/CreateNotice';
import EditNotificationSection from './components/Functions/NotificationManagement/EditNotificationSection';
import ClientNotificationSection from './components/Functions/NotificationManagement/ClientNotificationSection';




//Workshop Management
import WorkshopsTimetable from './components/Functions/WorkshopManagement/WorkshopsTimetable';
import AddWorkshopRecords from './components/Functions/WorkshopManagement/AddWorkshopRecords';
import EditWorkshopRecords from './components/Functions/WorkshopManagement/EditWorkshopRecords';
import WorkshopAdvertisments from './components/Functions/WorkshopManagement/WorkshopAdvertisments';
import MonthlyWorkshopReport from './components/Functions/WorkshopManagement/MonthlyWorkshopReport';
import RegisteredList from './components/Functions/WorkshopManagement/RegisteredList';



//Pre-Designed Project Sales Management
import SalesRecords from './components/Functions/PreDesignedProjectsSalesManagement/DesignedProjectsSalesRecords';
import AddSalesRecords from './components/Functions/PreDesignedProjectsSalesManagement/AddSalesRecords'
import EditSalesRecords from './components/Functions/PreDesignedProjectsSalesManagement/EditSalesRecords';
import DesignedProjects from './components/Functions/PreDesignedProjectsSalesManagement/DesignProjects';
import SalesReport from './components/Functions/PreDesignedProjectsSalesManagement/Sales&InventoryReport';
import Request from './components/Functions/PreDesignedProjectsSalesManagement/Request';
import RequestList from './components/Functions/PreDesignedProjectsSalesManagement/RequestList';




export default class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <Logo />
        <div style={{ zIndex: 99, top: 0, position: 'sticky' }}>
          <NavBar />
        </div>

        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={login}></Route>
        </div>


        {/* Dashboards */}
        <Route path="/HCdashboard" component={HcDashboard}></Route>
        <Route path="/JCdashboard" component={JcDashboard}></Route>
        <Route path="/AdminDashboard" component={AdminDashboard}></Route>

        
        <Route path="/carbon" component={Carbon}></Route>
        <Route path="/hydropower" component={HydroPower}></Route>
        <Route path="/reeforestation" component={Reforestation}></Route>
        <Route path="/solar" component={Solar}></Route>

        <Route path="/Service" component={Service}></Route>


        {/* Project Proposal Management */}
        <Route path="/clientAppoinments" component={Appoinment}></Route>
        <Route path="/viewAppoinments" component={ViewAppoinments}></Route>
        <Route path="/meetings" component={Meetings}></Route>
        <Route path="/createMeetings" component={CreateMeetings}></Route>
        <Route path="/editMeetings/:id" component={EditMeetings}></Route>
        <Route path="/newClientReport" component={NewClientReport}></Route>



        {/* Consultant Recruitment Management */}
        <Route path="/advertisments" component={Advertisments}></Route>
        <Route path="/createAdvertisments" component={CreateAdvertisments}></Route>
        <Route path="/editAdvertisments/:id" component={EditAdvertisments}></Route>
        <Route path="/jobAdvertisments" component={JobAdvertisments}></Route>
        <Route path="/jobApplicatonForm" component={JobApplicationForm}></Route>
        <Route path="/viewApplicants" component={ViewApplicants}></Route>
        <Route path="/newJcReport" component={NewJcReport}></Route>



        {/* User Profile Management */}
        <Route path="/userProfiles" component={UserProfiles}></Route>
        <Route path="/createUserProfile" component={CreateUserProfiles}></Route>
        <Route path="/editUserProfile/:id" component={EditUserProfiles}></Route>



        {/* Finacial Management */}
        <Route path="/projectCashFlows" component={ProjectCashFlows}></Route>
        <Route path="/createCashFlows" component={CreateCashFlows}></Route>
        <Route path="/editCashFlows/:id" component={EditCashFlows}></Route>
        <Route path="/monthlyFinancialReport" component={MonthlyFinancialReport}></Route>
        <Route path="/viewProjectCashFlow/:id" component={ViewProjectCashFlow}></Route>
        <Route path="/allCashFlows" component={AllCashFlows}></Route>


        {/* Project Detail Search */}
        <Route path="/searchYourProject" component={SearchYourProject}></Route>
       



        {/* Project Team Management */}
        <Route path="/projectTeams" component={ProjectTeams}></Route>
        <Route path="/createTeamProfiles" component={CreateTeamProfiles}></Route>
        <Route path="/jcProjectTeams" component={JCProjectTeams}></Route>
        <Route path="/jcTeamProfiles/:id" component={JCTeamProfiles}></Route>
        <Route path="/EditTeamProfiles/:id" component={JCEditTeamProfiles}></Route>
        <Route path="/involvement/:id" component={MarkInvolvement}></Route>



        {/* Project Process-Based Management */}
        <Route path="/projectDetailsProfiles" component={ProjectDetailsProfiles}></Route>
        <Route path="/createProjectDetailsProfiles" component={CreateProjectDetailsProfiles}></Route>
        <Route path="/editProjectDetailsProfiles/:id" component={EditProjectDetailsProfiles}></Route>
        <Route path="/ongoingProjects" component={OngoingProjects}></Route>
        <Route path="/viewProjectProgress/:id" component={ViewProjectProgress}></Route>
        <Route path="/monthlyProgressReport" component={MonthlyProgressReport}></Route>
        <Route path="/allProgress" component={AllProgress}></Route>



        {/* Feedback Management */}
        <Route path="/giveFeedback" component={GiveFeedback}></Route>
        <Route path="/clientReviews" component={ClientReviews}></Route>
        <Route path="/feedback" component={Feedback}></Route>
        <Route path="/feedbackReport" component={FeedbackReport}></Route>



        {/* Notification Management */}
        <Route path="/adminNotificationSection" component={AdminNotificationSection}></Route>
        <Route path="/createNotice" component={CreateNotice}></Route>
        <Route path="/editNotificationSection/:id" component={EditNotificationSection}></Route>
        <Route path="/clientNotificationSection" component={ClientNotificationSection}></Route>



        {/* Workshop Management */}
        <Route path="/workshopTimetable" component={WorkshopsTimetable}></Route>
        <Route path="/addWorkshopRecords" component={AddWorkshopRecords}></Route>
        <Route path="/editWorkshopRecords/:id" component={EditWorkshopRecords}></Route>
        <Route path="/workshopAdvertisments" component={WorkshopAdvertisments}></Route>
        <Route path="/monthlyWorkshopReport" component={MonthlyWorkshopReport}></Route>
        <Route path="/registeredList" component={RegisteredList}></Route>


        {/* Pre-Designed Project Sales Management */}
        <Route path="/salesRecords" component={SalesRecords}></Route>
        <Route path="/addSalesRecords" component={AddSalesRecords}></Route>
        <Route path="/editSalesRecords/:id" component={EditSalesRecords}></Route>
        <Route path="/designedProjects" component={DesignedProjects}></Route>
        <Route path="/salesReport" component={SalesReport}></Route>
        <Route path="/request" component={Request}></Route>
        <Route path="/requestList" component={RequestList}></Route>
        <Footer />



      </BrowserRouter>


    )
  }
}