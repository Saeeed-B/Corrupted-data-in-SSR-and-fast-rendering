import React from 'react';
import { Switch , Route } from "react-router-dom";
import { Loadable } from 'meteor/npdev:react-loadable';
import Loading from "../Ui/Loading.jsx";



const Index = Loadable({
    loader: () => import('../Ui/Index'),
    loading: Loading ,
    meteor: () => [require.resolve('../Ui/Index')]
});




const AppRoute = ({component : Component  , ...rest})=>(
    <Route {...rest} render={props=>(
            <Component {...props} ></Component>
    )}>
    </Route>
);

export default class Routes extends React.Component {
    
    render() { 
        return ( 
            <Switch>

                <AppRoute path='/' component={Index} exact ></AppRoute>
                    

            </Switch>
        );
    }
}
 

