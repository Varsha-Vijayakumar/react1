import React from "react";
import Nav from "./Nav"
import Post from "./Post"
import Prev from "./Prev"
import axios from "axios"

const Page = () => {


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <Nav />
                    <Post />
                    <Prev />
                </div>
            </div>
        </div>
    );
}




const handleDelete = (props, idd) => {
    /*this.setState({
        post: this.state.post.filter(i => i !== item)
    })*/
    axios.delete("http://localhost:8070/post/" + idd)
        .then(success => {
            if (success.status === 200 && success.statusText === "OK") {
                props.setPost(props.post.filter(i => i.id !== idd))

            }
        })
}


export default Page;