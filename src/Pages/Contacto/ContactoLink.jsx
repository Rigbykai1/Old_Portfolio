import { Link } from 'react-router-dom';

const ContactoLink = (props) => {
    const { contacto, index } = props;
    return (
        <Link to={contacto.link} className={`animate-fade animate-once animate-duration-500 animate-delay-${index * 100} animate-normal`}>
            {contacto.icon}
        </Link>
    )
}

export default ContactoLink