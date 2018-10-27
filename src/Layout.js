import React, {Fragment} from "react";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-bootstrap';
import './style.css';
// import {MenuItem, Navbar} from "react-bootstrap";
// import {Nav} from "react-bootstrap";
// import {NavItem} from "react-bootstrap";
// import {NavDropdown} from "react-bootstrap";

export const Layout =() => {
    return(
            <div className='navigation'>
                <Carousel>
                    <Carousel.Item>
                        <img width={1000} height={500} alt="900x500" src="/src/Main-Banner.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={500} alt="900x500" src="/src/img2.jpg" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={500} alt="900x500" src="/src/Topbanner1.jpg" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    );

}