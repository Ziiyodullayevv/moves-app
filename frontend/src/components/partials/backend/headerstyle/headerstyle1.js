import React from "react";
import { Container, Row, Col, Navbar, Dropdown, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Card from "../../../../components/Card";

import CustomToggle from "../../../../components/dropdowns";

//img

import logo from "../../../../assets/images/logo.png";
import thumb1 from "../../../../assets/images/notify/thumb-1.jpg";
import thumb2 from "../../../../assets/images/notify/thumb-2.jpg";
import thumb3 from "../../../../assets/images/notify/thumb-3.jpg";
import user from "../../../../assets/icons/user.svg";

const HeaderStyle1 = (props) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <header id="main-header">
        <div className="main-header">
          <Container fluid>
            <Row>
              <Col sm="12">
                <Navbar expand="lg" className="p-0">
                  <Navbar.Toggle className="c-toggler">
                    <div className="navbar-toggler-icon">
                      <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Brand className="navbar-brand" href="/">
                    <img className="img-fluid logo" src={logo} alt="streamit" />
                  </Navbar.Brand>
                  <Dropdown className="mobile-more-menu">
                    <Dropdown.Toggle
                      to="#"
                      as={CustomToggle}
                      variant="more-toggle"
                    >
                      <i className="ri-more-line"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="more-menu">
                      <div className="navbar-right position-relative">
                        <ul className="d-flex align-items-center justify-content-end list-inline m-0">
                          <Dropdown as="li" className="nav-item m-">
                            <Dropdown.Toggle
                              href="#"
                              as={CustomToggle}
                              variant="search-toggle"
                            >
                              <i className="ri-search-line"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="search-box iq-search-bar d-search p-0 m-0 dropdown-menu-right">
                              <Form action="#" className="searchbox">
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="text search-input font-size-12"
                                    placeholder="type here to search..."
                                  />
                                  <i className="search-link ri-search-line"></i>
                                </div>
                              </Form>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown as="li" className="nav-item m-0">
                            <Dropdown.Toggle
                              href="#"
                              as={CustomToggle}
                              variant="search-toggle position-relative"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                                className="noti-svg"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                              </svg>
                              <span className="bg-danger dots"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="iq-sub-dropdown dropdown-menu dropdown-menu-right">
                              <Card className="iq-card shadow-none m-0">
                                <Card.Body className="iq-card-body">
                                  <Link to="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img
                                        src={thumb1}
                                        className="img-fluid mr-3"
                                        alt="streamit"
                                      />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">Boot Bitty</h6>
                                        <small className="font-size-12">
                                          just now
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img
                                        src={thumb2}
                                        className="img-fluid mr-3"
                                        alt="streamit"
                                      />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">
                                          The Last Breath
                                        </h6>
                                        <small className="font-size-12">
                                          15 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img
                                        src={thumb3}
                                        className="img-fluid mr-3"
                                        alt="streamit"
                                      />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">The Hero Camp</h6>
                                        <small className="font-size-12">
                                          1 hour ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </Card.Body>
                              </Card>
                            </Dropdown.Menu>
                          </Dropdown>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Navbar.Collapse></Navbar.Collapse>
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center list-inline m-0">
                      <Dropdown as="li" className="nav-item nav-icon">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          href="#"
                          variant="search-toggle device-search"
                        >
                          <i className="ri-search-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="search-box iq-search-bar d-search p-0 m-0"
                          align="right"
                        >
                          <Form action="#" className="searchbox">
                            <div className="position-relative">
                              <input
                                type="text"
                                className="text search-input font-size-12"
                                placeholder="type here to search..."
                              />
                              <i className="search-link ri-search-line"></i>
                            </div>
                          </Form>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as="li" className="nav-item">
                        <Dropdown.Toggle
                          href="#"
                          as={CustomToggle}
                          variant="search-toggle position-relative"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            className="noti-svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                          </svg>
                          <span className="bg-danger dots"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="iq-sub-dropdown"
                          align="right"
                        >
                          <Card className="shadow-none m-0">
                            <Card.Body>
                              <Link to="#" className="iq-sub-card">
                                <div className="media align-items-center">
                                  <img
                                    src={thumb1}
                                    className="img-fluid mr-3"
                                    alt="streamit"
                                  />
                                  <div className="media-body">
                                    <h6 className="mb-0 ">Boot Bitty</h6>
                                    <small className="font-size-12">
                                      {" "}
                                      just now
                                    </small>
                                  </div>
                                </div>
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <div className="media align-items-center">
                                  <img
                                    src={thumb2}
                                    className="img-fluid mr-3"
                                    alt="streamit"
                                  />
                                  <div className="media-body">
                                    <h6 className="mb-0 ">The Last Breath</h6>
                                    <small className="font-size-12">
                                      15 minutes ago
                                    </small>
                                  </div>
                                </div>
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <div className="media align-items-center">
                                  <img
                                    src={thumb3}
                                    className="img-fluid mr-3"
                                    alt="streamit"
                                  />
                                  <div className="media-body">
                                    <h6 className="mb-0 ">The Hero Camp</h6>
                                    <small className="font-size-12">
                                      1 hour ago
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </Card.Body>
                          </Card>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as="li" className="nav-item nav-icon">
                        <Dropdown.Toggle
                          href="#"
                          as={CustomToggle}
                          variant="search-toggle"
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <span style={{ color: "white", fontSize: "16px" }}>
                              {user.firstName || "Anonymous"}
                            </span>
                            <span style={{ width: "40px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </span>
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="iq-sub-dropdown iq-user-dropdown"
                          align="right"
                        >
                          <Card className="shadow-none m-0">
                            <Card.Body className="p-0 pl-3 pr-3">
                              <Link
                                to="/manage-profile"
                                className="iq-sub-card setting-dropdown"
                              >
                                {/*<div className="media align-items-center">*/}
                                {/*  <div className="right-icon">*/}
                                {/*    <i className="ri-file-user-line text-primary"></i>*/}
                                {/*  </div>*/}
                                {/*  <div className="media-body ml-3">*/}
                                {/*    <h6 className="my-0 ">Manage Profile</h6>*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                              </Link>
                              <Link
                                to="/setting"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-settings-4-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Settings</h6>
                                  </div>
                                </div>
                              </Link>
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={logout}
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-logout-circle-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Logout</h6>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};

export default HeaderStyle1;
