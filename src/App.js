import './App.css';  
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App(){
  const apiKey=process.env.REACT_APP_API_KEY;
  const[progress,setProgress]=useState(0)

    return(
      <div>
      <Router>
       <Navbar/>
       {/* -------------LoadingBar */}
       <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
       {/* -----------------------------Defining Routes------------------------ */}
        <Routes>
        {/* --------NavBar Routes */}
         <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={1} pageSize={9} country="us" category="general" />}/>
         <Route exact path="/about" element={<News setProgress={setProgress} apiKey={apiKey} key={2} pageSize={9} country="us" category="general" />}/>
         <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={3} pageSize={9} country="us" category="business" />}/>
         <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={4} pageSize={9} country="us" category="entertainment" />}/>
         <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={4} pageSize={9} country="us" category="general" />}/>
         <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={5} pageSize={9} country="us" category="health" />}/>
         <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={6} pageSize={9} country="us" category="science" />}/>
         <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={7} pageSize={9} country="us" category="sports" />}/>

         {/* ----------Countries Routes */}
         <Route exact path="/unitedstates" element={<News setProgress={setProgress} apiKey={apiKey} key={8} pageSize={9} country="us" category="general" />}/>
         <Route exact path="/france" element={<News setProgress={setProgress} apiKey={apiKey} key={9} pageSize={9} country="fr" category="general" />}/>
         <Route exact path="/india" element={<News setProgress={setProgress} apiKey={apiKey} key={10} pageSize={9} country="in" category="general" />}/>
         <Route exact path="/palestine" element={<News setProgress={setProgress} apiKey={apiKey} key={11} pageSize={9} country="ae" category="general" />}/>
         <Route exact path="/newzealand" element={<News setProgress={setProgress} apiKey={apiKey} key={12} pageSize={9} country="nz" category="general" />}/>

         
       </Routes>
      </Router>
      
      </div>
    )
  }



