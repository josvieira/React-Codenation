import React from 'react';
import dayjs from 'dayjs'

class Contact extends React.Component {
  render() {
    const contacts = this.props.data;
    return (
      <article className="contact" data-testid = "contact">
        <span className="contact__avatar">
          <img className="contact__avatar" data-testid = "contact-avatar" 
                                            src={contacts.avatar} 
                                            alt ={contacts.name}/>
        </span> 
        <span className="contact__data" data-testid = "contact-name">{contacts.name}</span>
        <span className="contact__data" data-testid = "contact-phone">{contacts.phone}</span>
        <span className="contact__data" data-testid = "contact-country">{contacts.country}</span>
        <span className="contact__data" data-testid = "contact-date">
        {contacts.admissionDate === "Admissão" ? "Admissão" : dayjs(contacts.admissionDate).format("DD/MM/YYYY")}</span>
        <span className="contact__data" data-testid = "contact-company">{contacts.company}</span>
        <span className="contact__data" data-testid = "contact-department">{contacts.department}</span>
    </article>);
  }
}

export default Contact;
