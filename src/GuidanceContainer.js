import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

export default class GuidanceContainer extends React.Component {

    renderItemInfo = () => {
        const sortedFactors = wellnessFactors.sort((a,b) => {
            if(a.stars > b.stars){
                return -1;
            }
            else{
                return 1;
            }
        });
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
                        {wellnessFactors.map((factor, index) => 
                        <GuidanceItem 
                        key={index} 
                        title={factor.title} 
                        image={factor.image} 
                        description={factor.description} 
                        stars={factor.stars}
                        isPriority={factor.isPriority}
                        />)
                            /** TODO:  Render GuidanceItems here
                                    Check the GuidanceItem component for the expect props
                                    BUG CATCHER: There's a bug in GuidanceItem that will make it fail. 
                                            Can you find it? 
                                            What warning did you get and how did it help you?
                        */}
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