import './navbar.css'
import {useState, useEffect} from 'react'
import { Agriculture } from '@mui/icons-material'

export default function Navbar() {
    const homePage = '#';
    const [theme, setTheme] = useState(true);
    const handleTheme = () => setTheme(prev => !prev)
    useEffect(() => {
        document.body.className = theme ? 'light' : 'dark';
        document.getElementById('navbar').className = theme ? 'nav-light navbar-container' : 'nav-dark navbar-container';
        document.getElementById('list1').className = theme ? 'nav-light list-item' : 'nav-dark list-item';
        document.getElementById('list2').className = theme ? 'nav-light list-item' : 'nav-dark list-item';
        document.getElementById('list3').className = theme ? 'nav-light list-item' : 'nav-dark list-item';
        document.getElementById('list4').className = theme ? 'nav-light list-item' : 'nav-dark list-item';
    }, [theme])
    return (
        <nav id='navbar'>
            <div className='logo'>
                {/* <img src="/images/Logo-SmartAgriculture.ico" alt="logo" className={`logo-image ${!theme} ? 'img-dark' : ''`} /> */}
                <Agriculture fontSize='large'/>
            </div>
            <div className='title'>
                <h1>Agro-Tech</h1>
            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    <li><a id='list1' href={homePage}>Home</a></li>
                    <li><a id='list2' href={homePage}>About</a></li>
                    <li><a id='list3' href={homePage}>Services</a></li>
                    <li><a id='list4' href={homePage}>Login/Register</a></li>
                    <label class="switch">
                        <input onClick={() => handleTheme()} type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </ul>
            </div>
        </nav>
    )
}