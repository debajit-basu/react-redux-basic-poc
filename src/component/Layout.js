import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import React,{Component} from 'react';

const Layout = (props) => {
    return (
        <div>
            <title>{props.title}</title>
            { props.children }
        </div>
    );
}

export default Layout;

