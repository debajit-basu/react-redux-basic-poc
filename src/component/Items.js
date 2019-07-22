import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';


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

                {
                    (this.state.newsValue)?

                            this.props.newsItem.map((val,i) => (
                                <React.Fragment key={val.id}>
                                <div>ID: {val.id}</div>
                                <ListGroup className="mt-4 mb-5">
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>Category: {val.category}</ListGroupItem>
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>Date: {val.date}</ListGroupItem>
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}> Description: {val.description}</ListGroupItem>
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>TotalLike: {val.totalLike}</ListGroupItem>
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>TotalDisLike: {val.totalDislike}</ListGroupItem>
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>{(val.like)?'Liked':'Not Liked'}</ListGroupItem>
                                    <ListGroupItem color={`${(i%2 === 0)?'warning':'success'}`}>{(val.dislike)?'DisLiked':'NotDisLiked'}</ListGroupItem>
                                </ListGroup>
                                </React.Fragment>
                            ))


                        :
                        <ListGroup>
                            <ListGroupItem color="info">No news Available right Now</ListGroupItem>
                        </ListGroup>
                }



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
