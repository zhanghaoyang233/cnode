import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import TextTag from 'components/TextTag'
import { getTopicList } from '@/actions/list'

class TopicList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      limit: 10
    }
  }

  getData(tab, page) {
    this.props.getTopicListDispatch({
      ...this.state,
      tab,
      page
    })
  }

  // 挂载后请求数据
  componentDidMount() {
    this.getData(this.props.tab, this.state.page)
  }

  // 切换 tab 时更新数据
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.tab !== nextProps.tab) {
      // 切换 tab 后回到第 1 页
      this.setState({page: 1})
      this.getData(nextProps.tab, 1)
      return false
    }
    if (this.state.page !== nextState.page) {
      this.getData(nextProps.tab, nextState.page)
    }
    return true
  }

  render() {
    const { data, loading } = this.props
    const pagination = {
      size: 'small',
      current: this.state.page,
      pageSize: this.state.limit,
      total: 1000,
      onChange: (current) => {
        this.setState({page: current})
      }
    }

    return (
      <List
        dataSource={data}
        loading={loading}
        pagination={pagination}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={['回复：' + item.reply_count, '访问：' + item.visit_count]}>
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url}/>}
              title={<Link to={"/detail/" + item.id}><TextTag data={item}/>{item.title}</Link>}
              description={
                <p>
                  <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                  <time className="time">发表于：{item.create_at.split('T')[0]}</time>
                </p>}
            ></List.Item.Meta>
          </List.Item>
        )}>
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, loading } = state.list
  return {
    data,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicListDispatch: (params) => {
      dispatch(getTopicList(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList)