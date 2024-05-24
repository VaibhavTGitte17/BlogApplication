import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "./Axios";
import "./Style.css"

function Create() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    comments: "",
    content: "",
    date: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Format the date as YYYY-MM-DD
    const formattedDate = selectedDate
      ? selectedDate.toISOString().split("T")[0]
      : null;

    try {
      const response = await AxiosInstance.post(`blog/`, {
        title: formData.title,
        author: formData.author,
        comments: formData.comments,
        content: formData.content,
        date: formattedDate,
      });
      console.log("Blog added successfully:", response.data);
      navigate(`/read`);
      setFormData({
        title: "",
        author: "",
        comments: "",
        content: "",
        date: null,
      });
    } catch (error) {
      console.error("Error adding blog:", error);
      console.log("Validation errors:", error.response.data);
    }
  };

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container my-3 mx-3">
      <h1>Create your blogs here for future use</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card bg-white text-black">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="label-left my-2">
                    Enter The Suitable title for Your Blog
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="author" className="label-left my-2">
                    Enter the Author Name
                  </label>
                  <input
                    id="author"
                    type="text"
                    className="form-control"
                   
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="comments" className="label-left my-2">
                    Enter the comments
                  </label>
                  <input
                    id="comments"
                    type="text"
                    className="form-control"
                    
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </div>


                <div className="mb-3 col-12">
                  <label htmlFor="date" className="label-left my-2">
                    Enter the date for your blog
                  </label>
                  <div className="input-group full-width col-1">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className="form-control col-12"
                      placeholderText="dd/mm/yyyy"
                    />
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                  </div>
                </div>



                <div className="mb-3">
                  <label htmlFor="content" className="label-left my-2">
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
                  <button type="submit" className="btn btn-outline-info">
                    Add Blog
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

export default Create;
