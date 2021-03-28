import "./Footer.scss"

const FooterElement = ({children, img}) => {
    return ( 
        <div className="footerElement">
             <span className="text">
               {img && 
                <img src={img} className="FooterElement_Image" alt=""/>
               } 
               {children}
            </span>
        </div>
     );
}
 
export default FooterElement;