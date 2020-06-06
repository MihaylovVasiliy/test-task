/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayout = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props}>
                <img src={props.logo_image}/>
                <div className="grid-table">
                    <span> {props.heading} </span>
                    <div className="schedule-grid-table">
                        <span> {props.schedule_item1} </span>
                        <span> {props.schedule_item2} </span>
                        <span> {props.schedule_item3} </span>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayout;
/* eslint-enable */