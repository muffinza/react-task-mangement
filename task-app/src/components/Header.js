import "./Header.css"
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
export default function Header(props){
    const {theme,setTheme} = props
    const ToggleTheme=()=>{
        if(theme ==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return(
        <header>
            <div className="logo">
                <span>บริหารงาน</span>
            </div>
            <div className="theme-container">
                <span>
                    <span>
                    {theme === 'light' ? <BsFillSunFill />: <BsFillMoonFill />}
                    </span>
                </span>
                <span  className="icon" onClick={ToggleTheme}>
                    {theme === 'light' ? <BsToggleOff />: <BsToggleOn />}
                </span>
            </div>
        </header>
    )
}