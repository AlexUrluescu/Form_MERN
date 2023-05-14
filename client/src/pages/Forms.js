import React from 'react'

import "../css/Forms.css";

import NavBar from '../components/NavBar'
import FormEx from '../components/FormEx'

function Forms() {
  return (
    <div>
        <NavBar />
        <div className="container_forms">
                <div className="div_title">Forms</div>
                <div className="div_forms">
                    <FormEx title="Form 1" link="/firstForm"/>
                    <FormEx title="Form 2" link="/secondForm"/>
                </div>
        </div>

        <footer>
                <span>Created by Madalina</span>
        </footer>
    </div>
  )
}

export default Forms