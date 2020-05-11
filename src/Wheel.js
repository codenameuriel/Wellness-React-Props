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
                 {wellnessFactors.map((factor, index) => <WellnessItem
                 key={index}
                 id={factor.id}
                 title={factor.title}
                 color={factor.color}
                 isPriority={factor.isPriority}
                 />)}
            </Pie>
        )
    }
}


// {
//     id: 1,
//     title: 'Physical',
//     image: 'https://thewellatsacstate.com/cache/ce-image/dimensions-of-wellness/uploads/images/7_dimensions/7D_Icon_Physical_500x500ppi_500_500_bor3_0fa195_all_250.png',
//     color: 'red',
//     description: 'Taking care of one\'s body.',
//     stars: 4,
//     isPriority: true,
// }
