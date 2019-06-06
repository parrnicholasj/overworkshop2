import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton() {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <Button as="a" href="http://localhost:3001/auth/google" variant="light">
          Login with Google +
        </Button>
      </div>
    </div>
  );
}

export default LoginButton;
