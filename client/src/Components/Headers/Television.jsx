import '../Style/Television.css';
import television from '../Img/teleCalqueBonReduit.png';

import ImageMap from 'image-map';
import { useEffect } from 'react';
export default function Television() {
	useEffect(() => {
		ImageMap('img[usemap]');
	}, []);
	function turOnOffTV() {
		let screen = document.getElementsByClassName('screen');
		if (screen.item(0).classList.contains('screen-off')) {
			screen[0].classList.remove('screen-off');
			screen[0].classList.add('screen-on');
		} else {
			screen[0].classList.remove('screen-on');
			screen[0].classList.add('screen-off');
		}
	}

	return (
      <div id='divTV'>
			<div className='screen screen-off'>
       
        <div className='screenWelcome'>Welcome</div>
				<img src={television} useMap='#imageMap' alt='' id='tv' />
		
			</div>
			<map name='imageMap'>
				<area
					target=''
					alt=''
					title=''
					href=''
					onClick={(e) => {
						e.preventDefault();
						turOnOffTV();
					}}
					id='tvButton'
					coords='610,554,24'
					shape='circle'
				/>
			</map>
</div>
	);
}
