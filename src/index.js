import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RouterMap from './pages/router';
import {render} from 'react-dom';
import 'hotcss';
import '&static/styles/reset.less';
import '&static/styles/styles.less';

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <RouterMap/>
            </Router>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);