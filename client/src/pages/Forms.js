import React from 'react'

import "../css/Forms.css";

import NavBar from '../components/NavBar'
import FormEx from '../components/FormEx'

import { useState, useEffect } from 'react';


function Forms({userLogin, setUserLogin}) {

  const [ forms, setForms ] = useState([]);
  
  useEffect(() => {
    const fetchForms = async () => {

      try {
        const res = await fetch("http://localhost:5000/forms");
        const data = await res.json();

        console.log(data);
        setForms(data)
        
      } catch (error) {
          console.log(error);
      }

    }

    const sendData = async () => {
      try {
          const res = await fetch("http://localhost:5000/userData", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({token: window.localStorage.getItem("token")})
          });

          const data = await res.json();

          let userData = data.data;
          setUserLogin(userData);
          
          
      } catch (error) {
          console.log(error);
      }
  }

  sendData();

    fetchForms();
  }, [setUserLogin])


  return (
    <div>
        <NavBar setUserLogin={setUserLogin}/>
        <div className="container_forms">
                <div className="div_title"><h2>Forms</h2></div>
                <div className="div_forms">
                  {forms.map((form, index) => (
                      <FormEx key={index} 
                        title = {form.title}
                        description = {form.description}
                        link= {form._id}/>
                
                    ))}
                </div>
        </div>

        <footer>
                <span>Created by Madalina</span>
        </footer>
    </div>
  )
}

export default Forms