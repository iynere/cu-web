import React from 'react'
import Modal from 'react-modal'
import './Contact.css'

export const Contact = props => (
  <div>
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={0}
      contentLabel='Modal'
      style={props.style}
    >
      <p className="Contact">For show + release inquiries, and general love letters, please write:</p>
      <p className="Contact"><a href='mailto:chokeduppunx@gmail.com'>chokeduppunx@gmail.com</a><br /><br />Choked Up<br />PO Box 20229<br /> NY, NY 10009-9991</p>
    </Modal>
  </div>
)
