import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Common/Header';
import image from '../assets/img/post_1.jpg';  

class About extends Component {
    render(){
        return(
            <div>
                <Header 
                   title = "I'm Your Go-To Guy For Web Services!"
                   subtitle = "I have amazing softwares you could view for your perusal  "
                   showButton = {false}
                   image = {image}
                 />
                 <section className="page-section bg-primary" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">I've got what you need!</h2>
                                <hr className="divider light my-4" />
                                <p className="text-white-50 mb-4">I've got what it takes to build from scratch your desired web app!!!</p>
                                <Link className="btn btn-light btn-xl js-scroll-trigger" to="/services">Get Started!</Link>
                            </div>
                        </div>
                    </div>
                 </section>
            </div>
            
        )
    }
}

export default About;