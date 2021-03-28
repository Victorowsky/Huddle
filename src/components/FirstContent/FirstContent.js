import "./FirstContent.scss";
import Image from "../../images/screen-mockups.svg";
import { Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
	button: {
		padding:'20px',
		outline: 'none',
		border: 'none',
		backgroundColor: 'hsl(322, 100%, 66%)',
		borderRadius: '40px',
		color: 'white',
		width: '100%',
		maxWidth: '340px',
		fontWeight: '700',
		fontSize: '15px',
		marginTop: '20px',
		cursor: 'pointer',
		boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.37)',
		transition: '0.1s ease-in-out background',
		textTransform: 'none',
		"&:hover":{
			'backgroundColor': 'hsl(321, 100%, 78%)',
			'box-shadow': '0px 2px 5px rgba(0, 0, 0, 0.521)',
		}
	}

})

const FirstContent = () => {

	const classes = useStyles()

	return (
		<div className="firstContent">
			<h1>Build The Community Your Fans Will Love</h1>
			<span className="firstContnet_Text">
				Huddle re-imagines the way we build communities. You have a voice, but
				so does your audience. Create connections with your users as you engage
				in genuine discussion.
			</span>
			<Button className={classes.button}>Get Started For Free</Button>
			<div className="firstContent_Image">
				<img src={Image} alt="" className="image" />
			</div>
		</div>
	);
};

export default FirstContent;
