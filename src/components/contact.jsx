import React from 'react';

function Cont(props){
    return(
        <div>
            <h1>
                {props.name} page
            </h1>
            <label >email</label>
            <input type="text" />
            <label>message</label>
            <textarea></textarea>
            <button>send</button>
        </div>
    )
}
export default Cont;