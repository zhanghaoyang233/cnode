import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Avatar } from 'antd'

const ReplyList = (props) => {
  const { replyList, replyCount, loading } = props

  return (
    <Card
      title={replyCount + ' 条回复'}
      loading={loading}
      type="inner">
      <List
        dataSource={replyList}
        itemLayout="vertical"
        className="reply-list"
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={item.ups.length > 0 ? <span>有 {item.ups.length} 人觉得这个回复很赞</span> : '' }>
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              description={<div>
                <Link to={'/user/' + item.author.loginname }>{item.author.loginname}</Link>
                <time style={{marginLeft: '10px'}}>发表于：{item.create_at.split('T')[0]}</time></div>}/>
            <div dangerouslySetInnerHTML={{__html: item.content}}></div>
          </List.Item>
        )}></List>
    </Card>
  )
}

export default ReplyList