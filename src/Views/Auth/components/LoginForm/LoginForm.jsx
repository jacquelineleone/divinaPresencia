import React from "react";
import style from "../../styles/login.module.css";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import PasswordInput from "../../../../Components/Inputs/PasswordInput/PasswordInput";

export default function LoginForm({
  form,
  errors,
  handleChange,
  handleSubmit,
  changeView,
}) {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <section className={style.section}>
        <label>Email</label>
        <FormInput
          inputName={"email"}
          inputValue={form.email}
          inputPlaceholder={""}
          onChangeFunction={handleChange}
        />
      </section>
      <section className={style.section}>
        <label>Contraseña</label>
        <PasswordInput
          inputName={"password"}
          inputValue={form.password}
          inputPlaceholder={""}
          onChangeFunction={handleChange}
        />
      </section>
      <div className={style.buttonContainer}>
        <button onClick={handleSubmit} className={style.button}>
          Ingresar
        </button>
        <div className={style.linkContainer} onClick={changeView}>
          <p>
            ¿Aún no tienes cuenta? <b>Registrate aquí.</b>
          </p>
        </div>
      </div>
    </form>
  );
}
