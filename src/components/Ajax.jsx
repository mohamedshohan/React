import axios from 'axios';
import React, { Component } from 'react';
class Ajax extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            posts:[]
        }
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(responce=>{
            console.log(responce.data[1]);
            this.setState({posts:responce.data});
        })
    }
    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((itm,k)=>{
                            return(
                                <tr>
                                    <td>{itm.id}</td>
                                    <td>{itm.title}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>

            </div>
         );
    }
}
 
export default Ajax;