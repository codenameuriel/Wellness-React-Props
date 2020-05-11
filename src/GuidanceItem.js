import React from 'react';

const { id, image, title, stars, description } = this.props

const GuidanceItem = () => {
    return (
        
        <tr>
            <td>{title}</td> {/*props.factor.title*/}
            <td><img src={image} alt={title}/></td>
            <td>{description}</td> {/** TODO: Add the correct prop here */}
            <td>{'⭐️'.repeat(stars)}</td> {/** TODO: Add the correct prop here */}
        </tr>
    )
}
GuidanceItem.defaultProps = {
    id: null,
    image: null,
    title: 'no title',
    stars: 0,
    description: 'no desc'
}
export default GuidanceItem;