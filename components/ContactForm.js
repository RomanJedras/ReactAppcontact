const ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},
	
	render: function() {
		return (
			<form className = {'contactForm'} >
				<div className={'row contactForm__item'}>
					<div className={'col'}>
						<input type = 'text'  placeholder = 'Imię'  value = { this.props.contact.firstName } className = {'form-control'} />
					</div>
					<div className={'col'}>
						<input type = 'text'  placeholder = 'Nazwisko'  value = { this.props.contact.lastName } className = {'form-control'} />
					</div>
				</div>
				<div className={'form-group contactForm__item'}>
						<input type = 'email'  placeholder = 'Email'  value = { this.props.contact.email } className = {'form-control'} />
				</div>
				<button className= {'btn btn-primary'}  type = {'submit'}> Dodaj kontakt < /button>
			</form>
		)
	},
});
