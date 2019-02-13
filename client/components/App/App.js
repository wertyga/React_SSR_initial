import React from 'react';

import { Switch, Route } from 'react-router-dom';

import routes from '../../common/routes';

export class App extends React.Component {
    render() {
        return (
            <Switch>
                {routes.map((route, i) => <Route key={i} {...route}/>)}
            </Switch>
        );
    }
}


