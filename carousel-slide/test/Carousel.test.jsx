import React from 'react';
import {shallow} from 'enzyme';
import Carousel from '../src/Carousel';
import CarouselButton from '../src/CarouselButton';

describe('Carousel', () => {

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Carousel/>);
    })

    it("renders a <div>", ()=>{
        expect(wrapper.type()).toBe('div');
    });

    it("it has an initial 'slideIndex' of '0'", () => {
        expect(wrapper.state('slideIndex')).toBe(0);
    })

    it("renders a carousel button labelled 'Prev'", () => {
        expect( 
            wrapper
            .find(CarouselButton)
            .at(0)
            .prop('children')
        ).toBe('Prev')
    })

    it("renders a carousel button labelled 'Next'", () => {
        expect( 
            wrapper
            .find(CarouselButton)
            .at(1)
            .prop('children')
        ).toBe('Next')
    })

    it("decrements 'slideIndex' when Prev is clicked", () => {
        wrapper.setState({slideIndex: 1});
        wrapper.find('[data-action="prev"]').simulate('click');
        expect(wrapper.state('slideIndex')).toBe(0)
    })

    it("increments 'slideIndex' when Next is clicked", () => {
        wrapper.setState({slideIndex: 0});
        wrapper.find('[data-action="next"]').simulate('click');
        expect(wrapper.state('slideIndex')).toBe(1)
    })
});