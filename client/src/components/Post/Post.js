import {
  Card,
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'

import moment from 'moment'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'

import React from 'react'

const Post = ({post}) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>a</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardMedia image={post.attachment} title='Title' />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {post.title}
        </Typography>

        <Typography variant='body2' component='p' color='textSecondary'>
          {post.content}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton>
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
