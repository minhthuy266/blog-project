import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core'
import Post from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {postsState$} from '../../redux/selectors'

const PostList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(postsState$)
  console.log('Post list', posts)

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch])

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PostList
