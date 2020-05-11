import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

export default class GuidanceContainer extends React.Component {
    generateTableItems = () => {
        wellnessFactors.sort((a,b) => b.stars - a.stars)
        return wellnessFactors.map((factor, index) => <GuidanceItem
            key={index}
            title={factor.title}
            image={factor.image}
            description={factor.description}
            stars={factor.stars}
        />)
    }


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
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateTableItems()}
                    
                        
                        {/** TODO:  Render GuidanceItems here
                                    Check the GuidanceItem component for the expect props
                                    BUG CATCHER: There's a bug in GuidanceItem that will make it fail. 
                                            Can you find it? 
                                            What warning did you get and how did it help you?
                                            // either had to change props to this or pass in props as an argument
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