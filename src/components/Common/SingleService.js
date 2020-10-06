import React,{Component} from 'react';

class SingleService extends Component{
    render(){
        return(
            <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">  
                    <i class={`fas fa-4x ${this.props.icon} text-primary mb-4`}></i>
                    <h3 class="h4 mb-2">{this.props.title}</h3>
                    <p class="text-muted mb-0">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default SingleService;