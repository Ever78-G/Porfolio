import { Link } from "lucide-react";
import style_contact from "@/styles/contact.module.css"
import {dataContact} from "../../data"
import ContactForm from "./contactform";

const Contact = () => {
    return (
      <div className={style_contact.contact_container} id="contact">
        <div className={style_contact.items_column}>
          {dataContact.map((data) => (
            <div key={data.id} className={style_contact.items_contact}>

              {data.icon}
              <p style={{margin:"0px"}}>
                {data.title}
                <br />
                {data.subtitle}
                <br />
                <a href={data.link} target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
                </p>
            </div>
          ))}
        </div>
  
        <div className={style_contact.form_contact}>
          <ContactForm />
        </div>
      </div>
    );
  };
  
  export default Contact;
  
  