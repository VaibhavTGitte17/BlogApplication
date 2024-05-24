import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./Axios";
import "./Style.css"


function Contact() {
  const navigate = useNavigate();
  const [feedData, setFeedData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    blog_name: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AxiosInstance.post(`feed/`, feedData);
      console.log("Feedback added successfully:", response.data);
      navigate(`/show`);
      setFeedData({
        name: "",
        email: "",
        password: "",
        phone: "",
        college: "",
        blog_name: ""
      });
    } catch (error) {
      console.error("Error adding feedback:", error);
      if (error.response && error.response.data) {
        console.log("Validation errors:", error.response.data);
      }
      // Optionally display a user-friendly message or handle error gracefully
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container my-3 mx-3">
      <h1>Give us your feedback</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card bg-white text-black">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" style={{ fontWeight: "bold" }} className="label-left my-2">
                    Enter Your Full Name Below
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                   
                    name="name"
                    value={feedData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" style={{ fontWeight: "bold" }} className="label-left my-2">
                    Enter the Email Address Below
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    
                    name="email"
                    value={feedData.email} 
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" style={{ fontWeight: "bold" }} className="label-left my-2">
                    Enter The Password of Your Email Address Below
                  </label>
                  <input
                    id="password"
                    type="text"
                    className="form-control"
                    
                    name="password"
                    value={feedData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" style={{ fontWeight: "bold" }} className="label-left my-2">
                    Enter The Phone number of Your Mobile
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                   
                    name="phone"
                    value={feedData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="college" style={{ fontWeight: "bold" }} className="label-left my-2">
                    Enter the name of college or company below
                  </label>
                  <input
                    id="college" // Added missing id attribute
                    type="text"
                    className="form-control"
                    
                    name="college"
                    value={feedData.college}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="blog_name" style={{ fontWeight: "bold" }} className="label-left my-2">
                    Enter The blog_name which you liked most
                  </label>
                  <input
                    id="blog_name"
                    type="text"
                    className="form-control"
                   
                    name="blog_name"
                    value={feedData.blog_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="container text-center">
                  <button type="submit" className="btn btn-outline-info">
                    Add Feedback
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

export default Contact;
