import { makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
	socialIcon: {
		cursor: "pointer",
		fontSize: "45px",
	},
});

const Socials = () => {
	const classes = useStyles();

	return (
		<div className="socials">
			<FacebookIcon className={[classes.socialIcon, "fb"]} />
			<InstagramIcon className={[classes.socialIcon, "ig"]} />
			<TwitterIcon className={[classes.socialIcon, "tw"]} />
		</div>
	);
};

export default Socials;
