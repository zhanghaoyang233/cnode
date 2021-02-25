import React from 'react'
import { Card } from 'antd'

const PublicCard = (props) => {
  const { data } = props
  return (
    <div className="wrap">
      {data.map((item, index) => (
        <Card title={item.title} key={index} type="inner" style={{marginBottom: '5px'}}>
          <div dangerouslySetInnerHTML={{__html: item.content}}></div>
        </Card>
      ))}
    </div>
  )
}

export default PublicCard