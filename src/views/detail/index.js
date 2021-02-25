import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextDetail from './TextDetail'
import ReplyList from './ReplyList'
import { getDetailData } from '@/actions/detail'
import './style.less'

export class Detail extends Component {

  componentDidMount() {
    const {match: { params }} = this.props
    this.props.getDetailDispatch(params.id)
  }

  render() {
    const { data, loading } = this.props

    return (
      <div className="wrap detail-wrap">
        <TextDetail data={data} loading={loading}/>
        <ReplyList replyList={data.replies} replyCount={data.reply_count} loading={loading}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, loading } = state.detail
  return {
    data,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailDispatch: (id) => {
      dispatch(getDetailData(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
