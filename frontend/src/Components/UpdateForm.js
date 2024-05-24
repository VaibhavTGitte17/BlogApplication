import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from './Axios';
import "./Style.css"

function UpdateForm({ blog, onUpdate, onClose }) {
  
  const [formData, setFormData] = useState({
    title: blog.title,
    author: blog.author,
    comments: blog.comments,
    content: blog.content,
    date: blog.date,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AxiosInstance.put(`blog/${blog.id}/`, formData);
      onUpdate(response.data);
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="container my-3 mx-3">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card bg-white text-black">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" style={{ fontWeight: 'bold', textAlign:"justify" }} className="label-left my-2">
                    Enter The Suitable title for Your Blog
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder="Enter Title Name"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="author" style={{ fontWeight: 'bold' , textAlign:"justify"}} className="label-left my-2">
                    Enter the Author Name
                  </label>
                  <input
                    id="author"
                    type="text"
                    className="form-control"
                    placeholder="Enter author name"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="comments" style={{ fontWeight: 'bold' , textAlign:"justify"}} className="label-left my-2">
                    Enter the comments
                  </label>
                  <input
                    id="comments"
                    type="text"
                    className="form-control"
                    placeholder="Enter comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <div className="row">
                    {/* Calendar input */}
                    <div className="col-md-6">
                      <label htmlFor="date" style={{ fontWeight: 'bold', textAlign:"justify" }} className="label-left my-2">
                        Enter the date for your blog
                      </label>
                      <br />
                      <div className="input-group">
                        <DatePicker
                          selected={new Date(formData.date)} // Convert date string to Date object
                          onChange={(date) => setFormData({ ...formData, date: date.toISOString() })} // Convert date to ISO string
                          className="form-control"
                        />
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="content" style={{ fontWeight: 'bold', textAlign:"justify" }} className="label-left my-2">
                    Enter the content of your blog
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    rows="7"
                    className="form-control"
                    value={formData.content}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="container text-center">
                <button type="submit" className="btn btn-outline-success">
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default UpdateForm;
