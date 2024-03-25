import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
    const[input,setInput]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search/${input}`)
    }
  return (
    <>
        <div className='nav'>
            <div className="left">
                <Link to='/' className='link'>
                    <div>
                        <h2 style={{display:'inline' ,color:'red'}}>Y.</h2>
                        <h2 style={{display:'inline' ,color:'green'}}>U.</h2>
                        <h2 style={{display:'inline' ,color:'grey'}}>M.</h2>
                        <h2 style={{display:'inline' ,color:'purple'}}>I.</h2>
                        <h2 style={{display:'inline' ,color:'grey'}}>C.</h2>
                        <h2 style={{display:'inline' ,color:'green'}}>I.</h2>
                        <h2 style={{display:'inline' ,color:'purple'}}>O.</h2>
                        <h2 style={{display:'inline' ,color:'red'}}>S.</h2>
                    </div>
                </Link>
            </div>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e)=>setInput(e.target.value)}type="text" placeholder='Search for a dish'/>
                </form>
            </div>
            <div className="right">
                    <Link to={`/category/indian`} className='link'> 
                        <div className='cntr'>Indian </div>
                    </Link>
                    
                    <Link to={`/category/american`} className='link'>
                        <div className='cntr'>American</div>
                    </Link>
                    
                    <Link to={`/category/british`} className='link'>
                        <div className='cntr'>British</div>
                    </Link>
                    
                    <Link to={`/category/chinese`} className='link'>
                        <div className='cntr'>Chinese</div>
                    </Link>
                   
                    <Link to={`/category/thai`} className='link'>
                        <div className='cntr'>Thai</div>
                    </Link>
            </div>
            {/* Media queries for responsive behavior */}
            <style jsx>{`
  /* Extra small devices (phones, < 485px) */
  @media only screen and (max-width: 485px) {
    .nav {
      margin: 7px 0px;
      flex-direction: column;
      height: 20%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .search{
      width: 140%;
    }

    .search input {
      margin-top: 8px;
    }

    .left,
    .right {
      font-size: 16px;
      width: 100%; /* Allow full width for smaller screens */
    }
    .left div {
      margin-left: 0.1rem;
      justify-content: center;
      text-align: center;
    }

    .right div {
      margin-left:3px;
      padding: 0.2rem;
      font-size:16px;
    }
  }

  @media (min-width: 485px) and (max-width: 992px) {
    .nav {
      margin: 10px 0px;
      flex-direction: column;
      height: 20%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    .search input {
      width: 20rem;
      margin-top: 10px;
    }

    .left,
    .right {
      font-size: 18px;
      width: 100%; /* Allow full width for smaller screens */
    }

    .left div {
      margin-left: 4rem;
      justify-content: center;
      text-align: center;
    }

    .right div {
      padding: 0.4rem;
    }
  }

  @media only screen and (min-width: 700px){
    .search input{
      width:27rem;
    }
  }
`}</style>

        </div>
    </>
  )
}

export default Navbar
