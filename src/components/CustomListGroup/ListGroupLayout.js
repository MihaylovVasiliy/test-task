import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";
import newChannelKitty from "../../assets/newProduct-kitty.png";

const ListGroupLayout = (props) => (
    <Fragment>
        <span role="img" aria-label="newProducts">🔥</span>
        <h2>Новинки</h2>
        <ListGroup>
            <ListGroupItem>
                <figure>
                    <img src={newChannelKitty} alt="new product kitty"/>
                    <figcaption> {props.message} </figcaption>
                </figure>

            </ListGroupItem>
            <ListGroupItem>
                <figure>
                    <img src={newChannelKitty} alt="new product kitty"/>
                    <figcaption> {props.message} </figcaption>
                </figure>
            </ListGroupItem>
            <ListGroupItem>
                <figure>
                    <img src={newChannelKitty} alt="new product kitty"/>
                    <figcaption> {props.message} </figcaption>
                </figure>
            </ListGroupItem>
            <ListGroupItem>
                <figure>
                    <img src={newChannelKitty} alt="new product kitty"/>
                    <figcaption> {props.message} </figcaption>
                </figure>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayout;