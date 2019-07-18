import React from 'react'
import Modal from 'react-modal'

export const Bio = props => (
  <div>
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={0}
      contentLabel='Modal'
      style={props.style}
    >
      <span>hello</span>
    </Modal>
  </div>
)
