import React, { Component } from 'react';
import FlexView from 'react-flexview';
import axios from 'axios';
import Park from './Park';

const styles = {
    container: {
        borderStyle: 'solid',
        margin: '10%',
        padding: '0px',
        width: '100%'
    },
    contentWrapper: {
        margin: '0px',
        padding: '0px',
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    contentTitle: {
        fontSize: '4vw',
        padding: '5%',
        borderBottom: 'solid',
        fontWeight: 'bold',
    }
};

class ParkList extends Component {
    constructor(props) {
        super();
        this.state = {
            parks: []
        }
    }

    componentDidMount() {
        axios.get('/api/parks')
            .then((response) => {
                this.setState({ parks: response.data});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const listItems = this.state.parks.map((park) => <Park key={park.parkID} name={park.parkName}/>);

        return (
            <FlexView column style={styles.container}>
                <div style={styles.contentTitle}>
                    Walt Disney World Parks!
                </div>
                <div>
                    <ul style={styles.contentWrapper}>
                        {listItems}
                    </ul>
                </div>
            </FlexView>
        );
    }
}

export default ParkList;
