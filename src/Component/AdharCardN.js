import React from "react";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";

const mask = "**** **** ****";
const maskGenerator = createDefaultMaskGenerator(mask);

const AdharCard = () => {
const [value, setValue] = React.useState("");
 const [displayValue, setDisplayValue] = React.useState("");
 const [maskedValue, setMaskedValue] = React.useState("");
 const [showValue, setShowValue] = React.useState(false);


 const setVal = (e) => {
  let val = e.target.value;
  console.log("input val", val);
  let finalVal = "";
  let charCount = val.replace(/ /g, "").length;
  console.log("char Count", charCount);

  if (charCount <= value.length) {
   finalVal = value.substring(0, value.length - 1);
  } else {
   let val1 = val.substring(val.length - 1, val.length);
   finalVal = value.concat(val1);
  }
  console.log("final", finalVal);

  setValue(finalVal);

  let masked = finalVal?.replace(/./g, "*");
  let dispValue = finalVal;
  if (finalVal.length > 4) {
   masked = masked.match(/.{1,4}/g).join(" ");
   dispValue = finalVal.match(/.{1,4}/g).join(" ");
  }
  setDisplayValue(dispValue);
  setMaskedValue(masked);
 };

 const showDisplayValue = (show) => {
  if(show){
  setShowValue(true);
  setTimeout(() => {
   setShowValue(false);
  }, 10000);
 }
 else{
  setShowValue(false);
 }
  
 }

 return (
  <div>
   <p>Credit Card:</p>
   <input value={showValue ? displayValue : maskedValue} onChange={setVal} maxLength='14' />
   <p>Value: {value}</p>
   <button onClick={() => showDisplayValue(!showValue)}>{!showValue ? 'View' : 'Hide'} </button>
  </div>
 );
};
export default AdharCard;
