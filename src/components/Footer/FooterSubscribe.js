const { Button, makeStyles } = require("@material-ui/core")

const useStyles = makeStyles({
    btn:{
        backgroundColor: 'hsl(322, 100%, 66%)',
        color:'white',
        textTransform:'none',
        padding: '10px 35px',
        fontWeight: 700,
        fontSize: '15px',

        "&:hover":{
            backgroundColor:'hsl(321, 100%, 78%)'
        }

    }
})

const FooterSubscribe = () => {

    const classes = useStyles()

    return ( 
        <div className="footer_Subscribe">
            <input type="text"/>
            {/* <button className="footer_Button">Subscribe</button> */}
            <Button className={classes.btn}>
                Subscribe
            </Button>
        </div>
     );
}
 
export default FooterSubscribe;