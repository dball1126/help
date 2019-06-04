import React from 'react'

class BusinessIndexItem extends React.Component {
    render(){
        const business = this.props.business;
        return (
            <div>
                <li>{business.name}</li>
            </div>
        )
    }
}

export default BusinessIndexItem;