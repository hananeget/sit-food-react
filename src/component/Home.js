import React, { Component } from 'react';
import photo from './undraw_cooking_lyxy.png';



export class Home extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className=' col-lg-6' >
                        <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>


                    </div>
                    <div className='col-lg-6' >
                        <img className="imgSVG" src={photo} />

                    </div>
                    </div>
                    <div className="row">
                       
                    <div className='col-lg-8 '>
                        <form className="form-inline bg-white ">
                            <input type="text"  class="form-control sersh" />
                        </form>
                    </div>
                    
                    </div>
                   
                   


                
            </div>

        )
    }
}

export default Home
