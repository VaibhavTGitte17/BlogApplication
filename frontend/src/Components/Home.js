import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./blog2.jpg";
import Image2 from "./blog1.jpg";
import Image3 from "./blog5.jpg";
import Image4 from "./write.jpg";
import Image5 from "./read.jpg";
import Image6 from "./feed1.jpg";
import Image7 from "./feed3.jpeg";



function Home() {
  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide my-3">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100" alt="logo" style={{ width: "80%" }}  />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
          
            </div>
          </div>
          <div className="carousel-item">
            <img src={ Image2 } className="d-block w-100" alt="logo" style={{ width: "80%" }}  />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ Image3 } className="d-block w-100" alt="logo" style={{ width: "80%" }}  />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
      <img src={Image4} alt='logo' className="card-img-top img-responsive" style={{width:'520px', textAlign:'justify'}}/>
        <h5 class="card-title">Create The Blog</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo sed voluptate atque 
        esse odio quasi
         nam perspiciatis ipsa obcaecati?
        </p>
        <Link to="/create" class="btn btn-outline-primary">Create Blog</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src={Image5} alt='logo' className="card-img-top img-responsive" style={{width:'470px', textAlign:'justify'}} />
        <h5 class="card-title">Read Your Created Blog</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis doloribus animi enim 
        repellendus dicta perferendis reprehenderit alias illo dolore.
        </p>
        <Link to="/read" class="btn btn-outline-primary">Read Blog</Link>
      </div>
    </div>
  </div>
</div>


<div class="row my-3">
<div class="col-sm-6 mb-3 mb-sm-0">
  <div class="card">
    <div class="card-body">
    <img src={Image6} alt='logo' className="card-img-top img-responsive" style={{width:'350px', textAlign:'justify'}}/>
      <h5 class="card-title">Give Your Feedback</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo sed voluptate atque 
      esse odio quasi
       nam perspiciatis ipsa obcaecati?
      </p>
      <Link to="/contact" class="btn btn-outline-primary">Give Us Feedback</Link>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img src={Image7} alt='logo'  style={{width:'450px', textAlign:'justify'}} />
      <h5 class="card-title">See Your Created Feed</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis doloribus animi enim 
      repellendus dicta perferendis reprehenderit alias illo dolore.
      </p>
      <Link to="/show" class="btn btn-outline-primary">See Feedbck</Link>
    </div>
  </div>
</div>
</div>


    </div>
    
  );
}

export default Home;
