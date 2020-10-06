import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/img/portfolio/thumbnails/1.jpg';
import img2 from '../assets/img/portfolio/thumbnails/2.jpg';
import img3 from '../assets/img/portfolio/thumbnails/3.jpg';
import img4 from '../assets/img/portfolio/thumbnails/4.jpg';
import img5 from '../assets/img/portfolio/thumbnails/5.jpg';
import img6 from '../assets/img/portfolio/thumbnails/6.jpg';

const portfolio = [
    {title: 'Bank App', subtitle : 'A bank App by me!!!', image : img1},
    {title: 'Learning App', subtitle : 'My learning app', image : img2},
    {title: 'Javascript Proj', subtitle : 'My vanilla JS Projects', image : img3},
    {title: 'Static Website', subtitle : 'My basic website', image : img4},
    {title: 'Node.JS Project', subtitle : 'A backend project with Node.JS', image : img5},
    {title: 'Mongo DB Project', subtitle : 'My MongoDB project', image : img6}
];

class Portfolio extends Component{
    render(){
        return(
                <div id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                        {
                            portfolio.map((item, index) =>{
                                return <PortfolioItem {...item} key={index} />
                            })
                        }
                        </div>
                    </div>
                </div>
           )
    }
}

export default Portfolio;