import React from 'react'

import "../css/Forms.css";

import NavBar from '../components/NavBar'
import FormEx from '../components/FormEx'

import { useState, useEffect } from 'react';

function Forms() {

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

    fetchForms();
  }, [])

  return (
    <div>
        <NavBar />
        <div className="container_forms">
                <div className="div_title">Forms</div>
                <div className="div_forms">
                    <FormEx title="Form 1" link="/firstForm"/>
                    <FormEx title="Form 2" link="/secondForm"/>
                </div>

                <div>
                  {forms.map((form, index) => (
                    <div key={index}>
                      <h1>{form.title}</h1>
                      <p>{form._id}</p>
                    </div>
              
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