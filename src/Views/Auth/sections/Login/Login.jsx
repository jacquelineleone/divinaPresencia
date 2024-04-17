import React, { useEffect } from "react";
import style from "../../styles/login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useForm } from "../../../../Hooks/useForm";

export default function Login({ changeView }) {
  const initialForm = {
    email: "",
    password: "",
  };

  const validateForm = (form) => {
    let errors = {};
    let regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (form.email === "") {
      errors.email = "Campo vacío";
    } else if (!regexEmail.test(form.email)) {
      errors.email = "Ingresa un email correcto";
    }

    if (form.password === "") {
      errors.password = "Campo vacío";
    }

    return errors;
  };

  const { form, errors, response, send, handleChange, handleSubmit } = useForm(
    initialForm,
    validateForm
  );

  useEffect(() => {
    if (response) {
      // manejamos el caso de exito
    }
  }, [response, form]);

  return (
    <div className={style.generalContainer}>
      <div className={style.container}>
        <div>
          <p>Para disfrutar del viaje,</p>
        </div>
        <h2>Inicia sesión</h2>
      </div>
      <LoginForm
        form={form}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        changeView={changeView}
      />
    </div>
  );
}
