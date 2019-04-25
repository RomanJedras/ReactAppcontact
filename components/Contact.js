const Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('div', {className: 'contactsList__item'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/collection/build/ionicons/svg/ios-contact.svg'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
					this.props.item.email
				)
			)
		)
	},
});