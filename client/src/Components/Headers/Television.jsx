import './Television.css';
import television from '../Img/teleCalqueBon.png';
export default function Television() {
	return (
		<div className="divTv">
            <div id="screen"></div>
			<map name="button">
				<area coords='circle' coords='2300,1900,200' href="https://developer.mozilla.org/"/> 
			</map>
			<img usemap="#button" width={"80%"} height="80%" id="tv" src={television} alt='Logo' />
		</div>
	);
}
