import logo from './DailyEd-logo.png'
import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    const[isMobile,setIsMobile] =useState(false);
    return(
        <div>
            <nav>
            <img src={logo} alt="DailyEd-Logo"/>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={()=>setIsMobile(false)}
                >
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/National"><li>National</li></Link>
                    <Link to="/International"><li>International</li></Link>
                    {/* <Link to="/Business"><li>Business</li></Link>
                    <Link to="/Entertainment"><li>Entertainment</li></Link> */}
                    <Link to="/Sports"><li>Sports</li></Link>
                    <Link to="/Reviews"><li>Reviews</li></Link>
                    <Link to="/Notes"><li>Notes</li></Link>
                </ul>
                <button className='mobile-menu-icons'
                    onClick={()=>setIsMobile(!isMobile)}>
                    {
                    isMobile ? (<i class="fa-regular fa-bars"></i>) : (<i class="fa-solid fa-x"></i>)
                    }
                </button>
            </nav>
            
        </div>
    )
}