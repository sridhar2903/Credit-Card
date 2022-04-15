import React,{useState} from 'react';



 const Creditcard = () => {
   const [input1, setinput1] = useState("");
   const [input2, setinput2] = useState("");
   const [input3, setinput3] = useState("");
   const [input4, setinput4] = useState("");
   const [data, setdata]  = useState([]);

   const manageInput1 = (e) => {
       
  
     setinput1(e.target.value)

 }
 const manageInput2 = (e) => {
       

   setinput2(e.target.value)

 }
 const manageInput3 = (e) => {
 
  
   setinput3(e.target.value)

 }
 const manageInput4 = (e) => {
 
 
   setinput4(e.target.value)

 }
 var card = document.getElementsByClassName('inputfield');

 Array.from(card).forEach(function(cardds){
   cardds.addEventListener("keyup", function(event) {
   
     if ( cardds.value.length === 4) {
     
       cardds.nextElementSibling.focus()
     }
     if(cardds.value.length === 0){
         cardds.previousElementSibling.focus()
     }
   });
 })


 const Submit = () => {


   if(input1.length + input2.length + input3.length + input4.length !== 16 ){
     console.log(input1.length + input2.length + input3.length + input4.length);
     
       alert("Card Number Should be of 16 digits");

   }
   else{
   const tempobj =  {
       input1 :  input1,
       input2 :  input2,
       input3 :  input3,
       input4 :  input4,
       id : Date.now()
   }
   setdata([...data, tempobj])




 }

 }

const Delete = (e) => {
   let id = e;
 let a = data.filter((obj) => obj.id !== id)
  
   setdata(a)
  



 }


   return (
     <div className="App">
    
   
   
       <form>
       Card Number:
       <input type= "text" maxLength= '4'  className='inputfield' onChange={manageInput1} required></input>
       <input type= "text" maxLength= '4'  className='inputfield' onChange={manageInput2} required></input> 
       <input type= "text" maxLength= '4'  className='inputfield' onChange={manageInput3} required></input>
       <input type= "text" maxLength= '4' className='inputfield' onChange={manageInput4} required></input>
       </form>
         <button onClick={Submit} className='btn'>SUBMIT</button>
         
       
        


         <table className='table' width="100%" border='1' cellPadding='7' cellSpacing='4'>
         
             <tr>
                 <th>S.No</th>
                 <th>Card Number</th>
                 <th>Delete</th>
             </tr>
         {data.length > 0 && data.map((e,id) => {
           let{input1,input2,input3,input4}=e;
             return (<tr >
                 <td>{id+1}</td>
                 <td>{input1} {input2} {input3} {input4} </td>
                 <td key={e.id} onClick={() => Delete(e.id)}> <button>Delete</button></td>
             </tr>)

         }) }
         </table>
        
     </div>

   );
  
 }

 export default Creditcard;