import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Top = (props,go,Group,ListItem,fetchedUser,Avatar, PropTypes) => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Топ-5
		</PanelHeader>
		<Div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			Данный раздел в разработке.
		</Div>

	</Panel>

);



export default Top;
