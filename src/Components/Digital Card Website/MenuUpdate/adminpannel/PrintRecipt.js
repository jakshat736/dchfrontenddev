import React from 'react'
import { useLocation } from 'react-router-dom';


const printReceipt = (data) => {
   
    const dateTime = new Date().toLocaleString();
     
    

    let receipt = `Receipt\n\n`;
    receipt += `Customer: ${data.name}\n\n`;
    receipt += `Items:\n`;

    receipt += `Food Name \t Unit Price\t Total Price\n`;
      
    JSON.parse(data.dishes).forEach((item) => {
      
      const itemType = item.type === "full" ? "Full" : item.type === "half" ? "Half" : "";
      const itemName = item.name || "";
      
      const itemFullPrice = item.fullPrice || 0;
      const itemHalfPrice = item.halfPrice || 0;
      // alert(itemType)
      receipt += `${itemType} - ${itemName} X ${itemType === "Full" ?item.full:itemType==="Half"?item.half:""} \t Rs: ${itemType === "Full" ? itemFullPrice : itemType === "Half" ? itemHalfPrice : ""} \t Rs: ${itemType === "Full" ? itemFullPrice * item.full : itemType === "Half" ? itemHalfPrice * item.half : ""}\n`;
       });

      receipt += `\nSubTotal: ${data.totalPrice}\n\n`;
    receipt += `\nSgst: ${(data.totalPrice*0.025)}\n\n`;
    receipt += `\nCgst:${(data.totalPrice*0.025)}\n\n`;
    receipt += `\n Grand Total (Including SGST and CGST): ${parseInt((data.totalPrice))+parseInt((data.totalPrice*0.05))
        }\n\n`;
     
        

 
    receipt += `Date: ${dateTime}\n`;

    const printWindow = window.open('');
    printWindow.document.write('<html><head><title>Receipt</title></head><body>');
    printWindow.document.write(`<pre>${receipt}</pre>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

export default function PrintRecipt() {
    const location=useLocation()
    const data=JSON.parse(location.state.data)
   
  return (
    <div>
    <h1>Receipt Printer</h1>
    <button onClick={printReceipt(data)}>Print Receipt</button>
  </div>

  )
}
