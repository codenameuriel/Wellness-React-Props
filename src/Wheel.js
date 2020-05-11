import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                 {
                     wellnessFactors.map((factor,index) => {
                         return (
                            <div key={index}><WellnessItem title={factor.title} color={factor.color} id={factor.id}/></div>
                            )
                     })
                 }
            </Pie>
        )
    }
}