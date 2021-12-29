import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    handleClick(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu
                    dishes={this.state.dishes}
                    onClick={this.handleClick}
                />
                <DishDetail selectedDish={this.state.selectedDish} />

                <Footer />
            </div>
        );
    }
}

export default Main;