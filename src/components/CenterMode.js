
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import {Container } from 'react-bootstrap';
import './style.css';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <Container>
          <div className="styles">
        <Slider {...settings}>
          <div>
            <img src="https://www.techinn.com/f/13819/138196330/tamashi-nations-the-avengers-captain-america-figure-15-cm.jpg" alt="" />
          </div>
          <div>
           
          <img src="https://newresultbd.com/wp-content/uploads/2021/12/spider-mannowayhome_lob_crd_03.jpg" alt="" />
          </div>
          <div>
          <img src="https://www.techinn.com/f/13819/138196330/tamashi-nations-the-avengers-captain-america-figure-15-cm.jpg" alt="" />
          </div>
          <div>
          <img src="https://newresultbd.com/wp-content/uploads/2021/12/spider-mannowayhome_lob_crd_03.jpg" alt="" />
          </div>
          <div>
          <img src="https://www.techinn.com/f/13819/138196330/tamashi-nations-the-avengers-captain-america-figure-15-cm.jpg" alt="" />
          </div>
          <div>
            <img src="https://newresultbd.com/wp-content/uploads/2021/12/spider-mannowayhome_lob_crd_03.jpg" alt="" />
          </div>
        </Slider>
      </div>
      </Container>
    );
  }
}
