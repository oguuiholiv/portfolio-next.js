import React, { useState } from "react";
import * as S from "./styles";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <S.ContactContainer>
      <div className="cta">
        <h2 className="title">Gostou do que viu por aqui?</h2>
        <p className="subtitle">Entre em contato para trabalharmos juntos</p>
      </div>
      <div className="form-control">
        <form>
          <input
            type="text"
            id="name"
            name="name"
            className="input-form"
            placeholder="Digite seu nome..."
          />
          <input
            type="email"
            id="email"
            name="email"
            className="input-form"
            placeholder="Digite seu melho e-mail..."
          />
          <textarea
            name="message"
            id="message"
            className="textarea-form"
            placeholder="Deixe uma mensagem para mim..."
            cols={30}
            rows={10}
          ></textarea>
          <input type="submit" value="ENVIAR" className="submit-form" />
        </form>
      </div>
    </S.ContactContainer>
  );
};

export default Contact;
