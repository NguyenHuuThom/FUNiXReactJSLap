import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* HomePage trả về kết quả <Home/> quy định ở trên */}
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    {/* exact để ngăn đường dẫn chọn sai vì có 2 /menu */}
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                    {/* khi các link không có đích đến nó sẽ dẫn về home */}
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));