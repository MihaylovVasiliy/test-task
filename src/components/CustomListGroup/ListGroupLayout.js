/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayout = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props}>
                <figure>
                    <img src={props.logo_image}/>
                    <figcaption> {props.message} </figcaption>
                </figure>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayout;
/* eslint-enable */