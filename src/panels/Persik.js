import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Button, Spinner} from '@vkontakte/vkui';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
const osname = platform();

const Persik = (props,up,down,score,visiblebtn,statusa,loading) => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Счет: { props.score }
		</PanelHeader>
		{ props.loading === false &&
		<Div className="game">
			<Div className="block" style={{ backgroundImage: `url(${props.imgone})` }}>
				<Div className="blockinfo">
					<h3 className="blockname">{props.nameone}</h3>
					<small className="blockdoptext">имеет</small>
					<h4 className="blockviews">{props.viewsone}</h4>
					<small className="blockdoptext mouth">запросов в месяц</small>
				</Div>
			</Div>
			{ props.visiblebtn === false &&
			<Div className="status">
			{ props.statusa === true &&
				<h1 className="status">Верно!</h1>
			}
			</Div>
			}
			<Div className="block" style={{ backgroundImage: `url(${props.imgtwo})` }}>
				<Div className="blockinfo">
					<h3 className="blockname">{props.nametwo}</h3>
					<small className="blockdoptext">имеет</small>
					{ props.visiblebtn === true &&
					<Div>
						<Div>
							<Button className="selectbtn" level="commerce" onClick={props.up}>Больше</Button>
						</Div>
						<Div>
							<Button className="selectbtn" level="destructive" onClick={props.down}>Меньше</Button>
						</Div>
					</Div>
					}
					{ props.visiblebtn === false &&
						<Div>
							<h4 className="blockviews">{props.viewstwo}</h4>
						</Div>
					}
					<small className="blockdoptext mouth">запросов в месяц</small>
				</Div>
			</Div>
		</Div>
		} { props.loading === true &&
		<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
		  <Spinner size="large" style={{ marginTop: 20 }} />
		</div>
		}
	</Panel>

);


export default Persik;
