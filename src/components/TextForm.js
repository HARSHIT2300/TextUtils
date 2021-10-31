import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const UpperCsClick = ()=>{
       
        let text1 = text.toUpperCase();
        setText(text1);
        props.showalert("Converted to UpperCase","success");
    };
    const LowerCsClick = ()=>{
       
        let text1 = text.toLowerCase();
        setText(text1);
        props.showalert("Converted to LowerCase","success");
        
    };
    const ClearClick = ()=>{
       
        // let text1 = text.toLowerCase();
        setText('');
        props.showalert("Cleared Text","success");
        
    };
    const CopyText = ()=>{
       
       let text = document.getElementById("myBox")
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showalert("Copied Text to ClipBoard","success");
        
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
return (
    <>
        <div className = "container" style={{ color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpperCsClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={LowerCsClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={ClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
        </div>
        <div className="container my-3" style={{ color : props.mode === 'light' ? '#042743' : 'white'}}>
        <h2> Your Text Summary</h2>
        <p> {text.split(' ').length} words and {text.length} characters</p>
        <p> {0.008 * text.split(' ').length} minutes required to read the above entered text</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Something in the TextBox above to Preview it here"}</p>
        </div>
        </>
)
}

