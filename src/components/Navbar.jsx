import React,{ useEffect, useState } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { Hlogo } from '../assets';

const Navbar = () => {

const [active,setActive]=useState("");

useEffect(()=>{

},[])

  return (
    <nav
    className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary` }
    >
      <div className='w-full flex justify-between item-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex item-center gap-2'
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }}
          >
            <img src={Hlogo} alt='logo' className='w-2 h-2 object-contain'></img>
          </Link>

      </div>

    </nav>
  )
}

export default Navbar