import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./ReadyToBuild.scss"


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


const ReadyToBuild = () => {

    const classes = useStyles();

    return ( 
        <div className="readyToBuild">
            <h1>Ready To Build Your Community?</h1>
            <Button variant="outlined" className={classes.button}>
				Get Started For Free
			</Button>
        </div>
     );
}
 
export default ReadyToBuild;