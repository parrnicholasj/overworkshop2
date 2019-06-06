import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton() {
  return (
    <Button
      as="a"
      href="http://localhost:3001/auth/google"
      variant='danger'
    >
      Login with google +
    </Button>
  )
}

export default LoginButton;