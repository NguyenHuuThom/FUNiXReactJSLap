import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments.length !== 0) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => (
                        <ul key={comment.comment} className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        let dish;
        if (this.props.selectedDish) {
            dish = (
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            )
        } else {
            dish = <div></div>
        }
        return (
            <div>
                {dish}
            </div>
        );
    }
}

export default DishDetail;