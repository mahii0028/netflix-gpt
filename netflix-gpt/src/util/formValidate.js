const formValidate = (fullName, email, password, isSignIn) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!isSignIn && (!fullName || fullName.trim().length < 3)) {
    errors.fullName = "Full name must be at least 3 characters long.";
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter valid email.";
  }

  if (!password || password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }
  return errors;
};

export default formValidate;
