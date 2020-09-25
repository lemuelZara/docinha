import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import RecipesList from '../pages/RecipesList';

const Routes = () => {
    const location = useLocation();
    const { pathname } = location

    return (
        <Switch location={location} key={pathname}>
            <Route path="/" exact component={Welcome} />
            <Route path="/recipes" exact component={RecipesList} />
        </Switch>
    )
};

export default Routes;