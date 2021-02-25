import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar } from 'antd'
import TextTag from 'components/TextTag'

const TextDetail = (props) => {
  const { data, loading } = props

  const title = (
    <div className="header">
      <h1>{data.title}</h1>
      <div>
        <TextTag data={data} />
        <Avatar src={data.author.avatar_url} style={{marginRight: '10px'}}/>
        <Link to={"/user/" + data.author.loginname } style={{marginRight: '10px'}}>{data.author.loginname}</Link>
        <time style={{color: '#999', fontWeight: 'normal'}}>发表于：{data.create_at.split('T')[0]}</time>
      </div>
    </div>
  )
  return (
    <Card title={title} loading={loading} className="detail">
      <div dangerouslySetInnerHTML={{__html: data.content}}></div>
    </Card>
  )
}

export default TextDetail