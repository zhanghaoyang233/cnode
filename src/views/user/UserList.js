import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Avatar } from 'antd'

const UserList = (props) => {
  const { loading, title, data } = props
  return (
    <Card
      loading={loading}
      title={title}
      type="inner"
      style={{margin: '5px 0'}}>
        <List
          className="user-list"
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id} className="item">
              <Avatar src={item.author.avatar_url} />
              <Link to={'/user/' + item.author.loginname} className="name">{item.author.loginname}</Link>
              <Link to={'/detail/' + item.id} className="title">{item.title} </Link>
              <time className="time">{item.last_reply_at.split('T')[0]}</time>
            </List.Item>
          )}>
        </List>
    </Card>
  )
}

export default UserList