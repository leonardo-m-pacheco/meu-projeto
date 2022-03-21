import React from 'react';
import { Link } from 'react-router-dom'

function Contact() {
    return ( 
        <div className='contato'><h1>I am the Contact page</h1>
           <div>
  <Link to="/">Home</Link>
</div></div>
     );
}

export default Contact;