import React from "react"; // Don't forget to import React when using JSX
import {useRouteError} from "react-router-dom";

const Error = () => {

    const er = useRouteError();
    console.log(er);
    return (
        <div>
            <h1>404 not found</h1>
            <h2>Oops! Something went wrong</h2>
            <h3>{er.status} : {er.statusText}</h3>
        </div>
    );
};

export default Error;
