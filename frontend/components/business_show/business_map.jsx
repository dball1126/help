import React from 'react';
import ReactDom from 'react-dom';

// const mapCenter = { lat: 40.7831, lng: 73.9712 };

class BusinessMap extends React.Component{
    constructor(props){
        super(props);
        this.position = this.props.position;
        this.center = this.props.center;
        debugger
    }

    componentDidMount(){
        // const map = ReactDOM.findDOMNode(this.refs.map);
        
        const mapOptions = {
            center: this.center,
            zoom: 13,
            marker: this.marker
        }
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);
        this.marker = new google.maps.Marker({
            position: this.pos,
            map: this.map
        });
        
        
        // const options = { center: this.props.center}
    }

    render(){
        return (
            <div ref={ map => this.mapNode = map} id="map">
                
            </div>
        )
    }

}

export default BusinessMap;