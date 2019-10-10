import React from "react";
import Review from "./Review";
import Listed from "./Listed";
import Likes from "./Likes";
import axios from "axios";

const PostList = ({ posts }) => (
  <div>
    <ul className="list-group">
      {posts.map(post => {
        return (
          <li key={post.id} className="list-group-item">
            <span
              className="float-right btn btn-outline-primary"
              // onClick={this.props.handleDelete.bind(this, i.id)}
            >
              Delete
            </span>
            <p>
              <span> {post.title} </span>
            </p>
            <br></br>
            <Likes postId={post.id} />
            <span className="float-right btn btn-primary"> SHARE </span>
            {/* <li className="list-group-item"> */}
            {/* <Review addcom={this.addcom} postid={i.id} />
              <Listed
                delcom={this.delcom.bind(this)}
                reply={this.state.reply}
                postid={i.id}
              /> */}
            {/* </li> */}
          </li>
        );
      })}
    </ul>
  </div>
);

// class Prev extends React.Component {
//   state = {
//     reply: []
//   };
//   componentDidMount() {
//     axios
//       .get("http://localhost:8070/reply")
//       .then(result => {
//         console.log(result);
//         this.setState({
//           reply: result.data
//         });
//       })
//       .catch(err => console.log(err));
//   }
//   addcom = (ad, ppid) => {
//     if (ad === "") {
//       alert("YOU CANT SEND AN EMPTY COMMENT");
//     }
//     /*console.log("new item", value);
//         this.setState({
//             com: [...this.state.com, this.state.review],
//             review: ""
//         })*/
//     axios
//       .post("http://localhost:8070/reply", { command: ad, pid: ppid })
//       .then(success => {
//         console.log(ad);
//         this.setState({
//           reply: [...this.state.reply, success.data]
//         });
//       });
//   };
//   delcom = idd => {
//     /* this.setState({
//              com: this.state.com.filter(i => i !== item)
//          })*/
//     axios.delete("http://localhost:8070/reply/" + idd).then(success => {
//       if (success.status === 200 && success.statusText === "OK") {
//         this.setState({
//           reply: this.state.reply.filter(i => i.id !== idd)
//         });
//       }
//     });
//   };

//   render() {
//     return (
//       <div>
//         <ul className="list-group">
//                     {
//                         this.props.items.map(i => {
//                             return (
//                                 <li key={i.id} className="list-group-item">
//                                     <span className="float-right btn btn-outline-primary" onClick={this.props.handleDelete.bind(this, i.id)}>Delete</span>
//                                     <p><span> {i.title} </span></p><br></br>
//                                     <Likes postid={i.id} />
//                                     <span className="float-right btn btn-primary"> SHARE </span>
//                                     <li className="list-group-item">
//                                         <Review addcom={this.addcom} postid={i.id} />
//                                         <Listed delcom={this.delcom.bind(this)} reply={this.state.reply} postid={i.id} />
//                                     </li>
//                                 </li>
//                             );
//                         })
//                     }
//                 </ul>
//       </div>
//     );
//   }
// }
export default PostList;
