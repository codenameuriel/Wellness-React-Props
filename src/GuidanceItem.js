import React from 'react';

const GuidanceItem = () => {
    const { title, image, description, stars } = this.props
    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{stars}</td>
        </tr>
    )
}

export default GuidanceItem;