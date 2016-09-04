import React from 'react'
import InlineCss from 'react-inline-css'
import { Button, ListGroupItem } from 'react-bootstrap'
import { removeDocument } from '../../api/documents/methods'

const handleRemoveDocument = (event) => {
  event.preventDefault()
  const documentId = event.target.getAttribute('data-id')
  removeDocument.call({
    _id: documentId,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Document removed.', 'success')
    }
  })
}

export const Document = ({ document }) => (
  <InlineCss stylesheet={`
    .Document { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; }
    @media print {
      .Document { display: block; border: 1px solid blue; padding: 20px; }
      .btn { display: none }
      hr { display: none }
      h3 { font-size: 28px; margin-top: 0px; margin-bottom: 0px; }
      p { font-size: 18px; margin-top: 10px; margin-bottom: 0px; }
    }
  `}>
    <ListGroupItem className="Document">
      <Button onClick={ handleDownloadPDF } data-id={ document._id } bsStyle="success">Download</Button>
      <Button onClick={ handleRemoveDocument } data-id={ document._id } bsStyle="danger">Remove</Button>
      <hr/>
      <h3>{ document.title }</h3>
      <p>{ document.body }</p>
    </ListGroupItem>
  </InlineCss>
)

Document.propTypes = {
  document: React.PropTypes.object.isRequired,
}
