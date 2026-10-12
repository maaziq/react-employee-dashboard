import { Component } from "react";


const WithAuth = (Component) => {
    const validUser = true;

    return function (props) {
        if (validUser) {
            return <Component {...props} greet="Good Morning"/>;
        }
        else{
            return <h3>Please Login to access DashBoard</h3>;
        }
    }
}

export default WithAuth;