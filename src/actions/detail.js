import * as actionTypes from '@/constaints'
import { getTopicDetail } from '@/api/index'

export const updateDetail = () => ({
  type: actionTypes.UPDATE_DETAIL
})

export const updateDetailSuccess = (data) => ({
  type: actionTypes.UPDATE_DETAIL_SUCCESS,
  data
})

export const updateDetailError = () => ({
  type: actionTypes.UPDATE_DETAIL_ERROR
})

export const getDetailData = (id) => {
  return (dispatch) => {
    dispatch(updateDetail())
    getTopicDetail(id).then(res => {
      dispatch(updateDetailSuccess(res.data))
    }).catch(() => {
      dispatch(updateDetailError())
    })
  }
}