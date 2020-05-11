import React from 'react';
import GuidanceContainer from './GuidanceContainer'

const GuidanceItem = () => {
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>{props.factor.description}</td>
            <td>{props.factor.stars.repeat(5)}</td>
        </tr>
    )
}

export default GuidanceItem;