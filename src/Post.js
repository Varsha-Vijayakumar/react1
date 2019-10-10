import React from "react";
import axios from "axios"

const Post = () => {
    const [post, setPost] = React.useState([]);
    const [input, setIn] = React.useState("");
    React.useEffect(() => {
        axios.get("http://localhost:8070/post")
            .then(res => {
                setPost(res.data)
            })
    }, []);
    return (
        <div>
            <textarea rows="5" cols="182" placeholder="Write Something..." onChange={handleInputChange} value={this.state.input}></textarea><br></br>
            <button className="btn btn-outline-primary" onClick={add}>POST</button>
        </div>
    )
}
const add = () => {
    if ({ input } === "") {
        alert("U CAN'T POST AN EMPTY ")
    }
    else {
        /*console.log("new item", value);
        this.setState({
            post: [...this.state.post, item]
        })*/
        axios.post("http://localhost:8070/post", { title: input })
            .then(success => {
                setPost([...post, success.data])
            })
    }
}
const handleInputChange = event => {
    setIn(event.target.value)
}



export default Post;