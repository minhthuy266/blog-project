import {Modal} from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import {modalState$} from '../../redux/selectors'

const CreateModal = () => {
  const {isShow} = useSelector(modalState$)

  const body = <h1>This is body modal</h1>

  return (
    <div>
      <Modal open={isShow}>{body}</Modal>
    </div>
  )
}

export default CreateModal
