import React , {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/bg-masthead.jpg'

//This below explains a re-usable component
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Action from '../Common/Action';
import Contact from '../Pages/Contact';
import Footer from '../Common/Footer';
class Home extends Component{
    render(){
        return(
            <div>
                 <Header 
                   title = "Welcome Jkeyz!"
                   subtitle = "Amazing developer"
                   buttonText = "Click Me!!!"
                   link = "/services" 
                   showButton = {true}
                   image = {image}
                 />
                 
                 <Services />
                 <Portfolio />
                 <Action />
                 <Contact />
                 <Footer />
            </div>
        )
    }
}

export default Home;