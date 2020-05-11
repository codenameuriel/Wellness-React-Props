import React from 'react';
import { render } from '@testing-library/react';

class GuidanceItem extends React.Component {

    render(){
        console.log(this.props)
        const { image, title, description, stars } = this.props

        return (
            <tr>
                <td title={title}>{title}</td>
                <td><img src={image} alt={title}/></td>
                <td>{description}</td>
                <td>{'⭐️'.repeat(stars)}</td>
            </tr>
        )
    }
    
}

export default GuidanceItem;