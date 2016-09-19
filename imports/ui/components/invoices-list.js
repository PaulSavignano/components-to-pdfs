import React from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap'

export const InvoicesList = ({ invoices }) => {
  console.log(invoices)
  return (
    invoices.length > 0 ? <ListGroup className="invoices-list">
      {invoices.map((invoice) => {
        const url = `/invoices/${invoice._id}`
        return (
          <ListGroupItem key={ invoice._id }>
            { invoice.title }
            <Link to={url}>Invoice: {invoice._id}</Link>
          </ListGroupItem>
        )
      })}
    </ListGroup> :
    <Alert bsStyle="warning">No invoices yet.</Alert>
  )
}

InvoicesList.propTypes = {
  invoices: React.PropTypes.array,
}
