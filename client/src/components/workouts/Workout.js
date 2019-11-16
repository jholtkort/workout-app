import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";

import { deleteWorkout } from "../../actions/workoutActions";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

import "./Workout.css";

class Workout extends Component {
  onDeleteClick = () => {
    this.props.deleteWorkout(this.props.workout._id);
  };

  render() {
    const {
      _id,
      description,
      date,
      type,
      distance,
      distanceUnits,
      hour,
      minute,
      second
    } = this.props.workout;

    return (
      <Card>
        <CardBody>
          <CardTitle>
            <Link to={`/workouts/update/${_id}`} id="workout-title">
              {description}
            </Link>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            <Moment className="mr-1" format="MM/DD/YYYY">
              {date}
            </Moment>
            at
            <span className="ml-1">
              <Moment format="h:mm a">{date}</Moment>
            </span>
          </CardSubtitle>

          <CardText className="workout-stats">
            <li className="pr-3 mr-3">{type}</li>
            <li className="pr-3 mr-3">
              {distance} {distanceUnits}
            </li>
            <li className="mr-3">
              {hour} hr {minute} min {second} sec
            </li>
          </CardText>
          <Button
            className="waves-effect waves-light btn red"
            onClick={this.onDeleteClick}
          >
            <i className="material-icons">delete</i>
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default connect(null, { deleteWorkout })(Workout);
