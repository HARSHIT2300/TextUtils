import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const UpperCsClick = ()=>{
       
        let text1 = text.toUpperCase();
        setText(text1);
        props.showalert("Converted Text to UpperCase","success");
    };
    const wordCount = (word)=>{
        let arr = word.split(/\s+/); let ct = 0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].length !== 0) ct++;
        }
        return ct;
    }
    const remove_Extra_Spaces = ()=>{
        let arr = text.split(/\s+/); 
        let new_word="";
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].length !== 0)  new_word = new_word+arr[i]+" ";
        }
        setText(new_word.slice(0,new_word.length-1)); 
        props.showalert("Removed Extra Spaces from Text","success");
    }
    const convert_Camel_Case = ()=>{
        let arr = text.split(/\s+/); 
        let new_word="";
        for(let i=0;i<arr.length;i++)
        {   
            if(arr[i].length !== 0)  new_word = new_word+arr[i][0].toUpperCase()+arr[i].slice(1)+" ";
        }
        setText(new_word.slice(0,new_word.length-1)); 
        props.showalert("Converted Text to Camel Case","success");
    }
    const LowerCsClick = ()=>{
       
        let text1 = text.toLowerCase();
        setText(text1);
        props.showalert("Converted Text to LowerCase","success");
        
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
        <button disabled ={text.length ===0} disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={UpperCsClick}>Convert to UpperCase</button>
        <button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={LowerCsClick}>Convert to LowerCase</button>
        <button disabled ={text.length ===0}  className="btn btn-primary mx-1 my-1" onClick={ClearClick}>Clear Text</button>
        <button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy Text</button>
        <button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={remove_Extra_Spaces}>Remove Extra Spaces</button>
        <button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={convert_Camel_Case}>Convert to Camel Case</button>
        </div>
        <div className="container my-3" style={{ color : props.mode === 'light' ? '#042743' : 'white'}}>
        <h2> Your Text Summary</h2>
        <p> {wordCount(text)} words and {text.length} characters</p>
        <p> {0.008 * wordCount(text)} minutes required to read the above entered text</p>
        <h2>Text Preview</h2>
        <p>{text.length>0 ? text : "Enter Something in the TextBox above to Preview it here"}</p>
        </div>
        </>
)
}

