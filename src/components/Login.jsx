import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const userInformation = [
  {
    password: "1234567Abc.",
    email: "example@mail.com",
    id: "1",
  },

  {
    password: "159874Abc?",
    email: "hello@mail.com",
    id: "1",
  },
];

const errorMessages = {
  email: "Please enter a valid email address",
  password:
    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === "checkbox" ? event.target.checked : value;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    validate();
  }, [form]);

  function validate() {
    const newErrors = {};

    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^0-9A-Za-z]).{8,}$/;

    if (!form.email || !mailRegex.test(form.email)) {
      newErrors.email = errorMessages.email;
    }

    if (!form.password || !passRegex.test(form.password)) {
      newErrors.password = errorMessages.password;
    }

    if (!form.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      const matchedUser = userInformation.find(
        (item) => item.password === form.password && item.email === form.email
      );

      if (matchedUser) {
        setForm(initialForm);
        navigate("/success");
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form-with-border">
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
          invalid={errors.email ? true : false}
        />
        {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
          value={form.password}
          invalid={errors.password ? true : false}
        />
        {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
      </FormGroup>
      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          checked={form.terms}
          type="checkbox"
          onChange={handleChange}
          invalid={errors.terms ? true : false}
        />{" "}
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
        {errors.terms && <FormFeedback>{errors.terms}</FormFeedback>}
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button type="submit" color="primary" disabled={!isValid}>
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}
