const MemberCard = ({text, img, amount}) => {
    return ( 
        <div className="memberCard">
            <img src={img} alt="" className="image"/>
            <span className="memberCard_Amount">{amount}+</span> 
            <span className="memberCard_Text">{text}</span>
            
        </div>
     );
}
 
export default MemberCard;