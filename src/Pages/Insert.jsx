// import axios from 'axios';
// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import axios from "axios";
import { useState } from "react"

import Form from 'react-bootstrap/Form';




const Insert=()=>{
  const[Input,setInput]=useState({});

  const handlechannge=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
  }

  const handleclick=()=>{
    let url="http://localhost:3000/student";
    axios.post(url,Input).then((res)=>{
      alert("Data saved succesfully");

    }).catch((err)=>{
      alert("Error",err);
    })
  }

  return(
    <>
    <Form style={{width:"fit-content",borderRadius:"10px",marginTop:"80px"}}>

      <Form.Group className="mb-3" style={{marginLeft:"450px",marginTop:"20px"}}>
        <Form.Label style={{fontWeight:"bolder",fontSize:"20px"}}>Roll no</Form.Label>
        <Form.Control style={{border:"1px solid black",width:"400px"}} type="text" name="rollno" value={Input.rollno} placeholder="Enter Roll no" onChange={handlechannge} />
      </Form.Group>

      <Form.Group className="mb-3"  style={{marginLeft:"450px",marginTop:"20px"}}>
        <Form.Label style={{fontWeight:"bolder",fontSize:"20px"}}>Name</Form.Label>
        <Form.Control style={{border:"1px solid black",width:"400px"}} type="text" name="name" value={Input.name} placeholder="Enter Name" onChange={handlechannge} />
      </Form.Group>

      <Form.Group className="mb-3"  style={{marginLeft:"450px",marginTop:"20px"}}>
        <Form.Label style={{fontWeight:"bolder",fontSize:"20px"}}>City</Form.Label>
        <Form.Control style={{border:"1px solid black",width:"400px"}} type="text" name="city" value={Input.city} placeholder="Enter city" onChange={handlechannge} />
      </Form.Group>

      <Form.Group className="mb-3"  style={{marginLeft:"450px",marginTop:"20px"}}>
        <Form.Label style={{fontWeight:"bolder",fontSize:"20px"}}>Fees</Form.Label>
        <Form.Control style={{border:"1px solid black",width:"400px"}} type="text" name="fees" value={Input.fees} placeholder="Enter Fees" onChange={handlechannge} />
      </Form.Group>
    </Form>

    <button type="submit"  style={{marginLeft:"600px",marginTop:"20px",borderRadius:"10px",fontWeight:"bolder"}} onClick={handleclick}>Click to save</button>
    
    </>
  )



}




export default Insert;













// const Insert=()=>{
//     const[input,setinput]=useState({});

//     const handlechannge=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setinput(values=>({...values,[name]:value}))
//     }

//    const handleclick=()=>{
//     let url="http://localhost:3000/student";
//     axios.post(url,input).then((res)=>{
//         alert("Data Saved");
//        setinput({})
//     }).catch((err)=>{
//         alert("Error",err);
//     })
//    }
   


  
  



//     return(
//         <>

//     <Container>
     
       
//           <h1 className="text-center">Student Application Form</h1>
//           <Form>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" name='name' value={input.name} placeholder='Enter the name' onChange={handlechannge}  />
//            </Form.Group>

//             <Form.Group controlId="rollNo">
//               <Form.Label>Roll No</Form.Label>
//               <Form.Control type="text" name='rollno' value={input.rollno} placeholder='Enter roll no' onChange={handlechannge}  />
//             </Form.Group>

//             <Form.Group controlId="city">
//               <Form.Label>City</Form.Label>
//               <Form.Control type="text" name='city' value={input.city} placeholder='Enter your city' onChange={handlechannge} />
//             </Form.Group>

//             <Form.Group controlId="fees">
//               <Form.Label>Fees</Form.Label>
//               <Form.Control type="text" name='fees'  value={input.fees} placeholder='Enter the fees' onChange={handlechannge}/>
//             </Form.Group>

//             <Button variant="primary" type="submit" onClick={handleclick}>
//         Submit
//       </Button>

//           </Form>
       
//     </Container>


//         </>
//     )
// }


// export default Insert;

































































































// // const [name, setName] = useState('');
// // const [rollNo, setRollNo] = useState('');
// //    const [city, setCity] = useState('');
// //  const [fees, setFees] = useState('');

// //   const handleSubmit = (e) => {
// //    e.preventDefault();
// //    console.log({ name, rollNo, city, fees });
// //  };

// //  return(<>
// //    <Container>
// //      <Row>
// //        <Col md={6} className="mx-auto">
// //          <h1 className="text-center">Student Application Form</h1>
// //          <Form onSubmit={handleSubmit}>
// //            <Form.Group controlId="name">
// //              <Form.Label>Name</Form.Label>
// //              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
// //            </Form.Group>

// //            <Form.Group controlId="rollNo">
// //              <Form.Label>Roll No</Form.Label>
// //              <Form.Control type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
// //            </Form.Group>

// //            <Form.Group controlId="city">
// //              <Form.Label>City</Form.Label>
// //              <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
// //            </Form.Group>

// //            <Form.Group controlId="fees">
// //              <Form.Label>Fees</Form.Label>
// //              <Form.Control type="text" value={fees} onChange={(e) => setFees(e.target.value)} />
// //            </Form.Group>

// //            <Button variant="primary" type="submit">
// //              Submit
// //            </Button>
// //          </Form>
// //        </Col>
// //      </Row>
// //    </Container>

