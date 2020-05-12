import React from 'react';


// this.props would be used for a class component
// this is a functional component

// originally improperly made a class component

const GuidanceItem = (props) => {

    const { title, image, description, stars } = props.eachFactor

      

            return (
                <tr>
                <td>{title}</td>
                <td><img src={image} alt={title}/></td>
                <td>{description}</td>
                <td>{'⭐️'.repeat(stars)}</td>
            </tr>
            )
        }
// }

    


export default GuidanceItem;