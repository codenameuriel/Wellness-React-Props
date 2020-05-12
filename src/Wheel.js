import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';

export default class Wheel extends React.Component {

    
    generateWellnessChart = () => {
        return wellnessFactors.map((eachFactor, index) => <WellnessItem
            key={index}
            {...eachFactor}  // spread the object key / value pairs
            
            // id={eachFactor.id}
            // color={eachFactor.color}
            // title={eachFactor.title}
        />
    )}

    render(){
        console.log('wellnessfactors', wellnessFactors)
        return (
            <Pie size={300}>
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
            {this.generateWellnessChart()}
            

            </Pie>
        )
    }
}