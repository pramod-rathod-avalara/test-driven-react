import React from 'react';
import T from 'prop-types';

const CarouselButton = (props) => {
    return (
        <button {...props}>{props.children}</button>
    );
}

CarouselButton.propTypes = {
    children: T.node.isRequired
}

export default CarouselButton;