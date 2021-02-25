import * as actionTypes from '@/constaints'
import { getUser } from '@/api/index'

export const updateUser = () => ({
  type: actionTypes.UPDATE_USER
})

export const updateUserSuccess = (data) => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  data
})

export const updateUserError = () => ({
  type: actionTypes.UPDATE_USER_ERROR
})

export const getUserDetail = (loginname) => {
  return (dispatch) => {
    dispatch(updateUser())
    getUser(loginname).then(res => {
      console.log(res)
      dispatch(updateUserSuccess(res.data))
    }).catch(() => {
      dispatch(updateUserError())
    })
  }
}