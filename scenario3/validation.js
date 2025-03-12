// Basic usage
const basicProps = {
    label: "Username",
    value: "",
    onChange: (value) => console.log(value)
  };
  
  // With validation
  const emailProps = {
    label: "Email",
    value: "",
    onChange: (value) => console.log(value),
    validation: (value) => {
      const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailFormatRegex.test(value) ? null : { error: 'Invalid email' };
    }
  };
  
  // With complex validation
  const passwordProps = {
    label: "Password",
    value: "",
    onChange: (value) => console.log(value),
    validation: (value) => {
      const errors = [];
      if (value.length < 8) errors.push('Too short');
      if (!/[A-Z]/.test(value)) errors.push('Need uppercase');
      if (!/[0-9]/.test(value)) errors.push('Need number');
      return errors.length ? { error: errors.join(', ') } : null;
    }
  };