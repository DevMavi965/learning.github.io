import React ,{useState} from 'react'
export default function TextForm(props){
const [text,setText]=useState('enter text below');
let c;
const onclickhandle=()=>{
  // console.log("onclic .")
  setText(text.toUpperCase());
}
const onclickhandleLc=()=>{
  // console.log("onclic .")
  setText(text.toLowerCase());
}

const onchangehandle=(event)=>{
// console.log("on change")
setText(event.target.value);
c=text.length;
}
const onclkClear=(event)=>{

setText("");

}
  return(
    <div>
        <h3 className='text-bg-danger'>{props.heading} </h3>
        <textarea className='text1 container-md m-3'rows="6"  onChange={onchangehandle} value={text}></textarea>
        <p className=' bg-light position-absolute start-10 m-2'>Words:{text.split(" ").length} and characters:{text.length} </p>
        <button className='btn btn-info m-2' onClick={onclickhandle}>To UpperCase</button>
        <button className='btn btn-info m-2' onClick={onclickhandleLc}>To LowerCase</button>
                <button className='btn btn-info m-2' onClick={onclkClear}>Clear</button>
        {/* <button className='btn btn-info' onClick={onclickSz}>Length</button> */}
        <hr />
        <h2 className='text-dark text-bg-success shadow-lg rounded'>Preview</h2>
        <div className='container-md text-bg-black' >{text} </div>

    </div>
  );
}
