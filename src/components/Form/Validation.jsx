export default function validation(input) {
  const errors = {};
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = new RegExp("[0-9]");

  if (!regexEmail.test(input.email)) {
    errors.email = "Debe ingresar un email válido!";
  }
  if (!input.email) {
    errors.email = "Debe ingresar un email!";
  }
  if (input.email.length > 35) {
    errors.email = "El email debe tener menos de 35 caracteres";
  }
  if (!regexPassword.test(input.password)) {
    errors.password = "Password debe tener al menos un número";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "Contraseña entre 6 y 10 caracteres";
  }
  return errors;
}
