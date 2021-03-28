import "./Footer.scss";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footerBackground"></div>
			<div className="footerContent_Background">
				<div className="footerContent">
					<FooterLeft />
					<FooterRight />
				</div>
			</div>
		</div>
	);
};

export default Footer;
