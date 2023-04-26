//import React from 'react'

function AddExpense() {
  return (
    <div>
      <div className="text-light h3">
        <span>
          {" "}
          AddExpense <input type="number" className="form-control" />{" "}
          <button className="btn btn-success">Submit</button>
        </span>
      </div>
    </div>
  );
}

export default AddExpense;
