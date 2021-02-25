import React from 'react'
import { Tag } from 'antd'
import topicType from '@/assets/js/topicType'

const getTab = (data) => {
  const tab = data.top ? 'top' : data.good ? 'good' :  data.tab
  return topicType.filter(item => item.key === tab)[0]
}

const TextTag = (props) => {
  const tab = getTab(props.data) || 'share'
  return (
    <Tag color={tab.color}>{tab.txt}</Tag>
  )
}

export default TextTag
