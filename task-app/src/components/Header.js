import "./Header.css"
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
                    {theme === 'light' ? 'โหมดสว่าง':'โหมดมืด'}
                    </span>
                </span>
                <span  className="icon" onClick={ToggleTheme}>
                    สลับ
                </span>
            </div>
        </header>
    )
}