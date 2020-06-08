/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayout = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props} className="list-group-item__channel-image">
                <img className="list-group-item__image" src={props.logo_image}/>
                <div className="list-group-item__grid-table">
                    <span className="list-group-item__grid-table_span"> {props.heading} </span>
                    <div className="list-group-item__grid-table_element">
                        <ul className="list-group-item__grid-table_ul">
                            <li className="list-group-item__grid-table_ul-li"><span> {props.schedule_item1} </span></li>
                            <li className="list-group-item__grid-table_ul-li"><span> {props.schedule_item2} </span></li>
                            <li className="list-group-item__grid-table_ul-li"><span> {props.schedule_item3} </span></li>
                        </ul>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayout;
/* eslint-enable */