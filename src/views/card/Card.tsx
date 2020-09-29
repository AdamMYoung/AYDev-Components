import React from 'react';
import { Card as BSCard, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { CardList } from './CardList';
import { CardButtonRow } from './CardButtonRow';

interface RoundedCardProps {
  interactable?: boolean;
  minHeight: string;
}

export const RoundedCard = styled(BSCard)<RoundedCardProps>`
  height: 100%;
  width: 100%;
  padding: 18px;
  border-radius: 16px;
  min-height: ${(props) => (props.minHeight ? props.minHeight : '600px')};
  transition: background-color 0.2s;
  box-shadow: ${(props) => (props.interactable ? '0px 0px 10px lightgray' : '0px 0px 2px lightgray')};

  @media (max-width: 768px) {
    height: auto;
    min-height: auto;
  }

  &:hover {
    background-color: ${(props) => (props.interactable ? '#ebebeb' : 'white')};
    cursor: ${(props) => (props.interactable ? 'pointer' : 'auto')};
  }
`;

type Props = {
  onClick?: () => void;
  interactable?: boolean;
  children?: React.ReactNode;
  minHeight?: string;
};

const CardBody = (props: { children?: React.ReactNode }) => {
  return (
    <Col xs={12} className='mt-2 d-flex'>
      {props.children}
    </Col>
  );
};

export const Card = (props: Props) => {
  const { children, onClick, ...rest } = props;

  return (
    <RoundedCard className='p-2' {...rest}>
      <Container fluid className='h-auto h-sm-100'>
        <Row className='h-auto h-sm-100'>{children}</Row>
      </Container>
    </RoundedCard>
  );
};

Card.Picture = CardImage;
Card.Title = CardTitle;
Card.List = CardList;
Card.Body = CardBody;
Card.ButtonRow = CardButtonRow;
