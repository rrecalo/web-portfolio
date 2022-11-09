import React from 'react'
import {motion, } from 'framer-motion'

const Bio = () => {
  return (
    <div id="biodiv" className="d-flex flex-column col-12 justify-content-center" style={{marginTop:"8vh"}}>
    {/** header */}

      <div className='d-flex flex-column w-100 align-self-center text-left mt-5 fs-3 px-0 px-md-5 fw-light'>

        <p>
          I'm Robert - avid software developer and student -<br/><br/>
          with <b>four years</b> of programming under my belt, I've dipped my feet across the whole spectrum of software
          <br/>
          <br/>
          beginning with Java in a High School AP Comp Sci class, I discovered my passion for<br/> 
          <span className=''><b>Designing, 
          Engineering, and Implementing</b></span><br/><i>all</i> kinds of Software.
          <br/>
          <br/>
          since then, I caught interest in <b>Web Development</b> -- gaining experience with the <span className='eht'>MERN stack</span>, both <span className='eht'>SQL and No-SQL databases</span>, 
          and plenty of practice with <span className='eht'>RESTful Web-API</span>
        </p>
      </div>
    </div>
  )
}

export default Bio