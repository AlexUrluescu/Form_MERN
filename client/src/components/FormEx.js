import React from 'react'
import { Link } from 'react-router-dom';

const FormEx = ({title, link}) => {
  return (
    <div className='form'>
        <div className='form_title'>{title}</div>
        <div className='form_content'>Descriere</div>
        <div className='form_link'><Link className='button_link' to={link}>Click</Link></div>
    </div>
  )
}

export default FormEx;