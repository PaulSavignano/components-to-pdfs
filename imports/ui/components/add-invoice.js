import React from 'react'
import { browserHistory } from 'react-router'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertInvoice } from '../../api/invoices/methods'

const handleInsertInvoice = (event) => {
  event.preventDefault()
  const title = document.querySelector('[name="title"]')
  const body = document.querySelector('[name="body"]')
  if (title.value.trim() !== '' && body.value.trim() !== '') {
    insertInvoice.call({
      title: title.value,
      body: body.value,
    }, (error, result) => {
      console.log(result)
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        browserHistory.push(`/invoices/${result}`)
      }
    })
  } else {
    Bert.alert('Both and title and body are required.', 'danger')
  }
}

export const AddInvoice = () => (
  <form onSubmit={ handleInsertInvoice } className="AddInvoice">
    <FormGroup>
      <FormControl
        name="title"
        type="text"
        placeholder="Type an invoice title."
      />
    </FormGroup>
    <FormGroup>
      <FormControl
        name="body"
        componentClass="textarea"
        placeholder="Type an invoice body."
      />
    </FormGroup>
    <Button type="submit" bsStyle="success">Add Invoice</Button>
  </form>
)
