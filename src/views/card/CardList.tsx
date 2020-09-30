import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
  padding: 2px 8px !important;
  border: 0;
  background: transparent;

  svg {
    width: 16px !important;
    margin-right: 12px !important;
  }

  * {
    margin: 0;
  }
`;

type Props = {
  children?: React.ReactNode;
};

type EntryProps = {
  icon?: IconProp;
  children?: React.ReactNode;
};

const CardListEntry = (props: EntryProps) => {
  return (
    <ListItem>
      {props.icon && <FontAwesomeIcon className='mr-2' icon={props.icon} />}
      <p>{props.children}</p>
    </ListItem>
  );
};

export const CardList = (props: Props) => {
  return (
    <Col xs={12} className='mt-2 d-flex align-items-center'>
      <ListGroup>{props.children}</ListGroup>
    </Col>
  );
};

CardList.Entry = CardListEntry;
