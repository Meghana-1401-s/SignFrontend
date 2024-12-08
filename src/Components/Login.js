import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function Login() {
  return (
    <Container
      fluid
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Gesture (Video or Logo) */}
      <Row className="mb-4" style={{ textAlign: "center" }}>
        <Col>
          <video
            src="./Videos/welcome.mp4"
            alt="Welcome Gesture"
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              borderRadius: "20px",
            }}
            autoPlay
            loop
            muted
          />
        </Col>
      </Row>

      {/* Buttons Section */}
      <Row style={{ width: "100%", maxWidth: "400px" }}>
        <Col xs={6} className="mb-3">
          <Button
            variant="success"
            size="lg"
            style={{
              width: "100%",
              padding: "10px",
              fontWeight: "bold",
            }}
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </Button>
        </Col>
        <Col xs={6} className="mb-3">
          <Button
            variant="warning"
            size="lg"
            style={{
              width: "100%",
              padding: "10px",
              fontWeight: "bold",
            }}
            onClick={() => (window.location.href = "/register")}
          >
            Signup
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
