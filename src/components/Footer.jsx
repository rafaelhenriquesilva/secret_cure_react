import {} from 'react'
import '../css/style.css'
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return(
        <>
        <div>
            <footer className="footer">
                <p className="paragrafo_footer"><a href="https://github.com/LucasVinicius45"><AiFillGithub/></a></p>
                <p className="paragrafo_footer">Email: SecretCure@gmail.com</p>
            </footer>
        </div>
            

        </>
    )
}
export default Footer
