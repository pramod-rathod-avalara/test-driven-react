import React from 'react';
import T from 'prop-types';

const CarouselSlide = ({imgUrl, description, attribution, ...rest}) => {

    return (
        <figure {...rest}>
            <img src={imgUrl}/>
            <figcaption>
                <strong>
                    {description}
                </strong>
                {' '+attribution}
            </figcaption>
        </figure>
    );
}

CarouselSlide.propTypes = {
    imgUrl: T.string.isRequired,
    description: T.node.isRequired,
    attribution: T.node
}

export default CarouselSlide;