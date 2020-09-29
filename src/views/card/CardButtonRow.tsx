import React from 'react';
import { Button, Col } from 'react-bootstrap';

type Props = {
  children: React.ReactNode;
};

type CardProps = React.ComponentPropsWithoutRef<Button>;

const CardButton = (props: CardProps) => {
  const { children, variant, href, ...rest } = props;

  return (
    <Button style={{ height: 48 }} className='m-0 mx-1' variant='outline-dark' {...rest}>
      {children}
    </Button>
  );
};

export const CardButtonRow = (props: Props) => {
  return (
    <Col xs={12} className='mt-4 d-flex justify-content-center'>
      {props.children}
    </Col>
  );
};

CardButtonRow.Button = CardButton;
