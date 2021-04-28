import React, { Component } from 'react'
import axios from 'axios'

export class Recipe extends Component {




    state = {
        ggg: []
    }



    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => {
                console.log(res);
                this.setState({

                    ggg: res.data.meals
                })

            })
    }

    render() {

        return (


            <div>

                <div className="row">
                    {this.state.ggg.map(hhh => (
                        <div className="col-md-4">

                            <div className="card text-white bg-secondary mb-3">
                                <img className="card-img-top" src={hhh.strMealThumb} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{hhh.strMeal}</h4>
                                    <p className="card-text">
                                        <a href={hhh.strYoutube} className="btn btn-danger">show more</a>
                                        <a className="favori" href="/favori" ><i className="fas fa-heart"></i></a>
                                        
                                    </p>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
            </div>


        )
    }
}

export default Recipe






