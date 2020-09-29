import React from 'react';
import { Col } from 'react-bootstrap';

type Props = {
  children: React.ReactNode;
};

export const CardTitle = (props: Props) => {
  return (
    <Col xs={6} sm={12} className='d-flex align-items-center justify-content-center'>
      <h1 className='h4 mt-4 '>{props.children}</h1>
    </Col>
  );
};
