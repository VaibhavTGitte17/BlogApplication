import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import Spinner from './Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function FeedRead({ setProgress, showAlert }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setProgress(30);
      try {
        const feedbackResponse = await AxiosInstance.get("feed/");
        setFeedbacks(feedbackResponse.data);
        setProgress(70);

        setTimeout(() => {
          setLoading(false);
          setProgress(100);
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setProgress(100);
      }
    };

    fetchData();
  }, [setProgress]);

  const handleShowModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await AxiosInstance.delete(`feed/${deleteId}`);
      setFeedbacks((prevFeedbacks) => prevFeedbacks.filter((feedback) => feedback.id !== deleteId));
      showAlert("Feedback deleted successfully!", "success");
    } catch (error) {
      console.error("Error deleting feedback:", error);
      showAlert("Failed to delete feedback.", "danger");
    } finally {
      handleCloseModal();
    }
  };

  return (
    <div className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="my-4">All Feedbacks</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
                <th>College/Company</th>
                <th>Favorite Blog</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.password}</td>
                  <td>{feedback.phone}</td>
                  <td>{feedback.college}</td>
                  <td>{feedback.blog_name}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleShowModal(feedback.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this feedback?</Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-secondary" onClick={handleCloseModal}>
            No
          </Button>
          <Button variant="btn btn-outline-danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FeedRead;
