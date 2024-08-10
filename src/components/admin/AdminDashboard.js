import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Table, Navbar, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const apiUrl = process.env.REACT_APP_API_URL;

const AdminDashboard = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for admin authentication
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/admin-login'); 
    }

    const fetchFeedbackData = async () => {
      try {
        const response = await fetch(`${apiUrl}/feedback`);
        if (!response.ok) {
          throw new Error('Failed to fetch feedback data');
        }
        const data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbackData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated'); 
    navigate('/admin-login'); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filtering logic
  const filteredData = feedbackData.filter((feedback) => {
    return (
      (selectedCourse === '' || feedback.course_name === selectedCourse) &&
      (selectedTeacher === '' || feedback.teacher_name === selectedTeacher) &&
      (selectedBatch === '' || feedback.batch_name === selectedBatch)
    );
  });

  // Prepare data for the chart
  const overallExperienceData = filteredData.map(feedback => feedback.overallExperience);
  const engagementData = filteredData.map(feedback => feedback.engagement);
  const punctualityData = filteredData.map(feedback => feedback.punctuality);
  const decorumData = filteredData.map(feedback => feedback.decorum);
  const facilitiesData = filteredData.map(feedback => feedback.facilities);
  const cleanlinessData = filteredData.map(feedback => feedback.cleanliness);
  const labels = filteredData.map((_, index) => `Feedback ${index + 1}`);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Overall Experience',
        data: overallExperienceData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Engagement',
        data: engagementData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Punctuality',
        data: punctualityData,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Decorum',
        data: decorumData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Facilities',
        data: facilitiesData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cleanliness',
        data: cleanlinessData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container fluid className="p-0">
      {/* Header with updated styling */}
      <Navbar
        fixed="top"
        variant="dark"
        style={{
          background: 'linear-gradient(to right, #4535C1, #36C2CE)',
          padding: '8px 16px',
          zIndex: 1200,
        }}
      >
        <Navbar.Brand href="#" style={{ color: 'white', fontWeight: 'bold' }}>
          Admin Portal
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Navbar>

      <Container className="mt-5 pt-4">
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <h1
              className="text-center"
              style={{
                marginBottom: '10px',
                marginTop: window.innerWidth < 600 ? '20px' : 0,
                background: 'linear-gradient(to right, #4535C1, #36C2CE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Admin Dashboard
            </h1>

            {/* Filter Section */}
            <Row className="mb-4">
              <Col>
                <Form.Group controlId="courseFilter">
                  <Form.Label>Filter by Course</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="form-control"
                  >
                    <option value="">All Courses</option>
                    {[...new Set(feedbackData.map(feedback => feedback.course_name))].map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="teacherFilter">
                  <Form.Label>Filter by Teacher</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedTeacher}
                    onChange={(e) => setSelectedTeacher(e.target.value)}
                    className="form-control"
                  >
                    <option value="">All Teachers</option>
                    {[...new Set(feedbackData.map(feedback => feedback.teacher_name))].map((teacher, index) => (
                      <option key={index} value={teacher}>
                        {teacher}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="batchFilter">
                  <Form.Label>Filter by Batch</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    className="form-control"
                  >
                    <option value="">All Batches</option>
                    {[...new Set(feedbackData.map(feedback => feedback.batch_name))].map((batch, index) => (
                      <option key={index} value={batch}>
                        {batch}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            {filteredData.length === 0 ? (
              <p>No feedback data available.</p>
            ) : (
              <>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th style={headerStyle}>Student ID</th>
                        <th style={headerStyle}>Teacher Name</th>
                        <th style={headerStyle}>Course Name</th>
                        <th style={headerStyle}>Batch Name</th>
                        <th style={headerStyle}>Overall Experience</th>
                        <th style={headerStyle}>Engagement</th>
                        <th style={headerStyle}>Punctuality</th>
                        <th style={headerStyle}>Decorum</th>
                        <th style={headerStyle}>Facilities</th>
                        <th style={headerStyle}>Cleanliness</th>
                        <th style={headerStyle}>Suggestions</th>
                        <th style={headerStyle}>Recommended</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((feedback, index) => (
                        <tr key={index}>
                          <td>{feedback.student_id}</td>
                          <td>{feedback.teacher_name}</td>
                          <td>{feedback.course_name}</td>
                          <td>{feedback.batch_name}</td>
                          <td>{feedback.overallExperience}</td>
                          <td>{feedback.engagement}</td>
                          <td>{feedback.punctuality}</td>
                          <td>{feedback.decorum}</td>
                          <td>{feedback.facilities}</td>
                          <td>{feedback.cleanliness}</td>
                          <td>{feedback.suggestions}</td>
                          <td>{feedback.recommended ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <Bar data={chartData} />
              </>
            )}
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

const headerStyle = {
  fontWeight: 'bold',
  textAlign: 'center',
};

export default AdminDashboard;








