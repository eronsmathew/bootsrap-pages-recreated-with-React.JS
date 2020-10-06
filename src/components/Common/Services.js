 import React, {Component} from 'react';
import SingleService from './SingleService';

//creating an array of objects containing the props.....

const services = [
    {title : 'Frontend development ', description : 'Our themes are updated regularly to keep them bug free!', icon : 'fa-gem'},
    {title : 'Backend development', description : 'All dependencies are kept current to keep things fresh.', icon : 'fa-laptop-code'},
    {title : 'Data science', description : 'You can use this design as it is, or you can make changes!', icon : 'fa-globe'},
    {title : 'Machine learning engineer', description : "Is it really open source if it's not made with love?", icon : 'fa-heart'}
];

class Services extends Component{
    render(){
       return(
        <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider my-4" />
                <div class="row">
                    {
                        services.map((service, index) =>{
                            return <SingleService  {...service} key ={index}/>
                        })
                    }
                    
                   
                </div>
            </div>
        </section>
       )
    }
}

export default Services