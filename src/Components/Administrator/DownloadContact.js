import React, { useEffect } from 'react'

const DownloadContact = () => {
   const fetchDownload=()=>{
    var vCardData =
    "BEGIN:VCARD\r\n" +
    "VERSION:3.0\r\n" +
    "FN:Manu Khandelwal"+
    "\r\n" +
    "N:Manu Khandelwal"+
    ";;;\r\n" +
    "TEL;TYPE=CELL:9899621330" +
    "\r\n" +
    "URL:https://instagram.com/vishalenterprises.hospitality" + // First URL
    "\r\n" +
    "URL:https://linktr.ee/VishalEnterprises" + // Second URL
    "\r\n" +
    "END:VCARD";

  var blob = new Blob([vCardData], { type: "text/vcard" });
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "contact.vcf";
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
   }

   useEffect(()=>{
    fetchDownload()
   })
  
    return (
    <div>
      
    </div>
  )
}

export default DownloadContact
