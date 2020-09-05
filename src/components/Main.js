import React from 'react';
import ContentEx from './ContentEx';
import TeamEx from './TeamEx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Main()
{
    return (
        <>
                <Switch>
                <Route path="/" component={ContentEx} exact />
                <Route exact path="/team" component={TeamEx} />
            </Switch>
        </>
    );
}

export default Main;