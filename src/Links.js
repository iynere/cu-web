import React from 'react'
import Modal from 'react-modal'
import './Links.css'

export const Links = props => (
  <div>
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={0}
      contentLabel='Modal'
      style={props.style}
    >
      <p className="Links">
        <a href='https://chokedup.bandcamp.com/'>Bandcamp</a><br />
        <a href='https://www.facebook.com/ChokedUpNYC/'>Facebook</a><br />
        <a href='https://www.instagram.com/chokedupnyc/'>Instagram</a><br />
      </p>
    </Modal>
  </div>
)
