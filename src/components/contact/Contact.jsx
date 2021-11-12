import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e7ubu1h",
        "template_oj6jmse",
        formRef.current,
        "user_4wGL5q9NYJgk2jQIf5mS0"
      ) //'service_e7ubu1h', 'template_oj6jmse', e.current, 'user_4wGL5q9NYJgk2jQIf5mS0')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 434 235 0928
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              shreyes@virginia.edu
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Charlottesville, Virginia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Shoot me an email and I'll contact you as soon as possible!</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="email" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <p className="thanks">
              Thank you! I'll get back to you soon </p>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
