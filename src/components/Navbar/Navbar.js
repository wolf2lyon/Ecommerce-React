import React,{useState} from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import CardWidget from '../CardWidget/CardWidget';
import './Navbar.css'
const Navbar=()=>{
    const [clicked,setClicked]=useState(false);
    const handleClick=()=>{
        setClicked(!clicked);
    }

    return(
     <header>
      <nav>

        <div className='containerElements-1'>
            <BurgerMenu clicked={clicked} handleClick={handleClick}/>
            <div className='logo'><img src='/images/logo.svg' alt=''></img></div>
            <div className='pages-links'>
                <div className='page_link1'>Collections</div>
                <div className='page_link2'>Men</div>
                <div className='page_link3'>Women</div>
                <div className='page_link4'>About</div>
                <div className='page_link5'>Contact</div>
            </div>
        </div>

        
        <div className='containerElements-2'>
            <CardWidget></CardWidget>
            <div className='img-avatar'>
                <img src='images/image-avatar.png' alt='avatar'></img>
            </div>    
        </div>

      </nav>
    </header>
    )
  }
  export default Navbar;