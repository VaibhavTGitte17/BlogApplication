import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import UpdateForm from './UpdateForm';
import Spinner from './Spinner';
import { Modal, Button } from 'react-bootstrap';
import Image1 from './blog1.jpg';
import './Comp.css';

function Read({ setProgress, showAlert }) {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setProgress(30);
      try {
        const blogResponse = await AxiosInstance.get("blog/");
        setBlogs(blogResponse.data);
        setProgress(70); 
        // Simulate delay for demonstration
        setTimeout(() => {
          setLoading(false);
          setProgress(100); // Complete progress
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setProgress(100); // Complete progress even if there is an error
      }
    };

    fetchData();
  }, [setProgress]);


  const handleDelete = async (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  
  const handleConfirmDelete = async () => {
    try {
      await AxiosInstance.delete(`blog/${deleteId}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== deleteId));
      setShowDeleteModal(false);
      setDeleteId(null);
      showAlert("Blog deleted successfully!", "danger");
    } catch (error) {
      console.error("Error deleting blog:", error);
      showAlert("Failed to delete blog.", "danger");
      
    }
  };

  const handleUpdate = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseUpdateForm = () => {
    setSelectedBlog({});
  };

  const handleBlogUpdate = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
    setSelectedBlog({});
    showAlert("Blog updated successfully!" ,"success")
  };

  return (
    <div className="container">
      <h1 className="my-4">All Blogs</h1>
      {loading && <Spinner />}
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100 fixed-height-card">
              <div className="card-body overflow-auto">
                <img src={Image1} alt="logo" className="card-img-top" />
                <div>
                  <h5 className="card-title my-3 text-primary">{blog.title}</h5>
                  <h6 className="card-text" style={{ textAlign: 'justify' }}>
                    <strong>Author:</strong> {blog.author}
                  </h6>
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    <strong>Content:</strong> {blog.content}
                  </p>
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    <em>Comments: </em> {blog.comments}
                  </p>
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    <strong>Date:</strong> {blog.date}
                  </p>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleUpdate(blog)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {Object.keys(selectedBlog).length > 0 && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content modal-lg">
              <div className="modal-header">
                <h5 className="modal-title">Update the Selected Blog</h5>
                <button type="button" className="btn-close" onClick={handleCloseUpdateForm}></button>
              </div>
              <div className="modal-body">
                <UpdateForm blog={selectedBlog} onUpdate={handleBlogUpdate} onClose={handleCloseUpdateForm} />
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this blog?</Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-secondary" onClick={() => setShowDeleteModal(false)}>
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

export default Read;
