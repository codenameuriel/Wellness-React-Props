import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

export default class GuidanceContainer extends React.Component {

    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                            <td>Priority?</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/** TODO:  Render GuidanceItems here
                                    Check the GuidanceItem component for the expect props
                                    BUG CATCHER: There's a bug in GuidanceItem that will make it fail. 
                                            Can you find it? 
                                            What warning did you get and how did it help you?
                        */}
                        {
                            wellnessFactors.map((factor, index) => <GuidanceItem key={index} factor={factor}/>)
                        }
         
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
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
