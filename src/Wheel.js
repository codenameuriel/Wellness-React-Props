import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    generateWellnessItems = () => {
        return wellnessFactors.map((factor, index) => 
        <WellnessItem
            key = {index}
            id = {factor.id}
            title = {factor.title}
            color = {factor.color}
                />)
    }
    render(){
        return (
            <Pie size={300}>
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
                 {this.generateWellnessItems()}
                 }
            </Pie>
        )
    }
}