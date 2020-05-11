import React from 'react';

const GuidanceItem = (props) => {

const {title, image, description, stars, isPriority} = props.factor
// values for the key factor 
// console.log(isPriority)
// console.log(props)
    return (
        // this is how the values will be displayed
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{'⭐️'.repeat(stars)}</td>
            <td>{isPriority ? "Yes" : "No"}</td>
        
        </tr>
    )
}

export default GuidanceItem;