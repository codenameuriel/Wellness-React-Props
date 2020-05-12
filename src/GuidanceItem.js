import React from 'react';



class GuidanceItem extends React.Component {
    render() {

        // console.log(this.props)
        
        const { title, image, description, stars } = this.props.eachFactor

            return (
                <tr>
                <td>{title}</td>
                <td><img src={image} alt={title}/></td>
                <td>{description}</td>
                <td>{'⭐️'.repeat(stars)}</td>
            </tr>
            )
        }
    }
// }

    


export default GuidanceItem;