import React from 'react';
import axios from "axios"

class Likes extends React.Component {
    state = {
        like: [],
        count: 0,
        uncount: 0
    }
    /*likes = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    unlikes = () => {
        this.setState({
            uncount: this.state.uncount + 1
        })
    }*/
    componentDidMount() {

        axios.get("http://localhost:8070/like")
            .then(result => {
                console.log(result)
                this.setState({
                    like: result.data
                })
            }).catch(err => console.log(err))
    }
    likes = e => {
        //console.log("new item", item);
        axios.post("http://localhost:8070/like", { like: this.state.count + 1, pid: this.props.postid })
            .then(success => {
                console.log(success)
                this.setState({
                    count: this.state.count + 1
                })
            })
    }
    render() {
        return (
            <div>
                <span className="btn btn-primary " onClick={this.likes}>{this.state.count} <span className="glyphicon glyphicon-thumbs-up"></span> </span>
                <span className="btn btn-primary " onClick={this.unlikes}>{this.state.uncount} <span className="glyphicon glyphicon-thumbs-down"></span> </span>
            </div>
        )
    }
}

export default Likes;