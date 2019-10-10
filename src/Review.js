import React from "react";

class Review extends React.Component {
    state = {
        // input: "",
        review: ""
    };

    box = event => {
        this.setState({
            review: event.target.value
        })
    }
    add = e => {
        this.props.addcom(this.state.review, this.props.postid);
        this.setState({ review: "" });
    }




    render() {
        return (
            <div>
                <span> COMMENT </span><br></br>
                <input type="text" onChange={this.box} value={this.state.review} />
                <span className="btn btn-outline-primary" onClick={this.add}>Send</span>
            </div >
        );
    }
};

export default Review;