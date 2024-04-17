import { useState, useEffect } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);
  const [send, setSend] = useState(false);

  useEffect(() => {
    setErrors(validateForm(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const selectedSolutionId = parseInt(value);
      const updatedSolutions = checked
        ? [...form.solutions, selectedSolutionId]
        : form.solutions.filter((id) => id !== selectedSolutionId);

      setForm({
        ...form,
        solutions: updatedSolutions,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    if (Object.keys(errors).length === 0) {
      setResponse(true);
    } else {
      return;
    }
  };

  return {
    form,
    setForm,
    errors,
    response,
    send,
    handleChange,
    handleSubmit,
  };
};
