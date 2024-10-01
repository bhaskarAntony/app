import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabs, Tab, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/events');
        setEvents(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const today = new Date();

  const upcomingEvents = events.filter(event => new Date(event.date) >= today);
  const pastEvents = events.filter(event => new Date(event.date) < today);

  const renderEvents = (eventsList) => {
    if (eventsList.length === 0) {
      return <div className="text-center">No data found</div>;
    }

    return eventsList.map(event => (
    <div className="col-md-6">

          <Card key={event._id} className="mb-3 bg-light">
        <Card.Img variant="top" src={event.image} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.content}</Card.Text>
          <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
          <Card.Text><strong>Time:</strong> {event.time}</Card.Text>
          <Card.Text><strong>Mode:</strong> {event.mode}</Card.Text>
          {new Date(event.date) >= today && (
            <Button variant="primary" href={`https://example.com/register/${event._id}`}>
              Register
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
    ));
  };

  return (
    <div className="container-fluid">
       <Helmet>
          <title>Events | Be-Practical - Upcoming and Past Events</title>
          <meta name="description" content="Stay informed about Be-Practical's upcoming and past events. Join us for workshops, seminars, and industry gatherings to gain valuable insights and network with professionals." />
          <meta name="keywords" content="Events" />
          <link rel="canonical" href="https://be-practical.com/events" />
        </Helmet>
      <h2 className="text-center mb-4">Events</h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
      <div className="container">
          <Tabs defaultActiveKey="upcoming" id="events-tabs" className="mb-3">
          <Tab eventKey="upcoming" title="Upcoming Events">
            <div className="row">
            {renderEvents(upcomingEvents)}
            </div>
          </Tab>
          <Tab eventKey="past" title="Past Events">
           <div className="row">
           {renderEvents(pastEvents)}
           </div>
          </Tab>
        </Tabs>
      </div>
      )}
    </div>
  );
};

export default Events;
