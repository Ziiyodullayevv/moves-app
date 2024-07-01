import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const history = useHistory();

  // Login:
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.emiratesacademy.uz/api/Auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        success();
        const result = await response.json();
        localStorage.setItem("token", result?.accessToken);
        localStorage.setItem("user", JSON.stringify(result?.user));
        history.push("/");
        window.location.reload();
      } else {
        error();
        console.error("Xatolik yuz berdi:", response.statusText);
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  // Error Message:

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Gmail yoki parol xato kiritilgan!",
    });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Muvaffaqiyatli tizimga kirildi!",
    });
  };

  return (
    <>
      {contextHolder}
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Sign in</h3>
                    <Form className="mt-4" onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Control
                          type="email"
                          className="form-control mb-0"
                          placeholder="Enter email"
                          name="email"
                          required
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="password"
                          className="form-control mb-0"
                          placeholder="Password"
                          required
                          name="password"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <div className="sign-info">
                        <Button
                          type="submit"
                          className="btn btn-hover btn-primary1"
                        >
                          Sign in
                        </Button>
                        <div className="custom-control custom-checkbox d-inline-block">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
