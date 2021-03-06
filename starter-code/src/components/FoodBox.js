import React, { Component } from 'react';

class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

quantityHandler = (event) => {
    this.setState ({
        quantity: event.target.value
    })
}

addTodaysFoodClickHandler = () => {
    this.props.addTodaysFood(this.props, this.state.quantity)
}

render(){
    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src= {this.props.image} alt = "food"/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories} cal</small>
                    </p>                        
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number"
                        min="1"
                        value= {this.state.quantity}
                        onChange= {this.quantityHandler}                                                    
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick = {this.addTodaysFoodClickHandler}>
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div> 
    )
}
}


export default FoodBox;