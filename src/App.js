import React, {Component} from 'react';
import ParkList from "./components/ParkList";
import FlexView from 'react-flexview';

class App extends Component {
    render() {
        return (
            <FlexView shrink={1}>
                <ParkList />
            </FlexView>
        );
    }
}

export default App;
