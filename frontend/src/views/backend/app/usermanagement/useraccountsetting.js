import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import user from "../../../../assets/images/user/user.jpg";

const UserAccountSetting = () => {
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <>
      <section className="m-profile setting-wrapper">
        <Container>
          <h4 className="main-title mb-4">Foydalanuvchi Malumotlari</h4>
          <Row>
            <Col lg="4" className="mb-3">
              <div className="sign-user_card text-center">
                <img
                  src={user}
                  className="rounded-circle img-fluid d-block mx-auto mb-3"
                  alt="user"
                />
                <h4 className="mb-3">{userData?.firstName}</h4>
              </div>
            </Col>
            <Col lg="8">
              <div className="sign-user_card">
                <h5 className="mb-3 pb-3 a-border">Ma'lumotlar</h5>
                <Row className="row align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">Ism</span>
                    <p className="mb-0">{userData?.firstName}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left"></Col>
                </Row>
                <Row className="align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">Familiya</span>
                    <p className="mb-0">{userData?.lastName}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left"></Col>
                </Row>
                <Row className="align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">
                      Telefon Raqam
                    </span>
                    <p className="mb-0">{userData?.phone}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left"></Col>
                </Row>
                <Row className="align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">Gmail</span>
                    <p className="mb-0">{userData?.email}</p>
                  </Col>
                  <Col md="4" className="text-md-right text-left"></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserAccountSetting;
