import React, { Component } from 'react';
import axios from "axios";
class AddCustomer extends React.Component {

    state = {

      error:{},
        customer: {
          name: "",
          mobileNo: "",
          password: "", 
          balance:""
        },
      };
      handleChange = (event) => {
        const customer = { ...this.state.customer }; // copying student object
        customer[event.target.name] = event.target.value; // student[fullName] = "ab"
        //student.fullName = "ab";
        //student[fullName]="ab";
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ customer: customer });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        const customer = {
         cid:0,
        mobileNo: this.state.customer.mobileNo,
        name: this.state.customer.name,
        password: this.state.customer.password,
        wallet: {
        balance: this.state.customer.balance,
        walletId:0
          },
        };
        axios
          .post("http://localhost:8080/api/addCustomer",customer)
          .then((res) => {
            this.props.history.push("/getCustomers");
          })
          .catch((err) => console.log(err));
      };
    
    render() { 
        return (

            <div>
            <h3>Register Form</h3>
            <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">
                  Cutomer_Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  value={this.state.customer.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputMobileNo" className="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputMobileNo"
                  aria-describedby="emailHelp"
                  value={this.state.customer.mobileNo}
                  name="mobileNo"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  value={this.state.customer.password}
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
             
              <div className="mb-3">
                <label for="exampleInputBalance" className="form-label">
                  Balance
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputBalance"
                  value={this.state.customer.balance}
                  name="balance"
                  onChange={this.handleChange}
                />
              </div>
            
 
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
              <p>{this.state.customer.name}</p>
              <p>{this.state.customer.balance}</p>
            </form>
          </div>
        );
   
    }
}
 
export default AddCustomer;