import {call, put, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../apis'

function* fetchPostSaga(action) {
  const posts = yield call(api.fetchPosts)
  console.log(posts)
  yield put(actions.getPosts.getPostsSuccess(posts.data))
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
}

export default mySaga
