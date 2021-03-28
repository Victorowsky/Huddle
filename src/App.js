import "./App.scss";
import FirstContent from "./components/FirstContent/FirstContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Members from "./components/Members/Members";
import ReadyToBuild from "./components/ReadyToBuild/ReadyToBuild";
import TextCards from "./components/TextCards/TextCards";

function App() {
	return (
		<div className="app">
			<Header />
			<FirstContent />
			<Members />
			<TextCards />
			<ReadyToBuild/>
			<Footer/>
		</div>
	);
}

export default App;
