import React, {Component} from 'react';
export default class GuidanceItem extends Component {
GuidanceItem = () => {
    return (
        <tr>
            <td>this.factor.title}</td>
            <td><img src={this.factor.image} alt={this.factor.title}/></td>
            <td>{this.factor.description}</td>
            <td>{'⭐️'.repeat(this.factor.stars)}</td>
        </tr>
    )
}
}