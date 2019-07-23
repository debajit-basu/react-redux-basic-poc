import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroup ,InputGroupAddon,Input} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginModal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            LoginModal: !prevState.LoginModal
        }));
    }

    componentWillUnmount() {
        this.toggle();
    }

    render() {
        // console.log(this.props.newsItem);
        return (
            <>
                <div>
                    <h1 style={{cursor: 'pointer' , color: 'red'}} onClick={() => this.toggle()}>Login Here</h1>
                </div>


                <div>
                    <Modal isOpen={this.state.LoginModal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}></ModalHeader>
                        <ModalBody>

                            <div className="row padding-0-7x font-2x font-weight-light heading-panel" style={{background:'#E6ECF3'}}>
                                <div className="col-12 blue-text">
                                    <span className="d-flex justify-content-center">Login</span>
                                </div>
                            </div>


                            <div className="row padding-0-7x heading-panel">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Email:</InputGroupAddon>
                                    <Input
                                        type="text"
                                        name="email"
                                    />
                                </InputGroup>
                            </div>


                            <div className="row padding-0-7x heading-panel">
                                <InputGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">Password:</InputGroupAddon>
                                        <Input
                                            type="password"
                                            name="password"
                                        />
                                    </InputGroup>
                                </InputGroup>
                            </div>



                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary">Login</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>




        )

    }
}

const mapStateToProps = (state) => {
    return {
        newsItem: state.news
    }
}

export default connect(mapStateToProps)(Login);
