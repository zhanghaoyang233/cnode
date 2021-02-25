import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import topicType from '@/assets/js/topicType'

const TopicMenu = (props) => {
  const { mode, tab } = props

  return (
    <Menu
      mode={mode}
      defaultSelectedKeys={[tab]}
      className="topic-menu">
      {
        topicType.map( item => {
          if(!item.isIndex) {
            return false
          }
          return (
            <Menu.Item key={item.key}>
              <Link to={'/index/' + item.key}>{item.txt}</Link>
            </Menu.Item>
          )
        })
      }
    </Menu>
  )
}

export default TopicMenu