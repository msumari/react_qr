import React, { useState } from "react";
import { getFirestore, getDoc, doc} from "firebase/firestore";
import app from "./firebase";
import QrReader from "react-scan-qr";
import Header from "./Header";

function QRreader() {
  const [result, setResult] = useState("No result");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("");
 
  const retrieve = async()=>{
    const db = getFirestore(app);
    try {
        const snap = await getDoc(doc(db, 'Pork', result))
     snap.exists()?(
          setOwner(snap.data().owner),
          setAddress(snap.data().address),
          setWeight(snap.data().weight),
          setStatus(snap.data().status),
          alert("Data retrival Success")
     ):console.log("Data not found")
    } catch (e) {
      console.error("Error retriving document: ", e);
      alert("Something Went wrong ,try refresh and try again or check network connectivity.")
    }

  }

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      retrieve()
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="">
      <Header/>
      <QrReader
        delay={500}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <div className="bg-red-700 h-48">
        <p className="text-xl text-white grid place-items-center w-full font-bold">The Scanned Code</p>
        {result&&<div className="w-full p-1 overflow-auto  h-32">
          <div className="flex">
          <span className="text-white w-full">Pig's Owner: </span><span className="text-white w-full">{owner}</span>
          </div>
          <div className="flex"><span className="text-white w-full">Owner's Address: </span><span className="text-white w-full">{address}</span></div>
          <div className="flex"><span className="text-white w-full">Pig's Weight: </span><span className="text-white w-full">{weight}</span></div>
          <div className="flex"><span className="text-white w-full">Pig's status: </span><span className="text-white w-full">{status}</span></div>
        </div>}
      </div>
    </div>
  );
}

export default QRreader;
