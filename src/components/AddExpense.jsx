import React from 'react'

function AddExpense() {
const [money,setMoney]=React.useState("");

const[data,setData]=React.useState([]);
  const onAdd=()=>{
    if(money!==""){
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      
setData([{"Money":money, "Date":dd+"-"+mm+"-"+yyyy},...data]);
setMoney("");
    }
  }

  return (
    <>
   <div className="row">
    <div className="col-lg-4 h2 text-light">ADD</div>
    <div className="col-lg-4">
      <input type="number"
      value={money}
      onChange={(e)=>setMoney(e.target.value)}
      className="form-control">
      </input>
    </div>
    <div className="col-lg-4 ">
     <button className="btn btn-primary" onClick={onAdd}>Click to ADD</button>
      </div>
      
   </div>
   <div className="row">
    {
      data.map((ele,index)=>{
        return <>
        <div className="card w-25 m-3" key={index}>
         Date: {ele && ele.Date}<br></br>
        Spent:{ele && ele.Money}
        </div>
       
        </>
      })
    }
   </div>

   </>
  );
}

export default AddExpense;
