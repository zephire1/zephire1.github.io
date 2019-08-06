import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Button, Div} from '@vkontakte/vkui';
import './Losse.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Losse = (props,score,losseimg,startgame) => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Вы проиграли
		</PanelHeader>
		<Div className="lossescreen" style={{ backgroundImage: `url(${props.losseimg})` }}>
			<h1>Вы проиграли!</h1>
			<h2>Ваш счет: { props.score }</h2>
			<h3>Лучший счет: { props.score }</h3>
			<h1><Button className="btn-play">Играть!</Button></h1>
		</Div>
	</Panel>

);


export default Losse;
