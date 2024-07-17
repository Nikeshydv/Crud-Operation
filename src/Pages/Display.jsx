import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';


const Display=()=>{

    const[myData,setMyData]=useState([]);

    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
          
            setMyData(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[]);


    const ans=myData.map((key)=>{
        return(<>
        <tr>
            
            <td>{key.Roll}</td>
            <td>{key.Name}</td>
            <td>{key.City}</td>
            <td>{key.Fees}</td>
        </tr>
        
        
        </>)
    })

    return(
        <>
        <Container>
<h1 style={{marginTop:"20px",width:"fit-content", marginLeft:"480px",textDecoration:"underline"}}>Student Data</h1>
        <Table  style={{width:"",margin:"auto",marginTop:"50px"}} striped bordered hover>
            <thead>
                
                    <tr>
                        
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                    </tr>
                    </thead>
                <tbody>
                {ans}
                </tbody>
            
        </Table>
       
        </Container>
        </>
)}

export default Display;