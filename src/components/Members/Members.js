import "./Member.scss"
import MemberCard from "./MembersCard"
import CommunitiesImg from '../../images/icon-communities.svg'
import MessageImg from '../../images/icon-messages.svg'
const Members = () => {
    return ( 
        <div className="members">
            <MemberCard img={CommunitiesImg} amount={'1.4k'} text={'Communities Formed'}/>
            <MemberCard img={MessageImg} amount={'2.7m'} text={'Messages sent'} />
        </div>
     );
}
 
export default Members;