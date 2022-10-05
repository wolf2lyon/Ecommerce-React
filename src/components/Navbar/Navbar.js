import React,{useState} from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';
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
                <Link to="/"><div className='page_link4'>Home</div></Link>
                <Link to={`/category/Sportwear`}><div className='page_link1'>Sportwear</div></Link>
                <Link to={`/category/Running`}><div className='page_link2'>Running</div></Link>
                <Link to={`/category/Montaña`}><div className='page_link3'>Montaña</div></Link>
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