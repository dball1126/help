import React from 'react';

class BusinessIndex extends React.Component {

    componentDidMount(){
        this.props.fetchBusinesses();
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default BusinessIndex;
