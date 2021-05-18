import React from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";

const Routers = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Home/> }/>
            <Route exact path={'/counter'} render={() => <Counter/> }/>
        </div>
    );
};

export default Routers;