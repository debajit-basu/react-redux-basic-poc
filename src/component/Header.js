import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
// import { Row, ListGroup, ListGroupItem} from 'reactstrap';
// import {toast,ToastContainer} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.min.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }

    componentDidMount() {


    }


    render() {
        return (
            <div style={{backgroundColor: '#e8bec6'}}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/*<a className="navbar-brand">Redux-POC</a>*/}
                    <span className="logo-font font-3x bold"style={{lineHeight:"2em"}}>Redux-POC</span>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ml-5">
                                <a className="nav-link">News</a> {/*href="#"*/}
                            </li>
                            <li className="nav-item ml-4">
                                <a className="nav-link">Items</a>
                            </li>
                            <li className="nav-item ml-4">
                                <a className="nav-link">Login</a>
                            </li>
                            <li className="nav-item ml-4">
                                <a className="nav-link">Register</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;
