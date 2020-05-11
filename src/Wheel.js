import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
                {wellnessFactors.map(factor => {
                    console.log("factor", factor);

                    const {id, color, title, isPriority} = factor;

                    return (
                        <WellnessItem key={`wellness_${id}`} id={id} 
                            color={color}
                            title={title}
                            isPriority={isPriority} />
                    )
                })}
            </Pie>
        )
    }
}