import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Card, Row, Col, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


import fetch_news from '../store/action/newsAction';

class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.news);
        return (
            <div>

                <button onClick={this.props.fetchNews}>Fetch user</button>

                <Row>
                {
                    this.props.news.map((val, i) => (


                            <Col>
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{val.id}</CardTitle>
                                            <CardSubtitle>{val.email}</CardSubtitle>
                                            <CardText>{`${val.first_name} ${val.last_name}`}</CardText>
                                                <Row>
                                                    <Col sm={9}>
                                                        <img src={ require("../static/dislike.png")} style={{width: '20px' , height: '20px' , float: 'right'}} alt="Dislike"/>
                                                        <span style={{float: 'right'}}>5</span>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <img src={ require("../static/thumbs-up.png")} style={{width: '20px' ,  height: '20px', float: 'left'}} alt="Dislike"/>
                                                        <span style={{float: 'left'}}>3</span>
                                                    </Col>
                                                </Row>



                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>

                    ))
                }
                </Row>




            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news.list,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        fetchNews: () => { dispatch(fetch_news) },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
