import React from 'react';
import { Button, Result } from 'antd';
import { useSelector } from 'react-redux';
import { getStatus, getRegistrationError } from '../../state/registrationSlice';

export function RegistrationResult () {
// status: string, message: string
const status = useSelector(getStatus);
const message = useSelector(getRegistrationError);

  return (
    <Result
    status={ status ? "success" : "error"}
    // status="error"
    // title="Successfully Registered!"
    title={message}
    subTitle=" please check your email."
    extra={[
      <Button type="primary" key="console">
       Go
      </Button>,
      // <Button key="buy">Buy Again</Button>,
    ]}
  />
  )
}

export default RegistrationResult;
