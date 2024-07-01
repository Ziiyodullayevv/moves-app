import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { message } from "antd";

// rtl
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from "../../../../store/mode/rtlmode";

const mapStateToProps = (state) => {
  return {
    rtlMode: getRtlMode(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction,
    },
    dispatch,
  ),
});

const Login = (props) => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const rtlMode = sessionStorage.getItem("rtl-mode");
    if (rtlMode === null) {
      props.rtlModeAction(props.rtlMode);
    } else {
      props.rtlModeAction(rtlMode);
    }
  }, [props]); // dependencies massivini qo'shdik

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
        history.push("/"); // Redirect o'rniga history.push ishlatilmoqda
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
      <div className={`rtl-box ${show === true ? "show" : ""}`}>
        <button type="button" className="btn btn-light rtl-btn">
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              onClick={() => {
                props.rtlModeAction("ltl");
              }}
              data-value="ltr"
            >
              <Link to="#">LTR</Link>
            </li>
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="true"
              onClick={() => {
                props.rtlModeAction("rtl");
              }}
              data-value="rtl"
            >
              <Link to="#">RTL</Link>
            </li>
          </ul>
        </div>
      </div>
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
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                          autoComplete="off"
                          name="email"
                          required
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="password"
                          className="form-control mb-0"
                          id="exampleInputPassword2"
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
