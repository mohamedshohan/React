import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customers:[]
         }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/getCustomers")
        .then(responce=>{
            console.log(responce.data[1]);
            this.setState({customers:responce.data});
        })
    }
    handleDelete = (id) => {
      axios.delete(`http://localhost:8080/api/deleteCustomer/${id}`).then((res) => {
        const customers = this.state.customers.filter((std) => std.cid != id);
        this.setState({ customers: customers });
      });
    };
    render() { 
        return (  
        <div className="container">
             <Link
          to="/addCustomer"
          className="btn btn-secondary btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>CID</th>
              <th>MOBILE</th>
              <th>NAME</th>
              <th>PASSWORD</th>
              <th>WALLET_ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cus) => (
              <tr>
                <td>{cus.cid}</td>
                <td>{cus.name}</td>
                <td>{cus.mobileNo}</td>
                <td>{cus.password}</td>
                <td>{cus.wallet.walletId}</td>
                <td>
                  <Link to={`/customer/update/${cus.cid}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(cus.cid)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Customer;