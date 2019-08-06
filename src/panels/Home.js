import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, Div, PanelHeader} from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser, startgame }) => (
	<Panel id={id}>
		<PanelHeader>Что гуглят больше?</PanelHeader>

		<Group title="Об игре">
			<Div>
				Что гуглят больше - это смешной тест интуиции с приколами, где нужно сравнивать вопросы в популярности. Попробуйте угадать, что чаще спрашивают в интернете, способности экстрасенса не обязательны, но немного логики пригодится!
			</Div>
		</Group>
		<Group title="Описание игры">
			<Div>
			Вам предлагается два запроса поисковику Google и задание угадать, какой популярнее. Слева игра выводит фото с оценкой частотности запроса, справа — конкурента с неизвестным значением популярности. Оцените шансы второго в сравнении с первым и нажмите одну из кнопок:
			<ul>
				<li>«больше» для превосходящего по запросам в Гугле</li>
				<li>«меньше» — для низкого, не востребованного</li>
			</ul>

Чем чаще будете угадывать, тем выше балл. Стремитесь отвечать правильно много раз подряд, тогда игра зафиксирует рекорд.
</Div>
		</Group>
		<Group title="Одиночная игра">
			<Div>
				<Button size="xl" onClick={startgame} data-to="persik">
					Играть
				</Button>
			</Div>
		</Group>
		<Group title="Дополнительные кнопки">
			<Div style={{display: 'flex'}}>
				<Button level="destructive" size="l" stretched style={{ marginRight: 8 }} onClick={go} data-to="duel">Дуэль</Button>
				<Button level="commerce" size="l" stretched style={{ marginRight: 8 }} onClick={go} data-to="top">Топ</Button>
				<Button level="1" size="l" stretched style={{ marginRight: 8 }}>Предложить запрос</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;