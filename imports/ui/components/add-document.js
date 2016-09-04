import React from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertDocument } from '../../api/documents/methods'

export const AddDocument = () => (
  <form onSubmit={ handleInsertDocument } className="AddDocument">
    <FormGroup>
      <FormControl
        name="title"
        type="text"
        placeholder="Type a document title."
      />
    </FormGroup>
    <FormGroup>
      <FormControl
        name="body"
        componentClass="textarea"
        placeholder="Type a document body."
      />
    </FormGroup>
    <Button type="submit" bsStyle="success">Add Document</Button>
  </form>
)
