import React from 'react';
const BalTable = (props) => {
    const {balance } = props;
    return (
      <div>
        <table className="table table-dark table-striped w-50 mx-auto">
          <thead>
            <tr>
              <th>Cus Id</th>
              <th>Cus Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {balance.map((cus) => (
              <tr>
                <td>{cus.cusId}</td>
                <td>{cus.cusName}</td>
                <td>{cus.bal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default BalTable;