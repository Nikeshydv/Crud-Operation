import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";


const Update=()=>{
const[myData,SetMydata]=useState([]);
const[editData,EditMyData]=useState({});



const loadData=()=>{
    let url="http://localhost:3000/student";
    axios.get(url).then((res)=>{
        SetMydata(res.data);
    
    })

    useEffect(()=>{
        loadData();
    })
}

const myEdit=(myid)=>{
 let url="http://localhost:3000/student";
 axios.get(url).then((res)=>{
    EditMyData(res.data);
 })
}

const myDel=(myid)=>{
    let url="http://localhost:3000/student";
    axios.delete(url).then((res)=>{
        alert("Data Deleted Successfully");
        loadData();
    })
    
}

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    editData(values=>({...values, [name]:value}));
}


const handleClick=()=>{
    let url="http://localhost:3000/student";
    axios.put(url,editData).then(()=>{
        alert("data update succefull");
    })

}



const ans=myData.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.Rollno}</td>
            <td>{key.Name}</td>
            <td>{key.City}</td>
            <td>{key.Fees}</td>
            <td>
                <a href="#"><img src=""onClick={()=>{myEdit(key.id)}} /></a>

                <a href="#"><img src="" onClick={()=>{myDel(key.id)}}/> </a>
            </td>
        </tr>
        </>
    )
})

    return(
        <>
        
<table>
    <thead>
       <tr>
        <td>Roll no</td>
        <td>Name</td>
        <td>City</td>
        <td>Fees</td>
       </tr>
       <tbody>
        {ans}
       </tbody>
    </thead>
</table>

<br/>
<form>
Edit Rollno<input type="text" name="rollno" value={editData.rollno} onChange={handleInput}></input>
      <br/>
      Edit Name<input type="text" name="name" value={editData.name} onChange={handleInput}></input>
      <br/>
      Edit City<input type="text" name="city" value={editData.city} onChange={handleInput}></input>
      <br/>
      Edit Fees<input type="text" name="fees" value={editData.fees} onChange={handleInput}></input>
      <br/>
      <button onClick={handleClick}>Update Save!!</button>

</form>

        </>
    )
}

export default Update;