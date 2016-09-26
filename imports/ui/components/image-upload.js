import React, { Component } from 'react'


export class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {file: '',imagePreviewUrl: ''}
  }

  handleImageClick(event) {
    event.preventDefault()
    const imageInput = this.refs.fileInput
    imageInput.click()
  }

  handleImageUpload(event) {
    event.preventDefault()
    let reader = new FileReader()
    let file = event.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />)
    } else {
      $imagePreview = (
        <div><img src="/Paul-profile-google.jpg"/></div>
      )
    }

    return (
      <div className="preview-container">
        <div className="image-preview" onClick={ this.handleImageClick.bind(this)}>
          {$imagePreview}
        </div>
        <input className="hidden" type="file" ref="fileInput" onChange={ this.handleImageUpload.bind(this)} />
      </div>
    )
  }
}
