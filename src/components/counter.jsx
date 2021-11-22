import React, { Component } from 'react';
class Count  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            conter:0
         };
    }

    
    render() { 
        return ( 
            <div>
                <p>{this.state.conter}</p>

            </div>

         );
    }
}
 
export default Count ;