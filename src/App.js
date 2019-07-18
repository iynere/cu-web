import React, {Component} from 'react'
import {Bio} from './Bio'
import {Contact} from './Contact'
import {News} from './News'
import band from './cu-logo.jpg'
import ReactModal from 'react-modal'
import './App.css'

ReactModal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0)'
  },
  content: {
    position: 'absolute',
    top: '6vw',
    left: '6vw',
    right: '6vw',
    bottom: '6vw',
    border: '0',
    background: 'rgba(255,255,255,.975)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0',
    outline: 'none',
    padding: '3vw',
    textAlign: 'center'
  }
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bioOpen: false,
      contactOpen: false,
      linksOpen: false,
      newsOpen: false,
      showsOpen: false
    }

    this.handleBioOpen = this.handleBioOpen.bind(this)
    this.handleBioClose = this.handleBioClose.bind(this)

    this.handleContactOpen = this.handleContactOpen.bind(this)
    this.handleContactClose = this.handleContactClose.bind(this)

    this.handleLinksOpen = this.handleLinksOpen.bind(this)
    this.handleLinksClose = this.handleLinksClose.bind(this)

    this.handleNewsOpen = this.handleNewsOpen.bind(this)
    this.handleNewsClose = this.handleNewsClose.bind(this)

    this.handleShowsOpen = this.handleShowsOpen.bind(this)
    this.handleShowsClose = this.handleShowsClose.bind(this)
  }

  handleBioOpen(event) {
    this.setState({
      bioOpen: true
    })
    console.log("open bio")
  }

  handleBioClose(event) {
    this.setState({
      bioOpen: false
    })
  }

  handleContactOpen(event) {
    this.setState({
      contactOpen: true
    })
    console.log("open contact")
  }

  handleContactClose(event) {
    this.setState({
      contactOpen: false
    })
  }

  handleLinksOpen(event) {
    this.setState({
      linksOpen: true
    })
    console.log("open links")
  }

  handleLinksClose(event) {
    this.setState({
      linksOpen: false
    })
  }

  handleNewsOpen(event) {
    this.setState({
      newsOpen: true
    })
    console.log("open news")
  }

  handleNewsClose(event) {
    this.setState({
      newsOpen: false
    })
  }

  handleShowsOpen(event) {
    this.setState({
      showsOpen: true
    })
    console.log("open shows")
  }

  handleShowsClose(event) {
    this.setState({
      showsOpen: false
    })
  }

  render() {

    ReactModal.setAppElement('#root')

    return (
      <div className="App">
        <header className="App-header">
          <img src={band} className="App-logo" alt="Choked Up" />
          <nav className="Menu">
            <h4 className="Link">
              <span onClick={this.handleBioOpen}>
                Bio
              </span>
              <ReactModal
                isOpen={this.state.bioOpen}
                onRequestClose={this.handleBioClose}
              >
              </ReactModal>
            </h4>

            <h4 className="Link">
              <span onClick={this.handleNewsOpen}>
                News
              </span>
              <News
                isOpen={this.state.newsOpen}
                onRequestClose={this.handleNewsClose}
              >
              </News>
            </h4>

            <h4 className="Link">
              <span onClick={this.handleContactOpen}>
                Contact
              </span>
              <Contact
                isOpen={this.state.contactOpen}
                onRequestClose={this.handleContactClose}
              >
              </Contact>
            </h4>

            <h4 className="Link">
              <span onClick={this.handleLinksOpen}>
                Links
              </span>
              <ReactModal
                isOpen={this.state.linksOpen}
                onRequestClose={this.handleLinksClose}
              >
              </ReactModal>
            </h4>

            <h4 className="Link">
              <span onClick={this.handleShowsOpen}>
                Shows
              </span>
              <ReactModal
                isOpen={this.state.showsOpen}
                onRequestClose={this.handleShowsClose}
              >
              </ReactModal>
            </h4>
          </nav>
        </header>

        <Bio
          isOpen={this.state.bioOpen}
          onRequestClose={this.handleBioClose}
          style={this.state.modalStyle}
        />

      </div>
    )
  }
}

export default App
