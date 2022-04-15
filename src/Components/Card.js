import React,{useState} from 'react';



 const Card = () => {
   const [boxone, setBoxone] = useState("");
   const [boxtwo, setBoxtwo] = useState("");
   const [boxthree, setBoxthree] = useState("");
   const [boxfour, setBoxfour] = useState("");
   const [data, setData]  = useState([]);

 



 


 const handlesubmit = () => {

  const getlastid=data.length;
  console.log(getlastid);

   if(boxone.length + boxtwo.length + boxthree.length + boxfour.length !== 16 )
   {
     
     
       alert("Please Enter all 16 digits!!!");

   }

   else
   {

   setData([
       
       ...data,
       
       {
        id : String( getlastid+1),
        boxone :  boxone,
        boxtwo :  boxtwo,
        boxthree :  boxthree,
        boxfour :  boxfour,
        
       }
])
       }
    }


const handledelete = (cardid) => {
   
 let newdata = data.filter((data) => data.id !== cardid)
  
   setData(newdata)
  



 }

 var getrow = document.getElementsByClassName('cardno');
 Array.from(getrow).forEach(function(rows){
    rows.addEventListener("keyup", function() {
    
      if ( rows.value.length === 4) {
      
        rows.nextElementSibling.focus()
      }
      if(rows.value.length === 0){
          rows.previousElementSibling.focus()
      }
    });
  })


   return (
     <div className="App">
    
   
   
  
        Enter Credit Card Number:
       <input type= "tel" maxLength={4}  className='cardno' onChange={(event)=>setBoxone(event.target.value)}required></input>
       <input type= "tel" maxLength={4}  className='cardno' onChange={(event)=>setBoxtwo(event.target.value)} required></input> 
       <input type= "tel" maxLength={4}  className='cardno' onChange={(event)=>setBoxthree(event.target.value)} required></input>
       <input type= "tel"maxLength={4} className='cardno' onChange={(event)=>setBoxfour(event.target.value)} required></input>
     
         <button onClick={handlesubmit} className='btn'>SUBMIT</button>
         
       
        


         <table className='table'  border='1' width="100%">
             <tbody>
         
             <tr>
                 <th>List</th>
                 <th>Credit Card Number</th>
                 <th>Delete Entry</th>
             </tr>
             
         { data.map((data) => {
           
             return (
             <tr >
                 <td>{data.id}</td>
                 <td>{data.boxone} {data.boxtwo} {data.boxthree} {data.boxfour} </td>
                 <td> <button  onClick={() => handledelete(data.id)}>Delete</button></td>
             </tr>
             )

         }) }
         </tbody>
         </table>
        
     </div>

   );
  
 }

 export default Card;