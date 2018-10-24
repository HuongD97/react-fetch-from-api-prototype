import React, { Component } from 'react';
import FlexView from 'react-flexview';
import PropTypes from 'prop-types';

const styles = {
    container: {
        margin: '0px',
        // marginBottom: '5%',
        padding: '7%',
    },
    title: {
        marginBottom: '5px',
    },
};

class Restaurant extends Component {
    constructor(props) {
        super();
        this.state = {
            restaurant: props.restaurant
        }
    }

    render() {
        const { restaurantName } = this.state.restaurant;
        return (
            <FlexView column style={styles.container}>
                <div style={styles.title}>{restaurantName}</div>
            </FlexView>
        );
    }
}

Restaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
};

export default Restaurant;
