import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Losse from './panels/Losse';
import Top from './panels/Top';
import Duel from './panels/Duel';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			nameone: undefined,
			nametwo: undefined,
			viewsone: undefined,
			viewstwo: undefined,
			error: undefined,
			score: 0,
			visiblebtn: true,
			statusa: true,
			loading: true,
			losseimg: undefined,
			vkid: undefined
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to, score: 0 })
	};
	
	gettingSearch = async (e) => {
		this.go(e);
		
		this.setState({loading: true})
		
		e.preventDefault();
		
		const api_url = await
		fetch(`http://googleupvk.ru/api/appgen.php`);
		const data = await api_url.json();
		
		this.setState({
			nameone: data[0].name,
			nametwo: data[1].name,
			viewsone: data[0].views,
			viewstwo: data[1].views,
			imgone: data[0].url,
			imgtwo: data[1].url
		});
		
		if(this.state.imgone) {
			this.setState({
				loading: false
			})
		}
	}
	
	newrandom = async () => {
		const api_url = await
		fetch(`http://googleupvk.ru/api/appgen.php`);
		const data = await api_url.json();
				
		this.setState({
			nametwo: data[1].name,
			viewstwo: data[1].views,
			imgtwo: data[1].url,
			nameone: this.state.nametwo,
			viewsone: this.state.viewstwo,
			imgone: this.state.imgtwo
		});
		this.setState({ visiblebtn: !this.state.visiblebtn })
	};
	
	stateup = () => {
		if(this.state.viewstwo >= this.state.viewsone || this.state.viewstwo === this.state.viewsone) {
			this.setState({ visiblebtn: !this.state.visiblebtn, statusa: true })
			this.newrandom();
			var curr_score = this.state.score;
			curr_score++;
			this.setState({
				score: curr_score
			});
		} else {
			this.lossegame()
		}
	};
	
	statedown = () => {
		if(this.state.viewsone >= this.state.viewstwo || this.state.viewsone === this.state.viewstwo) {
			this.setState({ visiblebtn: !this.state.visiblebtn, statusa: true })
			this.newrandom();
			var curr_score = this.state.score;
			curr_score++;
			this.setState({
				score: curr_score
			});
		} else {
			this.lossegame()
		}
	};
	
	lossegame = () => {
		this.setState({ activePanel: 'losse' });
		var score = this.state.score;
		
		if(score === 0)
			this.setState({ losseimg: 'http://googleupvk.ru/api/losse/losse1.gif' });
		else if(score > 0)
			this.setState({ losseimg: 'http://googleupvk.ru/api/losse/losse2.gif' });
		else if(score > 2)
			this.setState({ losseimg: 'http://googleupvk.ru/api/losse/losse3.gif' });
		else if(score > 5)
			this.setState({ losseimg: 'http://googleupvk.ru/api/losse/losse4.gif' });
		
		console.log(score);
	}

	

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} startgame={this.gettingSearch} />
				<Persik id="persik" loading={this.state.loading} startgame={this.gettingSearch} visiblebtn={this.state.visiblebtn} statusa={this.state.statusa} up={this.stateup} down={this.statedown} score={this.state.score} go={this.go} 
				nameone={this.state.nameone} 
				nametwo={this.state.nametwo} 
				viewsone={this.state.viewsone}
				viewstwo={this.state.viewstwo}
				imgone={this.state.imgone}
				imgtwo={this.state.imgtwo}
				error={this.state.error}
				/>
				<Losse id="losse" go={this.go} losseimg={this.state.losseimg} score={this.state.score} />
				<Top id="top" go={this.go} />
				<Duel id="duel" go={this.go} />
			</View>
		);
	}
}

export default App;
