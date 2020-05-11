import React from 'react';
import  {wellnessFactors as wellnessFactors}  from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
              
                {
                console.log({wellnessFactors})
                //for(const factor of wellnessFactors){
                    //<WellnessItem id= factor.id title= factor.title color= factor.color/>

                }}
            </Pie>
        )
    }
}