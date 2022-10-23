import React,{useState} from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import CardWidget from '../CardWidget/CardWidget';
import { useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase'
import { Link, NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar=()=>{
    const [categories, setCategories]= useState([])

    useEffect(()=> {
        const collectionRef= query(collection(db,'categories'),orderBy('order'))
        getDocs(collectionRef).then(response=>{
            console.log(response)
            const categoriesAdapted= response.docs.map(doc =>{
                const data = doc.data()
                return { id: doc.id, ...data}
            })

            setCategories(categoriesAdapted)
        })
    },[])

    console.log(categories)
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
                { categories.map(cat => (
                    <NavLink key={cat.id} to={`/category/${cat.slug}`}><div className={`page_link${cat.order}`}>{cat.label}</div></NavLink>  
                ))}
                {/* <NavLink to={`/category/Sportwear`}><div className='page_link1'>Sportwear</div></NavLink>
                <NavLink to={`/category/Running`}><div className='page_link2'>Running</div></NavLink>
                <NavLink to={`/category/Montaña`}><div className='page_link3'>Montaña</div></NavLink> */}
            </div>
        </div>

        
        <div className='containerElements-2'>
            <CardWidget/>
            <div className='img-avatar'>
                <img src='images/image-avatar.png' alt='avatar'></img>
            </div>    
        </div>

      </nav>
    </header>
    )
  }
  export default Navbar;