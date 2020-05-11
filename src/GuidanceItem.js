import React from 'react';

const GuidanceItem = (props) => {
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>{/** TODO: Add the correct prop here */} {props.factor.description}</td>
            <td>{/** TODO: Add the correct prop here */}{'⭐️'.repeat(props.factor.stars)}</td>
        </tr>
    )
}

export default GuidanceItem;