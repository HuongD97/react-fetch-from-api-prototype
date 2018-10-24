import React, { Component } from 'react';
import FlexView from 'react-flexview';
import axios from 'axios';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const styles = {
    container: {
        margin: '10%',
        padding: '0px',
        width: '100%'
    },
    contentWrapper: {
        margin: '0px',
        padding: '0px',
        listStyle: 'none'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2vw'
    }
};

class RestaurantList extends Component {
    constructor(props) {
        super();
        this.state = {
            restaurants: [],
            parkName: props.parkName
        }
    }

    componentDidMount() {
        axios.get('/api/magicKingdomRestaurants', {
            params: {
                parkName: this.state.parkName
            }})
            .then((response) => {
                this.setState({ restaurants: response.data.allRestaurants });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    getHeader() {
        return this.state.restaurants.length > 0 ? <div style={styles.title}>Restaurants</div> : null;
    }

    getAllRestaurants() {
        if (this.state.restaurants.length > 0) {
            const restaurants = this.state.restaurants.map((restaurant) => <Restaurant key={restaurant.restaurantID} restaurant={restaurant}/>);
            return (
                <ul style={styles.contentWrapper}>
                    {restaurants}
                </ul>
            );
        }

        return null;
    }

    render() {
        return (
            <FlexView hAlignContent="center" column style={styles.container}>
                {this.getHeader()}
                {this.getAllRestaurants()}
            </FlexView>
        );
    }
}

RestaurantList.propTypes = {
    parkName: PropTypes.string.isRequired
};

export default RestaurantList;
