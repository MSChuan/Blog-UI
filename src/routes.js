import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './component/App';

export default class Routes extends React.Component {
    render() {
        return (<BrowserRouter>
                    <Route path="/" component={App} />
                </BrowserRouter>);
    }
}
