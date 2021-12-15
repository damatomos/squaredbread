import React from 'react';
import Title from '../../components/Title/Title.component';

import styles from './Contact.module.css';

// Images
import EmailSVG from './../../assets/email.svg?component';

// Components
import Input from '../../components/Form/Input/Input.component';
import TextArea from '../../components/Form/TextArea/TextArea.component';
import Button from '../../components/Form/Button/Button.component';

function Contact() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({name, email, subject, message});
  }

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={styles.content}>
        <Title>Contato</Title>
        <EmailSVG/>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="text" id="name" value={name} setValue={setName}>Seu nome</Input>
          <Input type="email" id="email" value={email} setValue={setEmail}>Seu e-mail</Input>
          <Input type="text" id="subject" value={subject} setValue={setSubject}>Assunto</Input>
          <TextArea id="message" value={message} setValue={setMessage}>Sua mensagem</TextArea>
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;