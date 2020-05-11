import React from 'react';
import { HoldCSSDeck, PieCSSDeck } from './styles';


export default class WellnessItem extends React.Component {
    render(){
        // destructing
        const { id, color, title, isPriority } = this.props

        return (
            <HoldCSSDeck rotate={(id - 1) * 45}>
                <PieCSSDeck rotate={45} color={isPriority ? '#D4AF37' : color}>
                    <div className="title">{title}</div>
                </PieCSSDeck>
            </HoldCSSDeck>
        )
    }
}

/**
 *  TODO: Add default props to the WellnessItem for color 
 *          the default color should be some kind of grey so it stands out
 *          TEST: do not pass down a prop for the color and see the whole circle go grey! 
 */


// If a WellnessItem is a priority, render its background gold instead of its given color. All you'll need to change is the color prop passed to PieCSSDeck.

 WellnessItem.defaultProps = {
    color: 'gray'
 }
