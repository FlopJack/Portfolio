import './Television.css';
import television from '../Img/teleCalqueBon.png';
export default function Television() {
	return (
		<div className="divTv">
            <div id="screen"></div>
			<img id="tv" src={television} alt='Logo' />
		</div>
	);
}
