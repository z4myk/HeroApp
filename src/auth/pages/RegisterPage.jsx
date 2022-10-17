import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../heroes/helpers/useForm";
import { startCreatingUserWithEmail } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      "El password debe tener al menos 6 caracteres",
    ],
  ],
  displayName: [
    [(value) => value.length >= 1, "El nombre es obligatorio"],
    [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"],
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formSubmited, setFormSubmited] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmail(formState));
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <div className="container mt-5 fondoLogin">
        <div className="bg-danger border">
          <h1 className="text-center text-light ">Registro</h1>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <span className="text-light">
            Ingrese su nombre<span className="text-danger"> *</span>
          </span>
          <input
            type="text"
            className="form-control w-100 mb-2"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            placeholder="nombre"
            required
          />
          <span className="text-light">
            Ingrese su email<span className="text-danger"> *</span>
          </span>
          <input
            type="email"
            className="form-control w-100 mb-2"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="ejemplo@ejemplo.com"
            required
          />
          <span className="text-light">
            Ingrese su contraseña<span className="text-danger"> *</span>
          </span>
          <input
            type="password"
            className="form-control w-100 mb-2"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="******"
            required
          />
          <button className="btn btn-danger w-100">Crear cuenta</button>
          <Link to="/auth/login" className="text-light">
            <a className="text-light">
              <b>Ya tengo una cuenta</b>
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};
