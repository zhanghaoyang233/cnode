import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Row, Col } from 'antd'
import UserList from './UserList'
import { getUserDetail } from '@/actions/user'
import './style.less'

export class User extends Component {

  componentDidMount() {
    this.props.getUserDetailDispatch(this.props.match.params.loginname)
  }

  shouldComponentUpdate(nextProps) {
    const loginname = this.props.match.params.loginname
    const nextLoginname = nextProps.match.params.loginname
    if(loginname !== nextLoginname) {
      this.props.getUserDetailDispatch(nextLoginname)
      return false
    } else
    return true
  }

  render() {
    const { data, loading } = this.props
    const { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = data

    return (
      <div className="wrap user-wrap">
        <div className="user-info">
          <Avatar src={avatar_url} size={100} className="avatar" />
          <Row className="info">
            <Col md={8}>用户名：<span>{loginname}</span></Col>
            <Col md={8}>积分：<span>{score}</span></Col>
            <Col md={8}>注册时间：<time>{create_at.split('T')[0]}</time></Col>
          </Row>
        </div>
        <UserList loading={loading} title="最近创建的话题" data={recent_topics} />
        <UserList loading={loading} title="最近回复的话题" data={recent_replies} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, loading } = state.user
  return {
    data,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetailDispatch: (loginname) => {
      dispatch(getUserDetail(loginname))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)
