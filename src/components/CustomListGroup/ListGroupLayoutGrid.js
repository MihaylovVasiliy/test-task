/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayout = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props}>
                <img className="ListGroupItem__image" src={props.logo_image}/>
                <div className="ListGroupItem__grid-table">
                    <span className="ListGroupItem__grid-table_span"> {props.heading} </span>
                    <div className="ListGroupItem__grid-table_element">
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