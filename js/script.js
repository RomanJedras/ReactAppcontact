const Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function() {
		this.setState({
			counter: (this.state.counter === 1) ? this.state.counter  : this.state.counter  - 1
		});
	},
	
	incrementHalv: function() {
		this.setState({
			counter: this.state.counter + 1.5
		});
	},
	
	
	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.decrement}, 'Licznik -'),
			React.createElement('button', {onClick: this.increment}, 'Licznik +'),
			React.createElement('button', {onClick: this.incrementHalv}, 'Licznik + 1.5'),
			
			React.createElement('span', {}, 'Licznik ' + this.state.counter)
		);
	}
});




let element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));