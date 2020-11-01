import React from 'react';
import { Row, Col } from 'antd';

import { Container } from './styles';

import { Wrapper } from '..';

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Row gutter={16}>
          <Col span={24} md={5} />
          <Col span={24} md={5} />
        </Row>
        <p>Copyright &copy; Revmoon. 2020-2020</p>
      </Wrapper>
    </Container>
  );
};

export default Footer;
