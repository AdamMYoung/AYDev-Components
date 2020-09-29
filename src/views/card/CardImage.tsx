import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const ProfileImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 75%;
  }
`;

type Props = {
  src: string;
  alt?: string;
};

export const CardImage = (props: Props) => {
  return (
    <Col xs={6} sm={12} className='mt-3 d-flex align-items-center'>
      <ProfileImage src={props.src} alt={props.alt} fluid roundedCircle />
    </Col>
  );
};
