import React, { useState,useEffect } from "react";
import { Center,Table ,Button} from '@mantine/core';

function App(){

const [isValueTrue, setIsValueTrue] = useState(false)
const [records, setRecords] = useState([]);
const[column,setcolumn]=useState([]);
    
    useEffect(() => {
    
     const apiurl = isValueTrue?'http://localhost:8000/api/user':'http://localhost:9000/api/employee';
      fetch(apiurl)
        .then((respone) => respone.json())
        .then(data=>{
          setcolumn(Object.keys(data[0]))
          setRecords(data)
        })
        .catch(err => console.log(err));
    }, [isValueTrue]);
  


  
const fun = ()=>{
  isValueTrue?setIsValueTrue(false):setIsValueTrue(true)
  
}


  return (
    <>
  <div>
    <center>
   <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={fun}>Change data</Button>
   </center>
   
    
    <Table>
    
      <thead>
      
     
        <tr >
        
        {column.map((c,i)=>(
          <th key={i}>{c}</th>
        ))}
      
       
        </tr>
      

      </thead>
     
      <tbody>
        
      {records.map((element, index) => (
      <tr key={index}>
        <td>{element['AMC_CODE']}</td>
        <td>{element['FOLIO_NO']}</td>
        <td>{element['SCHEME']}</td>
        <td>{element['INV_NAME']}</td>
        <td>{element['TRXNTYPE']}</td>
        <td>{element['TRXNNO']}</td>
        <td>{element['TRXNMODE']}</td>
        <td>{element['TRXNSTAT']}</td>
        <td>{element['USERCODE']}</td>
        <td>{element['USRTRXNO']}</td>
        <td>{element['TRADDATE']}</td>
        <td>{element['POSTDATE']}</td>
        <td>{element['PURPRICE']}</td>
        <td>{element['UNITS']}</td>
        <td>{element['AMOUNT']}</td>
        <td>{element['BROKCODE']}</td>
        <td>{element['SUBBROK']}</td>
        
      </tr>
    ))}
        
        {records.map((element, index) => (
      <tr key={index}>
        <td>{element['Customer ID']}</td>
        <td>{element['Customer Name']}</td>
        <td>{element['Qty-Units']}</td>
        <td>{element['NAV']}</td>
        <td>{element['Total Amount']}</td>
      </tr>
    ))}
    </tbody>
        
  
        
    </Table>
    
    
    
    </div>
    </>
  );
}
export default App;