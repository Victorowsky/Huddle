import "./Header.scss";
import LogoSvg from "../../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	tryButton: {
		borderColor: "hsl(322, 100%, 66%)",
		borderRadius: "25px",
		height: `40px`,
		color: "hsl(322, 100%, 66%)",
		textTransform: "none",
		width: "130px",
		padding: "5px",
		"&:hover": {
			borderColor: "hsl(321, 100%, 78%)",
			color: "hsl(321, 100%, 78%)",
		},
	},
});

const Header = () => {
	const classes = useStyles();

	return (
		<header className="header">
			{/* LOGO IMAGE */}
			<div className="logoImage">
				<img className="image" src={LogoSvg} alt="Huddle" />
			</div>

			<Button variant="outlined" className={classes.tryButton}>
				Try It Free
			</Button>
		</header>
	);
};

export default Header;
