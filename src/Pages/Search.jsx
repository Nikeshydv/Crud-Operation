import axios from "axios";
import { useState } from "react";

import Table from 'react-bootstrap/Table';



const Search=()=>{
const[rno,setrno]=useState("");
const[mydata,setMyData]=useState([]);

const handlesearch=()=>{
    let url=`http://localhost:3000/student?Rollno=${rno}`
    axios.get(url).then((res)=>{
        setMyData(res.data);
    })
}

let ans=mydata.map((key)=>{
    return(
        <>
        <tr>
           
            <td>{key.Rollno}</td>
            <td>{key.Name}</td>
            <td>{key.City}</td>
            <td>{key.Fees}</td>
        </tr>
        </>
    )
})




    return(
        <>
        <h1>Search</h1>
<input type="text" value={rno} onChange={(e)=>{setrno(e.target.value)}}/>
<button onClick={handlesearch}>Search</button>
<Table striped bordered hover>
    <thead>
        <tr>
            <th>Roll no</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>

        </tr>
      
            {ans}
        
    </thead>
</Table>
        </>
    )
}

export default Search;