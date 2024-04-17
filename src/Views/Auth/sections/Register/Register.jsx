import React, { useEffect } from "react";
import style from "../../styles/register.module.css";
import { useForm } from "../../../../Hooks/useForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function Register({ changeView }) {
  const initialForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    identity: "",
  };

  const validateForm = (form) => {
    let errors = {};
    let regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (form.name === "") {
      errors.name = "Campo vacío";
    }

    if (form.lastname === "") {
      errors.lastname = "Campo vacío";
    }

    if (form.email === "") {
      errors.email = "Campo vacío";
    } else if (!regexEmail.test(form.email)) {
      errors.email = "Ingresa un email correcto";
    }

    if (form.password === "") {
      errors.password = "Campo vacío";
    }

    if (form.identity === "") {
      errors.identity = "Campo vacío";
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
        <h2>Registrate</h2>
        <div>
          <p>y sé parte del viaje</p>
        </div>
      </div>
      <RegisterForm
        form={form}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        changeView={changeView}
      />
    </div>
  );
}
