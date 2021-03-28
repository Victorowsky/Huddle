import GrowTogetherImg from "../../images/illustration-grow-together.svg";
import FlowingImg from "../../images/illustration-flowing-conversation.svg";
import UsersImg from "../../images/illustration-your-users.svg";
import "./TextCards.scss"
import TextCard from "./TextCard";
const TextCards = () => {
    return ( 
        <div className="textCards">
            <TextCard
				title={"Grow Together"}
				text={
					"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
				}
				img={GrowTogetherImg}
			/>
			<TextCard
				title={"Flowing Conversations "}
				text={
					"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. "
				}
				img={FlowingImg}
				// left
			/>
			<TextCard
				title={"Your Users"}
				text={
					"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
				}
				img={UsersImg}
			/>
        </div>
     );
}
 
export default TextCards;