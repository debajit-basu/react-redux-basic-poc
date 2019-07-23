import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem , Row, Col } from 'reactstrap';


// import fetch_news from '../store/action/newsAction';

class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsValue: false
        }
    }

    componentDidMount() {
        if(this.props.newsItem.length !== 0){
            this.setState({newsValue: true})
        }
    }
    componentWillUnmount() {
        this.setState({newsValue: false})
    }

    render() {
        // console.log(this.props.newsItem);
        return (
            <div className="jumbotron">


                <div className="font-3x bg-light rounded box-shadow font-weight-light primary-color-text">Liked Items</div>
                <Row className="mt-3">

                {
                    (this.state.newsValue)?

                        this.props.newsItem.length > 0 &&
                        this.props.newsItem.filter((value) =>  value.like ).map((val,i) => (
                                <React.Fragment key={val.id}>
                                {/*<div>ID: {val.id}</div>*/}

                                    <Col sm={3}>
                                        <ListGroup className="mt-4 mb-5">
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>Category: {val.category}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>Date: {val.date}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}> Description: {val.description}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>TotalLike: {val.totalLike}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>TotalDisLike: {val.totalDislike}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>{(val.like)?'Liked':'Not Liked'}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>{(val.dislike)?'DisLiked':'NotDisLiked'}</ListGroupItem>
                                        </ListGroup>
                                    </Col>


                                </React.Fragment>
                            ))



                        :
                        <div className="full-width">
                            <div className="d-flex justify-content-center mt-5">
                                <ListGroup>
                                    <ListGroupItem color="primary">No Liked items Available right Now Go to news section first</ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>


                }

                </Row>

                {/*DisLike section*/}

                <div className="font-3x bg-light rounded box-shadow font-weight-light primary-color-text mt-5">DisLiked Items</div>
                <Row className="mt-3">

                    {
                        (this.state.newsValue)?

                            this.props.newsItem.length > 0 &&
                            this.props.newsItem.filter((value) =>  value.dislike ).map((val,i) => (
                                <React.Fragment key={val.id}>
                                    {/*<div>ID: {val.id}</div>*/}

                                    <Col sm={3}>
                                        <ListGroup className="mt-4 mb-5">
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>Category: {val.category}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>Date: {val.date}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}> Description: {val.description}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>TotalLike: {val.totalLike}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>TotalDisLike: {val.totalDislike}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>{(val.like)?'Liked':'Not Liked'}</ListGroupItem>
                                            <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>{(val.dislike)?'DisLiked':'NotDisLiked'}</ListGroupItem>
                                        </ListGroup>
                                    </Col>


                                </React.Fragment>
                            ))



                            :
                            <div className="full-width">
                                <div className="d-flex justify-content-center mt-5">
                                    <ListGroup>
                                        <ListGroupItem color="primary">No disliked items Available right Now Go to news section first</ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>


                    }

                </Row>




            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        newsItem: state.news
    }
}

export default connect(mapStateToProps)(Items);
