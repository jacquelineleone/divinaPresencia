import React from "react";
import style from "../../styles/register.module.css";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import PasswordInput from "../../../../Components/Inputs/PasswordInput/PasswordInput";

export default function RegisterForm({
  form,
  errors,
  handleChange,
  handleSubmit,
  changeView,
}) {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <section className={style.section}>
        <label>Nombre(s)</label>
        <FormInput
          inputName={"name"}
          inputValue={form.name}
          inputPlaceholder={""}
          onChangeFunction={handleChange}
        />
      </section>
      <section className={style.section}>
        <label>Apellido(s)</label>
        <FormInput
          inputName={"name"}
          inputValue={form.name}
          inputPlaceholder={""}
          onChangeFunction={handleChange}
        />
      </section>
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
      <section className={style.section}>
        <label>N° Identificación</label>
        <FormInput
          inputName={"identity"}
          inputValue={form.identity}
          inputPlaceholder={""}
          onChangeFunction={handleChange}
        />
      </section>
      <div className={style.buttonContainer}>
        <button onClick={handleSubmit} className={style.button}>
          Registrate
        </button>
        <div className={style.linkContainer} onClick={changeView}>
          <p>
            ¿Ya tienes cuenta? <b>Ingresa aquí.</b>
          </p>
        </div>
      </div>
    </form>
  );
}
