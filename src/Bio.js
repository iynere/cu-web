import React from 'react'
import Modal from 'react-modal'
import './Bio.css'

export const Bio = props => (
  <div>
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={0}
      contentLabel='Modal'
      style={props.style}
    >
      <p className="Bio">Choked Up are a pop-punk telenovela from New York City. They sing in english and español about crushing in the dystopia and reclaiming your brain and body from trauma. Fronted by veteran punk and giant Green Day fan, Cristy C. Road (Guitar,Vocals), with emo and metal aficionados Rachel Alicea (Guitar) and Wes Ruiz (Drums) + Rose Bomberg (Bass) who really likes the B-52’s— they have cultivated a vein of their beloved sub-genre that honors their souls and shits on the latest trend.</p>
      <p className="Bio">Choked Up released a 4-song EP in 2018 on Get Better Records and just finished completed recording a full length with Mass Giorgini at the Sonic Iguana Studios. They are either on tour, or finding themselves to a Cardi B song under an overpass near you.</p>
    </Modal>
  </div>
)
