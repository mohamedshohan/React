import React, { Component } from 'react';
class Demo  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:[
                {
                    name:"shohan",
                    age:25
                },
                {
                    name:"sonu",
                    age:25
                },
                {
                    name:"anu",
                    age:22
                }
            ]
         };
    }
    render() { 
        return ( 
            <div>
                <table>
                    <tr>
                        <td>name</td>
                        <td>age</td>
                    </tr>
                    {
                        this.state.user.map((itm,k)=>{
                            return(
                                <tr>
                                    <td>{itm.name}</td>
                                    <td>{itm.age}</td>

                                </tr>
                            )
                        })
                    }
                </table>
            </div>
         );
    }
}
 
export default Demo;