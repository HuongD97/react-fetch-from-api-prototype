import React, { Component } from 'react';
import FlexView from 'react-flexview';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import RestaurantList from "./RestaurantList";

const styles = {
    container: {
        borderWidth: 0.5,
        borderStyle: 'solid',
        margin: '0px',
        marginBottom: '5%',
        padding: '7%',
    },
    title: {
        fontSize: '3vw',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
};

const parkLinks = {
    'Magic Kingdom Park': 'https://disneyworld.disney.go.com/destinations/magic-kingdom/',
    'Epcot': 'https://disneyworld.disney.go.com/destinations/epcot/',
    'Disney\'s Hollywood Studios': 'https://disneyworld.disney.go.com/destinations/hollywood-studios/',
    'Disney\'s Animal Kingdom Theme Park': 'https://disneyworld.disney.go.com/destinations/animal-kingdom/',
    'Disney\'s Typhoon Lagoon Water Park': 'https://disneyworld.disney.go.com/destinations/typhoon-lagoon/',
    'Disney\'s Blizzard Beach Water Park': 'https://disneyworld.disney.go.com/destinations/blizzard-beach/',
};

class Park extends Component {
    constructor(props) {
        super();
        this.state = {
            parkName: props.name
        }
    }

    render() {
        const { parkName } = this.state;
        return (
            <FlexView hAlignContent={'center'} column style={styles.container}>
                <div style={styles.title}>{parkName}</div>
                <Button href={parkLinks[parkName]} size="small" color="primary" aria-label="More Info">More Info</Button>
                <RestaurantList parkName={parkName}/>
            </FlexView>
        );
    }
}

Park.propTypes = {
    name: PropTypes.string.isRequired
};

export default Park;
