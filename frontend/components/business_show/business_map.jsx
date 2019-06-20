import React from 'react';
import ReactDom from 'react-dom';

// const mapCenter = { lat: 40.7831, lng: 73.9712 };

class BusinessMap extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const map = ReactDOM.findDOMNode(this.refs.map);

        const mapOptions = {
            center: { lat: 40.7831, lng: 73.9712 },
            zoom: 13
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // const options = { center: this.props.center}
    }

    render(){
        return (
            <div ref={ map => this.mapNode = map}>
                <p>map test</p>
            </div>
        )
    }

}

export default BusinessMap;