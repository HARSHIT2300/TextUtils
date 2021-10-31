
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>
  {
    setalert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode = ()=>
  {                       // to change the current set mode 
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
    
    else{
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been Enabled","success");
    }
  }
  return (
   <>
    {/* <Router> */}
   <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} aboutText = "About TextUtils"/>
   
   <strong><Alert alert={alert} /> </strong>
   <div className="container my-3">
          
          {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyze" mode={mode} showalert={showAlert}/>
          {/* </Route>
        </Switch> */}
       </div>
   {/* </Router> */}
   </>
  );
}

export default App;
