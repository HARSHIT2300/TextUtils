import React from 'react'

export default function Alert(props) {
    const to_Capital = (word)=>
    {
       
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
    }
    return (
       
      props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{to_Capital(props.alert.type)}</strong> : {props.alert.msg}
         
            </div>
        
    )
}
