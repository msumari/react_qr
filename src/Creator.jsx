import React, { useState,useRef } from "react";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore/lite";
import app from "./firebase";
import qrcode2 from 'qrcode';
import Header from "./Header";




function Creator() {
  const [imageURL, setImageURL] = useState("");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [weight, setWeight] = useState(0);
  const [status, setStatus] = useState("");
  const FormReff = useRef();

  const submit = (e)=>{
    e.preventDefault()
    let cred={}
    owner===""||undefined?(
    alert("Please enter the owner name")
    ):address===""||undefined?(
      alert("Please enter the adress")
    ):weight===0||undefined?(
      alert("Please enter the weight of pig")
    ):status===""||undefined?(
      alert("Please enter the status of pig")
    ):
   cred = {
      owner:owner,
      address:address,
      weight:weight,
      status:status
    }
   save(cred)
  }
  const save = async(credential)=>{
    const db = getFirestore(app);
     try {
    const docRef = await addDoc(collection(db, "Pork"),credential);
    console.log("Document written with ID: ", docRef.id);
    alert("Registration was Successfull!")
    const response = await qrcode2.toDataURL(docRef.id);
    setImageURL(response);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Something Went wrong ,try refresh and try again or check network connectivity.")
  }
 setAddress("")
    setOwner("")
    setStatus("choose")
    setWeight(0)
    FormReff.current.reset()
  }
  
 
  return (
    
    
   <div>
     <Header/>
     <form ref={FormReff} className="w-full grid place-items-center p-2">
       <h1 className="text-3xl font-bold text-red-700 ">Register</h1>
       <input type="text" placeholder="Owner" name="owner" id="owner" onChange={(e)=>{
         setOwner(e.target.value)
       }} className="h-10 bg-red-200 rounded-lg my-2 p-1"/>
       <input type="text" placeholder="Address" name="address" id="address" onChange={(e)=>{
         setAddress(e.target.value)
       }}
       className="h-10 bg-red-200 rounded-lg mb-2 p-1"/>
       <input type="number" placeholder="Weight" name="weight" id="weight" onChange={(e)=>{
         setWeight(e.target.value)
       }}className="h-10 bg-red-200 rounded-lg mb-2 p-1"/>
       <select name="status" id="status" onChange={(e)=>{
         setStatus(e.target.value)
       }} >
         <option value="choose">Choose the Status</option>
         <option value="piglet">piglet</option>
         <option value="sale">Onsale</option>
         <option value="sold">Slaughtered</option>
       </select>
       <input type="submit" onClick={submit} className="h-15 bg-green-400 rounded-lg p-1 my-2" />
     </form>

     <div className="my-4">
          
          {imageURL&&(
          <div className="px-6">
            <img src={imageURL} height="250" width="250" alt='Qr-code' />
          <a href={imageURL} className="px-4 py-3 bg-green-600 rounded" download>Download</a>
          </div>)}
         </div>

    </div>
  );
}

export default Creator;
