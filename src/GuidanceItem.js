import React from 'react';
import { render } from '@testing-library/react';

class GuidanceItem extends React.Component {

    render(){
        console.log(this.props)
        const { image, title, description, stars, isPriority } = this.props
        return (

            <tr>
                <td>{title}</td>
                <td><img src={image} alt={title}/></td>
                <td>{description}</td>
                <td>{'⭐️'.repeat(stars)}</td>
                <td>{isPriority ? "YES" : "NO"}</td>
            </tr>
        )
    }
    
}

export default GuidanceItem;