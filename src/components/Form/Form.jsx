import React from "react";
import style from "./Form.module.css";
import validation from "./Validation.jsx";

const Form = (props) => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email:</label>
        <input
          placeholder="Email..."
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p className={style.error}>{errors.email ? errors.email : null}</p>

        <label htmlFor="password">Password</label>
        <input
          placeholder="Password..."
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={style.error}>
          {errors.password ? errors.password : null}
        </p>

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Form;
