const ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},
	
	render: function() {
		return (
			React.createElement('form', {className: 'contactForm'},
				React.createElement('div',{className: 'row contactForm__item'},
					React.createElement('div',{className: 'col'},
						React.createElement('input', {
					type: 'text',
					placeholder: 'Imię',
					value: this.props.contact.firstName,
					className: 'form-control',
				})),
					React.createElement('div',{className: 'col'},
					React.createElement('input', {
					type: 'text',
					placeholder: 'Nazwisko',
					value: this.props.contact.lastName,
					className: 'form-control',
				}))),
				React.createElement('div',{className: 'form-group contactForm__item'},
				React.createElement('input', {
					type: 'email',
					placeholder: 'Email',
					value: this.props.contact.email,
					className: 'form-control email',
				})),
				React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, "Dodaj kontakt")
			)
		)
	},
});
