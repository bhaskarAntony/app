// TabComponent.js
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the default styles
import '../styles/events.css'
import UpcomingEvents from './UpCommingEvents';
import Feedback from './Feedback';
import TicketBook from '../Modals/TicketBook';
import HeroRegister from './HeroRegister';
import NumberHiglight from './NumberHighlight/NumberHiglight';
import ApplyNow from '../Extra/ApplyNow';
import { EventsApi } from '../Data/DataFetcher';
import { useEffect } from 'react';

// const upcomingevents = [
//   {
//     bookticket:true,
//     image: "https://be-practical.com/images/event/event1.png",
//     title: "Connect With Industry Heads. MR. Satish SG",
//     keyword: "Industry Talks",
//     date: "30 SEP 2021",
//     time: "10.00 AM - 11.30 AM",
//     description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
//     topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
//   },
//   {
//     bookticket:true,
//     image: "https://be-practical.com/images/event/event1.png",
//     title: "Connect With Industry Heads. MR. Satish SG",
//     keyword: "Industry Talks",
//     date: "30 SEP 2021",
//     time: "10.00 AM - 11.30 AM",
//     description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
//     topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
//   },
//   // Add more events here if needed
// ];
// const pastevents = [
//   {
//     bookticket:false,
//     image: "https://be-practical.com/images/event/event1.png",
//     title: "Connect With Industry Heads. MR. Satish SG",
//     keyword: "Industry Talks",
//     date: "30 SEP 2021",
//     time: "10.00 AM - 11.30 AM",
//     description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
//     topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
//   },
//   {
//     bookticke:false,
//     image: "https://be-practical.com/images/event/event1.png",
//     title: "Connect With Industry Heads. MR. Satish SG",
//     keyword: "Industry Talks",
//     date: "30 SEP 2021",
//     time: "10.00 AM - 11.30 AM",
//     description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
//     topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
//   },
//   // Add more events here if needed
// ];
function Events() {
  const [loading, setLoading] = useState(true)
  const [EventsData, setEventsData] = useState([]);
  const [pastEvents, setPastEvents] = useState([])
  const [upcommingEvents, setUpComming] = useState([])
  useEffect(() => {
   const fetchData = async () => {
     try {
       const data = await EventsApi;
       setLoading(false)
       setEventsData(data);
       data.forEach(element => {
          if(element.eventType==="past"){
            setPastEvents(element)
            console.log(pastEvents)
          }
          else{
            setUpComming(element)
            console.log(upcommingEvents)
          }
       });
     } catch (error) {
      setLoading(true)
       console.error('Error fetching EventsData:', error);
     }
   };

   fetchData();
 }, []);
  const [BookTicket, setBookTicket] = useState(false)
  const ticketBookHandler= ()=>{
    setBookTicket(true)
  }

  return (
  <div className="container-fluid events-main p-0 overflow-hidden ">
    {/* <div className="bg-blur">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-8 col-lg-6 d-flex flex-column justify-content-center p-lg-5 p-5">
        <p className="fs-4 text-main-danger">Events, Conferences and Meetups</p>
          <h1 className="heading text-900">Be Practical Providing Featured Workshops</h1>
          <p className="fs-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore dolorum rem obcaecati. Assumenda aliquid exercitationem nulla, harum soluta nisi.</p>
        <div className="row  container-xxl m-auto">
          <div className="col-12 col-md-6 col-lg-6">
          <ApplyNow text="Enquire About Events"/>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-6">
        <img src="https://img.freepik.com/free-vector/hand-drawn-business-colleagues-communication_52683-76701.jpg" alt="events image" className="w-100 rounded-5" />
      </div>
    </div>
    </div> */}
    {/* <HeroRegister/> */}
    <div className="banner">
      <h1 className="fs-1 fw-bold">Be practical Events</h1>
    </div>
    {
      BookTicket?<TicketBook/> : null
    }
      <div className="container-fluid p-0 overflow-hidden mb-4">
      <Tabs className="p-0">
    <TabList className="custom-tabs p-2 sticky-top">
      <Tab className="custom-tab fs-3">Events</Tab>
      <Tab className="custom-tab fs-3">Upcoming Events</Tab>
    </TabList>

    <TabPanel className="container-fluid  bg-gray2">
    <UpcomingEvents events={EventsData} heading="Recent Events @ Be Practical" type="past"/>
    </TabPanel>
    <TabPanel className="container-fluid bg-gray2">
      <UpcomingEvents events={upcommingEvents} heading="Upcoming Events @ Be Practical" type="upcomming"/>
    </TabPanel>
  </Tabs>
    </div>

    {/* <NumberHiglight/> */}
    <Feedback/>
  </div>
  );
}

export default Events;
