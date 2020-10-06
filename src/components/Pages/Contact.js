import React, {Component} from 'react';

class Contact extends Component {
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Let's Get In Touch!</h2>
                            <hr className="divider my-4" />
                            <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                            <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                            <div>+2347064647860</div>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                            <a className="d-block" href="mailto:eronsmathew@gmail.com">Send Me A Mail</a>
                        </div>
                    </div>
                    <div class="contact-form">
                    <form>
                        <label for="name">First Name :</label><br/>
                          <input type="text" name="firstname" required/><br/>
                        <label for="name">Last Name :</label><br/>
                          <input type="text" name="name" /><br/>
                        <label for="name">E-mail :</label><br/>
                          <input type="text" name="name" required/><br/>
                        <label for="message">Message :</label><br/>
                        <textarea name="textarea" rows="10" cols="50">Send me a message ...</textarea><br/>
                       <button>Send</button>
                    </form>
                </div>
                </div>
            </section>
        )
    }
}

export default Contact;