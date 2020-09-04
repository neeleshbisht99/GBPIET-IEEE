import React from 'react';
import ContentEx from './ContentEx';
import TeamEx from './TeamEx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Main()
{
    return (
        <>
          <BrowserRouter>
                <Switch>
                <Route path="/" component={ContentEx} exact />
                 <Route path="/team" component={TeamEx} />
                {/* <Route path="/shop" component={Shop} /> */}
                <Route component={Error} />
            
            </Switch>
            </BrowserRouter>
        </>
    );
}

export default Main;