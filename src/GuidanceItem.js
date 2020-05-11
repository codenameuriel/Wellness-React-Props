import React from 'react';

// creating a key of factor to nest the object with the attributes
const GuidanceItem = (props) => {
    console.log(props)
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>{props.factor.description}</td>
            <td>{props.factor.stars}</td>
            <td>{props.factor.isPriority ? 'yes' : 'no'}</td>
        </tr>
    )
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


export default GuidanceItem;