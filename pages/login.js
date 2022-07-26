import React, { useState } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const validate = (e, name, val) => {
    switch (name) {
      case "email":
        const emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid === null) {
          setErrors({
            ...errors,
            email: "Please enter valid email Address.",
          });
        } else {
          setErrors({
            ...errors,
            email: "",
          });
        }
        break;

      case "password":
        const passwordValid = val.match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
        );
        if (passwordValid === null) {
          setErrors({
            ...errors,
            password:
              "password atleast have 8 character, special character, Lowercase & Uppercase character.",
          });
        } else {
          setErrors({
            ...errors,
            password: "",
          });
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    validate(e, name, val);

    setData((prevState) => {
      return {
        ...prevState,
        [name]: val,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.password === "" && errors.email === "") {
      let token =
        "jsdbkjabffqjqkwne&**#@axccxdcxzcczxvnw22842^#3j4nnkvcv#4m423";
      if ("Raj@1234" === data.password && "raj@gmail.com" === data.email) {
        localStorage.setItem("authToken", token);
        alert("login successfull !");
        router.push("/");
      } else {
        clearform(e);
        alert("User does not exists");
      }
    } else {
      alert("Fill required all Inputs");
    }
  };

  // clear form after submitting
  const clearform = (e) => {
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <>
      <Container>
        <Form
          className="border border-dark rounded p-5 w-lg-50"
          style={{
            border: "1px",
            margin: "15% auto",
            backgroundColor: "white",
          }}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center">Login Form</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email Address<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted s-0">
              {errors.email && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.email}
                </div>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
            <Form.Text className="text-muted s-0">
              {errors.password && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.password}
                </div>
              )}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
        </Form>
      </Container>
    </>
  );
};

export default Login;
