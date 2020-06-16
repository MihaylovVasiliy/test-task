/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayoutGenres = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props}>
                <div className="list-group-layout__figure_wrapper">
                <figure className="list-group-layout__figure">
                    <img className="list-group-layout__figure_image" src={props.logo_image}/>
                    <figcaption className="list-group-layout__figure_message"> {props.message} </figcaption>
                    <figcaption className="list-group-layout__figure_message_genres"> {props.message_genres} </figcaption>
                </figure>
                </div>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayoutGenres;
/* eslint-enable */