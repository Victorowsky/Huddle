import "./Footer.scss"
import FooterElement from "./FooterElement"
import FooterSubscribe from "./FooterSubscribe"



const FooterRight = () => {


    return ( 
        <div className="footer_Right">
           <h2 className="title">NEWSLETTER</h2>
            <FooterElement>
                To receive tips on how to grow your comminity, sign up to our weekly newsletters. We'll never send you span or pass on your email adress
            </FooterElement>
            <FooterSubscribe/>
    </div>
     );
}
 
export default FooterRight;