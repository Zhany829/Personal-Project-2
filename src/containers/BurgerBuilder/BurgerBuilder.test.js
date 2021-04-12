import {configure, shallow} from 'enzyme';//shallow render component not deeply(单个item的内容不render)--所以要尽量用shallow
import Adapter from 'enzyme-adapter-react-16'

configure({adapter:new Adapter()}); //constructor
//above is enzyme setup
import React from 'react';
import {BurgerBuilder} from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

describe('<BurgerBuilder />', () => {
    let wrapper = null;
    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}}/>)
    })
    it('should render <BuildControls/> when receiving ingredients',()=>{
        wrapper.setProps({ings:{salad:0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})