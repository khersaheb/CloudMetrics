/**
 * Pages Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncClassInternalComponent,
    AsyncClassExternalComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/external`} />
            <Route path={`${match.url}/external`} component={AsyncClassExternalComponent} />
            <Route path={`${match.url}/internal`} component={AsyncClassInternalComponent} />
        </Switch>
    </div>
);

export default Pages;
