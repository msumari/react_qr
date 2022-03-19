import React, { useState } from "react";
import QrReader from "react-scan-qr";

function QRreader() {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="">
      <QrReader
        delay={500}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <div className="bg-red-700 grid place-items-center h-48">
        <p className="text-xl text-white font-bold">The Scanned Code</p>
        <div className="w-full p-1 overflow-auto h-32">
          <span className="text-white w-full">{result}</span>
        </div>
      </div>
    </div>
  );
}

export default QRreader;
