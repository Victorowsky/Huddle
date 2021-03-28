import "./Footer.scss"
import FooterElement from "./FooterElement";

import PhoneImg from "../../images/icon-phone.svg"
import MailImg from '../../images/icon-email.svg'
import Socials from "./Socials";


const FooterLeft = () => {


    return ( 
        <div className="footer_Left">
            <h1 className="title">Huddle</h1>
            <FooterElement>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus vitae alias cupiditate id tenetur beatae, eos dolore saepe fugit. Tempora, eligendi suscipit corporis quae unde sit quibusdam non dolor?
            </FooterElement>
            <FooterElement img={PhoneImg}>
            Phone: +1-535-123-4567
            </FooterElement>
            <FooterElement img={MailImg}>
            example@huddle.com
            </FooterElement>
            
            <Socials/>
            
    </div>
     );
}
 
export default FooterLeft;