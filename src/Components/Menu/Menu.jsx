import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#education">Education</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Experiences</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#project">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#extracurics">Volunteering / Extra Curriculars</a>
                </li>
            </ul>
        </div>
    )
}
