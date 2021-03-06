import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Card, Row, Col, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';


import fetch_news from '../store/action/newsAction';

class News extends Component {

    componentDidMount() {
        this.props.fetchNews();
    }

    checkLikeNews = (id) => {

        if(this.props.login.isLogin){
            this.props.likeNews(id);
        }else{
            this.props.loginClick();
        }
    }

    checkDisLikeNews = (id) => {

        if(this.props.login.isLogin){
            this.props.disLikeNews(id)
        }else{
            this.props.loginClick();
        }
    }


    render() {
        console.log(this.props.login);
        return (
            <div className="jumbotron">
                <div className="font-3x bg-light rounded box-shadow font-weight-light primary-color-text"> All News</div>
                <Row>
                {
                    this.props.news.map((val, i) => (


                            <Col key={i} sm={4}>
                                <div>
                                    <Card className="mt-4">
                                        <CardBody>
                                            <CardTitle>{moment(val.date).format('LL')}</CardTitle>
                                            <CardSubtitle style={{color:  'green'}} >{val.description}</CardSubtitle>
                                            <CardText style={{color:  'red',float: 'left'}}>{`Category : ${val.category}`}</CardText>
                                               <div className="d-flex flex-row justify-content-end align-items-stretch flex-fill mt-5">
                                                   <img src={ require("../static/dislike.png")}
                                                        style={{width: '20px' , height: '20px' , float: 'right'}}
                                                        alt="Dislike" className={`${(val.dislike)?'fill-dislike':''}`}
                                                        onClick={() => this.checkDisLikeNews(val.id)}/>
                                                   <span style={{float: 'right'}}>{val.totalDislike}</span>

                                                   <img src={ require("../static/thumbs-up.png")} style={{width: '20px' ,  height: '20px', float: 'left' , cursor: 'pointer '}}
                                                        alt="Dislike" className={`${(val.like)?'fill-like':''}`}
                                                       onClick={() => this.checkLikeNews(val.id)}/>
                                                   <span style={{float: 'left'}}>{val.totalLike}</span>
                                               </div>



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
        news: state.news,
        login: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        fetchNews: () => { dispatch(fetch_news) },
        likeNews: (id) => {dispatch({type: 'HIT_LIKE' , id: id})},
        disLikeNews: (id) => {dispatch({type: 'HIT_DISLIKE' , id: id})},
        loginClick: () => {dispatch({type: 'TOGGLE_LOGIN_MODAL'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
