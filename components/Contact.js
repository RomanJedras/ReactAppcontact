const Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			<div className={'contactItem'}>
				<span className={this.props.item.is_new ? 'contactItem--active': ''}>Status : {this.props.item.is_new ? 'new': '--'}</span>
				<img className={'contactImage'} src={'https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/collection/build/ionicons/svg/ios-contact.svg'}/>
				<p className={'contactLabel'}>
					Imię: {this.props.item.firstName}
				</p>
				<p className={'contactLabel'}>
					Nazwisko: {this.props.item.lastName}
				</p>
				<a href={'mailto:' + this.props.item.email}>
					{this.props.item.email}
				</a>
			</div>
		)
	},
});



