import React from "react";
import Contact from './Contact'


class Contacts extends React.Component {
	
	render() {
		const contacts = this.props.data
		return (
			<div className="container" data-testid="contacts">
          		<section className="contacts">
					<Contact data={{
							id: 0,
							avatar:'',
							name:'Nome',
							phone: 'Telefone',
							country: 'País',
							admissionDate: 'Admissão',
							company: 'Empresa',
							department: 'Departamento'
					}} />
					
					{contacts && contacts.map((contact) => <Contact data={contact} key={contact.id}/>)}				
         		 </section>
        	</div>
		);
	}
}

export default Contacts