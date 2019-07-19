import React from 'react'
import Modal from 'react-modal'
import ReactScript from 'react-dependent-script'
import './Shows.css'

export const Shows = props => (
  <div>
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={0}
      contentLabel='Modal'
      style={props.style}
    >
      <ReactScript scripts={['//widget.songkick.com/9148829/widget.js']}>
        <p className="Shows"><a href='https://www.songkick.com/artists/9148829'>Choked Up tour dates</a></p>
      </ReactScript>
    </Modal>
  </div>
)
