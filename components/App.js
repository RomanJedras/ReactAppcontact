
const contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jan.nowak@example.com',
		is_new: true
	},
	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Kowalski',
		email: 'adam.kowalski@example.com',
		is_new: false
	},
	{
		id: 3,
		firstName: 'Zbigniew',
		lastName: 'Koziol',
		email: 'zbigniew.koziol@example.com',
		is_new: false
	}
];

const contactForm = {
	firstName: '',
	lastName: '',
	email: '',
	is_new: false
};



const App = React.createClass({
	render: function() {
		return (
		<div className={'app'}>
			<ContactForm contact = {contactForm}/>
			<Contacts items = { contacts}/>
		</div>
		);
	}
});