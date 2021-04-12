import {configure, shallow} from 'enzyme';//shallow render component not deeply(单个item的内容不render)--所以要尽量用shallow
import Adapter from 'enzyme-adapter-react-16'

configure({adapter:new Adapter()}); //constructor
//above is enzyme setup
import React from 'react'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

describe('<NavigationItems />', ()=>{ //第一个只是任意的name，第二个是测试function
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>)
    })
    it('should render 2 <NavigationItem/> elements if not authenticated',()=>{
        //write expectation  expect返回一个array
        expect(wrapper.find(NavigationItem)).toHaveLength(2);//find whether Item have 2(not authenticate--shold have 2 items)
    })//it allows to write one individual test
    it('should render 3 <NavigationItem/> elements if is authenticated',()=>{
        // wrapper = shallow(<NavigationItems isAuthenticated/>)
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
    it('should exact logout button',()=>{
        // wrapper = shallow(<NavigationItems isAuthenticated/>)
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    })
})