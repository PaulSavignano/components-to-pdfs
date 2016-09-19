import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { AddInvoice } from '../components/add-invoice'
import InvoicesList from '../containers/invoices-list'

export const Invoices = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Invoices</h4>
      <AddInvoice />
      <InvoicesList />
    </Col>
  </Row>
)
