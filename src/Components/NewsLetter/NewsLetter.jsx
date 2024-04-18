import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusivi Offers On Your Email</h1>
     <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscride</button>
     </div>
    </div>
  )
}

export default NewsLetter
