import React,{ useState } from 'react';
const CusReg = () => {
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

export default CusReg;

