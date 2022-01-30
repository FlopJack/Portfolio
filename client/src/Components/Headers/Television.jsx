import './Television.css';
import television from '../Img/teleCalqueBonReduit.png';
export default function Television() {
	return (
<>
		<img useMap="#imageMap"  id="tv" src={television} alt='Logo' />
		<map name="imageMap">
		<area target="" alt="" title="" href="" onClick={console.log("HEYOH")} coords="613,555,24"  shape="circle"/>

		</map>
		</>
	);
}
