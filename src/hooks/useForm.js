//HOOKS
import { useCallback, useState } from "react";

const mapFields = (fields) => {
  let allFields = {};
  Object.entries(fields).forEach((field) => {
    allFields[field[0]] = field[1];
  });

  return allFields;
};

export const useForm = (fields) => {
  const [state, setState] = useState(() => mapFields(fields));
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  }, []);

  const isValid = (selector, callback, message) => {
    if (callback(state[selector]) === false) {
      setErrors((prev) => ({ ...prev, [selector]: message }));
      return false;
    }
  };

  const validations = {
    register: isValid,
    errors: errors,
  };

  const onSubmit = (event, submitFunction, validationsCallback) => {
    event.preventDefault();
    const canSubmit = validationsCallback();
    if (canSubmit.some((validation) => validation === false)) return;
    submitFunction(event);
  };

  return [state, handleChange, onSubmit, validations];
};
