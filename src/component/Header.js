import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }


    render() {
        console.log(this.props.globalVariableProp);
        return (
            <div style={{backgroundColor: '#e8bec6'}}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/*<a className="navbar-brand">Redux-POC</a>*/}
                    <span className="logo-font font-3x bold"style={{lineHeight:"2em"}}>Redux-POC</span>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ml-5">
                                <Link to="/news">News</Link>
                            </li>
                            <li className="nav-item ml-4">
                                <Link to="/items">Items</Link>
                            </li>
                            <li className="nav-item ml-4">
                                {
                                    (!this.props.globalVariableProp.loginModal) &&
                                        (!this.props.loginState.loginStatus)?
                                      <button className="btn btn-light" onClick={this.props.loginClick} > Login</button>
                                        :
                                      <button className="btn btn-light" onClick={this.props.logoutClick} > Logout</button>
                                }

                            </li>
                            <li className="nav-item ml-4">
                            </li>
                            {/*<Link to="/register">Register</Link>*/}
                            {
                                (!this.props.globalVariableProp.registerModal) &&
                                <button className="btn btn-light" onClick={this.props.registerClick} > Register</button>
                            }
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

const mapStateToProps = (state) => {
    return {
        globalVariableProp: state.globalVariable,
        loginState: state.login

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        loginClick: () => {dispatch({type: 'TOGGLE_LOGIN_MODAL'})},
        registerClick: () => {dispatch({type: 'TOGGLE_REGISTER_MODAL'})},
        logoutClick: () => {dispatch({type: 'LOGOUT'})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);
