import React from 'react'
import {connect} from 'react-redux'
import {getImageById} from '../api'
import {imagePath, error} from '../actions'
import AddCaption from './AddCaption'

class AddCaptionContainer extends React.Component {

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    getImageById(id, (err, res) => {
      if (err) return this.props.dispatch(error(err.message))
      this.props.dispatch(imagePath(res))
    })
  }

  render () {
    return (
      <div className='add-caption-container'>
        <img src={this.props.image} className='image-add-caption' />
        <AddCaption routerProps={this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.singleImage.path
  }
}

export default connect(mapStateToProps)(AddCaptionContainer)
