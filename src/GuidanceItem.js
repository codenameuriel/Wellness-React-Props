import React from 'react';

const GuidanceItem = () => {
    return (
        <tr>
            <td>{this.props.factor.title}</td>
            <td><img src={this.props.factor.image} alt={this.props.factor.title}/></td>
            <td>{this.props.factor.description}</td>
            <td>{this.props.factor.starts}</td>
        </tr>
    )
}

export default GuidanceItem;