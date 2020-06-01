import React from "react";
import newChannelKitty from "../../assets/newProduct-kitty.png"

const NewProductChannels = (props) => {
    return(
        <figure>
            <img src={newChannelKitty} alt="new product kitty"/>
            <figcaption> {props.message} </figcaption>
        </figure>
    )
}

export default NewProductChannels;