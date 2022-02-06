import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
      render() {
        const settings = {
        //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
            <Container style={{marginTop : '20px'}}>
                <Row>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div key={1}>
                <Row>
                    <Col xs={6}>
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facere eaque sed animi dicta nobis. Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius consequuntur ratione </p>
                        </Col>
                     <Col xs={6}>
                         <img src="https://media.gettyimages.com/photos/success-picture-id912928582?s=612x612" alt="" />
                     </Col>
                 </Row>
              </div>
              <div key={2}>
              <Row>
                    <Col xs={6}>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facere eaque sed animi dicta nobis. Molestiae, nobis.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius consequuntur ratione </p>
                    </Col>
                     <Col xs={6}>
                         <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="" />
                     </Col>
                 </Row>
              </div>
              <div key={3}>
              <Row>
                     <Col xs={6}>
                     <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facere eaque sed animi dicta nobis.</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius consequuntur ratione nesc corrupti in fugiat.</p>
                     </Col>
                     <Col xs={6}>
                     <img src="https://st2.depositphotos.com/1003620/7314/i/600/depositphotos_73145299-stock-photo-teamwork-couple-climbing-helping-hand.jpg" alt="" />
                     </Col>
                 </Row>
              </div>
              <div key={4}>
                  <Row>
                    <Col xs={6}>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facere eaque sed animi dicta nobis Molestiae, nobis.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </Col>
                     <Col xs={6}>
                         <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="" />
                     </Col>
                     </Row>
              </div>
              <div key={5}>
              <Row>
                    <Col xs={6}>
                    <h2>Lorem ipsum, dolor sit amet consectetur acing elit. Natus facere eaque sed animi dictaing elit. Molestiae, nobis.</h2>
                    <p>Lorem ipsum dolor sit amet conseicing elit. Impedit eius consequuntur ratione nesciunt provident sapiente officiis quae corrupti in fugiat.</p>
                    </Col>
                     <Col xs={6}>
                     <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="" />
                     </Col>
                 </Row>
              </div>
              <div key={6}>
              <Row>
                     <Col xs={6}>
                     <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facere eaque sed animi dicta nobi consectetur adipisicing elit. Molestiae, nobis.</h2>
                     <p>Lorem ipsum doImpedit eius consequuntur ratione nesciunt provident sapiente officiis quae corrupti in fugiat.</p>
                     </Col>
                     <Col xs={6}>
                         <img src="https://st2.depositphotos.com/1003620/7314/i/600/depositphotos_73145299-stock-photo-teamwork-couple-climbing-helping-hand.jpg" alt="" />
                     </Col>
                 </Row>
              </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
              <button className="button" onClick={this.previous}>
                <FaArrowLeft/>
              </button>
              <button className="button" onClick={this.next}>
                <FaArrowRight/>
              </button>
            </div>
            </Row>
          </Container>
        );
      }
    }