
import React from "react";

class Listed extends React.Component {


    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.reply.filter(i => i.pid == this.props.postid)
                            .map(i => {
                                return (
                                    <li key={i.id} className="list-group-item">
                                        <span>{i.command}</span>
                                        <span className="float-right btn btn-outline-primary" onClick={this.props.delcom.bind(this, i.id)}>Remove</span>
                                    </li>
                                );
                            })

                    }
                </ul>
            </div >
        );
    }
};

export default Listed;