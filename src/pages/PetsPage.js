import React from 'react';
import {Col, Layout} from 'antd';
import Pets from '../containers/Pets';

class PetsPage extends React.Component {
  render() {
    return (
        <Layout>
          <Col span={18} offset={3}>
            <Pets style={{backgroundColor: 'white'}}/>
          </Col>
        </Layout>
    );
  }
}

export default PetsPage;
