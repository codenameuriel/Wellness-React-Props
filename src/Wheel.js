import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    
    generateWellnessItem = () => {
        return wellnessFactors.map((factor,index) => 
            <WellnessItem 
            key = {index}
            id = {factor.id}
            color = {factor.color}
            title = {factor.title}
            isPriority = {factor.isPriority}
            />
        )
    }


    render(){
        return (
            <Pie size={300}>
                {this.generateWellnessItem()}
            </Pie>
        )
    }
} 