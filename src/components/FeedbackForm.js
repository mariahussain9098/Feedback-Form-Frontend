import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import './css/FeedbackForm.css';

const apiUrl = process.env.REACT_APP_API_URL;

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    student_id: '',
    teacher_name: '',
    course_name: '',
    batch_name: '',
    overallExperience: 0,
    engagement: 0,
    punctuality: 0,
    decorum: 0,
    facilities: 0,
    cleanliness: 0,
    suggestions: '',
    peerInteraction: 0,
    instructorKnowledge: 0,
    programRelevance: 5,
    recommend: '',
  });

  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const stars = Array(5).fill(0).map((_, index) => index + 1);

  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/login'); // Redirect to login if not authenticated
    }

    // Set teachers, courses, and batches data
    setTeachers([
      { value: 'Miss Iqra', label: 'Miss Iqra' },
      { value: 'Miss Alina', label: 'Miss Alina' },
      { value: 'Miss Saba', label: 'Miss Saba' },
    ]);

    setCourses([
      { value: 'Web Development', label: 'Web Development' },
      { value: 'Graphic Designing', label: 'Graphic Designing' },
      { value: 'Flutter Development', label: 'Flutter Development' },
    ]);

    setBatches([
      { value: 'batch1', label: 'Batch One' },
      { value: 'batch2', label: 'Batch Two' },
      { value: 'batch3', label: 'Batch Three' },
    ]);
  }, [navigate]);

  const handleRatingChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form data submitted:', formData);
    
    try {
      const response = await fetch(`${apiUrl}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: formData.student_id,
          teacher_name: formData.teacher_name,
          course_name: formData.course_name,
          batch_name: formData.batch_name,
          overallExperience: formData.overallExperience,
          engagement: formData.engagement,
          punctuality: formData.punctuality,
          decorum: formData.decorum,
          facilities: formData.facilities,
          cleanliness: formData.cleanliness,
          peerInteraction: formData.peerInteraction,
          instructorKnowledge: formData.instructorKnowledge,
          programRelevance: formData.programRelevance,
          suggestions: formData.suggestions,
          recommend: formData.recommend === "yes",
        }),
      });
      console.log('Feedback submission response:', response);
  
      if (!response.ok) {
        const data = await response.json();
        console.error('Error data:', data); // Log error data
        alert('There was an error submitting your feedback.');
        return; // Exit function on error
      }
  
      navigate('/thank-you'); // Redirect on success
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error submitting your feedback. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
        <Card.Body>
          <h1 className="text-center" style={{ fontSize: '2.5rem' }}>
            Student Feedback Form
          </h1>

          <Form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <Form.Group controlId="student_id" className="mb-4">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                value={formData.student_id}
                onChange={(e) => setFormData({ ...formData, student_id: e.target.value })}
                placeholder="Enter your Student ID"
                required
              />
            </Form.Group>

            <Form.Group controlId="teacher_name" className="mb-4">
              <Form.Label>Select Teacher</Form.Label>
              <Select
                options={teachers}
                onChange={(option) => {
                  setFormData({ ...formData, teacher_name: option.value });
                  setSelectedTeacher(option);
                }}
                className="react-select"
                classNamePrefix="select"
                value={selectedTeacher}
                required
              />
            </Form.Group>

            <Form.Group controlId="course_name" className="mb-4">
              <Form.Label>Select Course</Form.Label>
              <Select
                options={courses}
                onChange={(option) => setFormData({ ...formData, course_name: option.value })}
                className="react-select"
                classNamePrefix="select"
                required
              />
            </Form.Group>

            <Form.Group controlId="batch_name" className="mb-4">
              <Form.Label>Select Batch</Form.Label>
              <Select
                options={batches}
                onChange={(option) => setFormData({ ...formData, batch_name: option.value })}
                className="react-select"
                classNamePrefix="select"
                required
              />
            </Form.Group>

            {/* Rating Fields */}
            <Form.Group controlId="overallExperience" className="mb-4">
              <Form.Label>How would you rate your overall experience in this program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('overallExperience', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="engagement" className="mb-4">
              <Form.Label>How would you rate the engagement of the program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.engagement >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('engagement', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="punctuality" className="mb-4">
              <Form.Label>How would you rate the punctuality of the program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('punctuality', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="decorum" className="mb-4">
              <Form.Label>How would you rate the decorum during the program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.decorum >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('decorum', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="facilities" className="mb-4">
              <Form.Label>How would you rate the facilities provided?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.facilities >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('facilities', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="cleanliness" className="mb-4">
              <Form.Label>How would you rate the cleanliness of the program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('cleanliness', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="peerInteraction" className="mb-4">
              <Form.Label>How would you rate peer interaction during the program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('peerInteraction', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="instructorKnowledge" className="mb-4">
              <Form.Label>How would you rate the instructor's knowledge?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('instructorKnowledge', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="programRelevance" className="mb-4">
              <Form.Label>How relevant do you find this program to your career?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.programRelevance >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('programRelevance', star)}
                    className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="suggestions" className="mb-4">
              <Form.Label>Suggestions for improvement:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.suggestions}
                onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="recommend" className="mb-4">
              <Form.Label>Would you recommend this program to others?</Form.Label>
              <Form.Control
                as="select"
                value={formData.recommend}
                onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Feedback
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FeedbackForm;


















