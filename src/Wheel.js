import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                <wellnessFactors.map ( WellnessItem (title, image, color, description, stars, isPriority) => {
                    return(

                        <div className='wellness-item'>
                            <h1>{}</h1>
                        </div>
                    )
                }) />
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
            </Pie>
        )
    }
}