import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const Nav = (props) => {
    const { mode, theme, location } = props
    const key = location.pathname.split('/')[1]

    return (
      <Menu theme={theme} mode={mode} selectedKeys={[key]} className="nav" >
        <Menu.Item key="index">
          <Link to="/index/all">
            <Icon type="home" />首页
          </Link>
        </Menu.Item>
        <Menu.Item key="tutorial">
          <Link to="/tutorial">
            <Icon type="book" />教程
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            <Icon type="info-circle-o" />关于
          </Link>
        </Menu.Item>
      </Menu>
    )


}
export default withRouter(Nav)