import React, { Component } from 'react';
import BalTable from './Balance';
class Main extends React.Component {
    state = {
      
        balance: [
            {
              cusId: 1002,
              cusName: "Sam",
              bal: 55000,
            },
            {
              cusId: 1003,
              cusName: "Ravi",
              bal: 45000,
            }]
        };
    render() { 
        return (
            <div>
              <BalTable
                balance={this.state.balance}
              />
            </div>
          );
    }
}
 
export default Main;