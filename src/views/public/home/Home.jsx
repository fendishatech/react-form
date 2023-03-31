import { useState } from "react";
import FormInput from "../../components/FormInput";

const Home = () => {
  // STATES
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // INPUTS
  const formInputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address Format!",
      label: "Email",
      pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`,
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  // Events
  const handleChange = (e) => {
    const { name, value, validity } = e.target;

    setValues({ ...values, [name]: value });
    const val = { ...values, [name]: validity.valid };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validator function ?
    console.log(`This is the object version`, values);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-600 text-4xl font-semibold">Hello React Form</h1>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 mt-5 mb-5 p-4 flex flex-col gap-3"
        action=""
      >
        {formInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}

        <button className="bg-blue-400 py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
