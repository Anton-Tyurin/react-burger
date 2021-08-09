function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password: string) {
  return password.length > 5;
}
function validateName(name: string) {
  return name.length > 2;
}

export function getValidatedFields(fields: {name: string, password: string, email: string}) {
  const name = validateName(fields.name);
  const password = validatePassword(fields.password);
  const email = validateEmail(fields.email);
  return {
    ...(name && { name: fields.name }),
    ...(password && { password: fields.password }),
    ...(email && { email: fields.email }),
  };
}
