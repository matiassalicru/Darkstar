import { useState } from "react"

const initialState = {
  user_name: "",
  user_email: "",
  user_phone: "",
  user_pedido: "",
  user_provincia: "",
  user_total: "",
  user_pago: "",
};

export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
