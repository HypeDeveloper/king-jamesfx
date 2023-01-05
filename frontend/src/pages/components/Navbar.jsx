import { useNavigate } from 'react-router-dom'
import logo from  '../../assets/logo/kingJamesFxLogo.svg'
import { Button } from './Form'
export default function Navbar(props) {
    const nav = useNavigate()
    function handleNav() {
        nav('/signIn')
    }
    return (
        <div className="navBar">
            <div className="navWrap">
                <img src={logo} alt="" color='black'/>
                <div className="navList">
                    <a className={props.home} href="/">Home</a>
                    <a className={props.about} href="/about">About</a>
                    <div className="wrapNav">
                        <Button action={handleNav}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}