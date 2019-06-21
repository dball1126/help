import React from 'react';
import ReactDOM from 'react-dom';

// const mapCenter = { lat: 40.7831, lng: 73.9712 };

class BusinessMap extends React.Component{
    constructor(props){
        super(props);
        this.position = this.props.position || "";
        this.center = this.props.center || { lat: 40.70569, lng: -73.99639 };
        this.businesses = this.props.businesses || "";
        
    }

    componentDidMount(){
        // const map = ReactDOM.findDOMNode(this.refs.map);
        let zoom = 10;
        if (this.position) zoom = 13;
        console.log(this.zoom)
        const mapOptions = {
            center: this.center,
            zoom: zoom,
            marker: this.marker
        }
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);
        
        this.marker = new google.maps.Marker({
            position: this.pos,
            map: this.map
        });

        
        

        if(this.businesses){
            zoom = 5;
            this.businesses.forEach(business => {
            // const pos = new google.maps.LatLng(business.latitude, business.longitude);
            
                

            return (
                
                //  this.marker = new google.maps.Marker({
                //     position: pos,
                //     map: this.map
                // })
                this.addBusiness(business)
                 
            )
        });
        }

        


        // const options = { center: this.props.center}
    }

    addBusiness(business){
        // debugger
        const pos = new google.maps.LatLng(business.latitude, business.longitude)
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });

        const infowindow = new google.maps.InfoWindow({
            content: business.name
        })
        
        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
                    
                })

    }

    render(){
        return (
            <div ref={ map => this.mapNode = map} id="map">
                
            </div>
        )
    }

}

export default BusinessMap;