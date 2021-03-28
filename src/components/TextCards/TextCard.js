
import "./TextCard.scss"
const TextCard = ({title, text, img, left}) => {




    return ( 
        <div className="textCard">
            <div className="textCard_Text">
                <h1>{title}</h1>
                <span>
                    {text}
                </span>
            </div>
            <div className="textCard_Image">
                <img className="image" src={img} alt="GrowTogether"/>
            </div>
        </div>
     );
}
 
export default TextCard;