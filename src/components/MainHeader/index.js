import React, { Component } from 'react'
import { Icon, Dropdown, Button, Row, Col, Divider } from 'antd'
import { Link } from 'react-router-dom'
import logo from '@/assets/img/logo.svg'
import Nav from './Nav'
import './style.less'

export default class MainHeader extends Component {
  render() {
    return (
      <Row className="wrap" >
        <Col md={6} xs={24} className="logo">
          <Link  to="/"><img src={logo} width="120" alt="logo"/></Link>
        </Col>
        <Col md={18} xs={0}>
          <Divider type="vertical" className="divider"/>
          <Nav mode="horizontal" theme="dark"/>
        </Col>
        <Col md={0} xs={24} className="drop-container">
          <Dropdown
            placement="bottomRight"
            overlay={
              <Nav mode="vertical"/>
            }
            trigger={['click', 'touchend']}
          >
            <Button><Icon type="bars" /></Button>
          </Dropdown>
        </Col>
      </Row>
    )
  }
}
