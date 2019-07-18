import React from 'react'
import Modal from 'react-modal'
import Iframe from 'react-iframe'

export const News = props => (
  <div>
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={0}
      contentLabel='Modal'
      style={props.style}
    >
      <Iframe url='https://www.instagram.com/chokedupnyc'
        width='100%'
        height='100%'
        sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation'>
      </Iframe>
    </Modal>
  </div>
)
