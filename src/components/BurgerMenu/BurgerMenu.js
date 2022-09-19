import './BurgerMenu.css'
const BurgerMenu=(props)=>{
     
    return(
        <div onClick={props.handleClick} className='container-bars'>
                <div className={`bars bar1 ${props.clicked ? 'active_bar1':''}`}></div>
                <div className={`bars bar2 ${props.clicked ? 'active_bar2':''}`}></div>
                <div className={`bars bar3 ${props.clicked ? 'active_bar3':''}`}></div>
         </div>
    )
}
export default BurgerMenu;