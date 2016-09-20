import React from 'react'
import { Link } from 'react-router'
import InlineCss from 'react-inline-css'
import { PageHeader, Button, ListGroupItem } from 'react-bootstrap'
import { Meteor } from 'meteor/meteor'
import { Bert } from 'meteor/themeteorchef:bert'
import fileSaver from 'file-saver'
import { removeInvoice } from '../../api/invoices/methods'
import { updateInvoice } from '../../api/invoices/methods'
import { base64ToBlob } from '../../modules/base64-to-blob'

const handleDownloadPDF = (event) => {
  event.preventDefault()
  const { target } = event
  const invoiceId = target.getAttribute('data-id')
  target.innerHTML = '<em>Downloading...</em>'
  Meteor.call('invoices.download', { invoiceId }, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      const blob = base64ToBlob(response.base64)
      fileSaver.saveAs(blob, response.fileName)
      target.innerHTML = 'Download'
    }
  })
}

const handleUpdateInvoice = (event) => {
  event.preventDefault()
  console.log(event.target)
}

const handleRemoveInvoice = (event) => {
  event.preventDefault()
  const invoiceId = event.target.getAttribute('data-id')
  removeInvoice.call({
    _id: invoiceId,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Invoice removed.', 'success')
    }
  })
}

export const Invoice = ({ invoice }) => {
const url = `/invoices/${invoice._id}`
return (
  <InlineCss stylesheet={`
    input {
    -webkit-appearance: none; box-shadow: none !important;
    }

    .flex-container > div {
    font-family: "Helvetica Neue";
    }

    hr {
    color: #e7e7e7;
    margin-top: 28px;
    margin-bottom: 18px;
    }

    .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    align-items: top;
    }

    .flex-cell {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    min-height: auto;
    }

    .logo {
    max-width: 20rem;
    min-width: 20rem;
    }

    .description {
    max-width: 960px;
    }

    .amount-due-summary {
    margin-top: 20px;
    border: 1px solid black;
    padding: 10px 15px;
    border-radius: 8px;
    text-align: center;
    }

    .invoice-totals {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-content: center;
    align-items: top;
    }

    .invoice-total {
    max-width: 20rem;
    min-width: 20rem;
    }

    .invoice-details > div {
    margin-right: -1px;
    margin-left: -1px;
    margin-bottom: -1px;
    }

    .invoice-details > div > :first-child {
    border: 1px solid;
    border-color: #e7e7e7;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 10px 15px;
    }

    .invoice-details > div > :last-child {
    border-bottom: 1px solid;
    border-color: #e7e7e7;
    background-color: white;
    padding: 10px 15px;

    }

    .invoice-total > table {
    border-collapse: collapse;
    border: 1px solid;
    border-color: #e7e7e7;

    }

    .invoice-total > table td {
    border-bottom: 1px solid;
    border-color: #e7e7e7;
    padding: 8px;
    }

    table {
    width: 100%;
    }

    [contenteditable="true"]:hover {
    outline: -webkit-focus-ring-color auto 5px;
    }

    [contenteditable] {
    margin-right: 6px;
    }


    @media (max-widtlh: 1079px) {
    .invoice-total {
    max-width: 100%;
    }

    @media (max-width: 750px) {
    .invoice-total, .logo {
    max-width: 100%;
    }
    }


    @media print {
    .flex-container > div {
    font-family: "Helvetica Neue";
    }

    hr {
    color: #e7e7e7;
    margin-top: 28px;
    margin-bottom: 18px;
    }

    .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    align-items: top;
    }

    .flex-cell {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    min-height: auto;
    }

    .logo {
    max-width: 20rem;
    min-width: 20rem;
    }

    .description {
    max-width: 960px;
    }

    .amount-due-summary {
    margin-top: 20px;
    border: 1px solid black;
    padding: 10px 15px;
    border-radius: 8px;
    text-align: center;
    }

    .invoice-totals {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-content: center;
    align-items: top;
    }

    .invoice-total {
    max-width: 20rem;
    min-width: 20rem;
    }

    .invoice-details > div {
    margin-right: -1px;
    margin-left: -1px;
    margin-bottom: -1px;
    }

    .invoice-details > div > :first-child {
    border: 1px solid;
    border-color: #e7e7e7;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 10px 15px;
    }

    .invoice-details > div > :last-child {
    border-bottom: 1px solid;
    border-color: #e7e7e7;
    background-color: white;
    padding: 10px 15px;

    }

    .invoice-total > table {
    border-collapse: collapse;
    border: 1px solid;
    border-color: #e7e7e7;

    }

    .invoice-total > table td {
    border-bottom: 1px solid;
    border-color: #e7e7e7;
    padding: 8px;
    }

    table {
    width: 100%;
    }

    [contenteditable="true"]:hover {
    outline: -webkit-focus-ring-color auto 5px;
    }

    [contenteditable] {
    margin-right: 6px;
    }


    @media (max-widtlh: 1079px) {
    .invoice-total {
    max-width: 100%;
    }

    @media (max-width: 750px) {
    .invoice-total, .logo {
    max-width: 100%;
    }
    }




    }
  `}>
    <ListGroupItem>
      <form onSubmit={ handleUpdateInvoice }>
        <Button onClick={ handleDownloadPDF } data-id={ invoice._id } bsStyle="success">Download</Button>
        <Button type="submit" data-id={ invoice._id } bsStyle="success">Update</Button>
        <Button onClick={ handleRemoveInvoice } data-id={ invoice._id } bsStyle="danger" className="pull-right">Remove</Button>
        <hr/>

        <div className="flex-container">
          <div className="flex-cell logo">
            <div><img src="http://placehold.it/90x90"/></div>
            <p>
              Paul Savignano<br/>
              1234 Carlsbad Ct<br/>
              Carlsbad, CA 92011
            </p>
            <p>
              Phone: (760) 123-1234<br/>
              Paul.Savignano@gmail.com
            </p>
          </div>

          <div className="flex-cell logo">
            <h2>Invoice</h2>
            <table>
              <tbody>
                <tr>
                  <td>Invoice #:</td>
                  <td contentEditable="true" suppressContentEditableWarning={true} id="number">
                    { invoice.number }
                  </td>
                </tr>
                <tr>
                  <td>Invoice date:</td>
                  <td contentEditable="true" suppressContentEditableWarning={true}>10/14/2016</td>
                </tr>
                <tr>
                  <td>Terms:</td>
                  <td contentEditable="true" suppressContentEditableWarning={true}>Due on receipt</td>
                </tr>
                <tr>
                  <td>Due date:</td>
                  <td contentEditable="true" suppressContentEditableWarning={true}>10/14/2016</td>
                </tr>
              </tbody>
            </table>
            <div className="amount-due-summary">
              <div>Amount Due:</div>
              <div><strong>$1050.00</strong></div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="flex-container">
          <div className="flex-cell">
            <h3>Bill To:</h3>
            <div contentEditable="true" suppressContentEditableWarning={true}>Elliot Alderson</div>
            <div contentEditable="true" suppressContentEditableWarning={true}>1234 Robot Ln</div>
            <div contentEditable="true" suppressContentEditableWarning={true}>Robotsville, CA 92123</div>
            <br/>
            <div contentEditable="true" suppressContentEditableWarning={true}>elliot.alderson@robot.com</div>
            <div contentEditable="true" suppressContentEditableWarning={true}>(760) 123-4567</div>
          </div>
        </div>
        <br/><br/>

        <div className="flex-container invoice-details">
          <div className="flex-cell description">
            <div><strong>Description</strong></div>
            <div contentEditable="true" suppressContentEditableWarning={true}>
              Updated delivery date on Cart page and saved the date as a Cart attribute. Displayed date in order confirmation email.
            </div>
          </div>
          <div className="flex-cell hours">
            <div><strong>Hours</strong></div>
            <div contentEditable="true" suppressContentEditableWarning={true}>15</div>
          </div>
          <div className="flex-cell">
            <div><strong>Rate</strong></div>
            <div contentEditable="true" suppressContentEditableWarning={true}>$70.00</div>
          </div>
          <div className="flex-cell">
            <div><strong>Amount</strong></div>
            <div>$1050.00</div>
          </div>
        </div>


        <div className="flex-container invoice-totals">
          <div className="flex-cell invoice-total">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal:</td>
                  <td>$1050.00</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>$1050.00</td>
                </tr>
                <tr>
                  <td>Amount paid:</td>
                  <td>$1050.00</td>
                </tr>
                <tr>
                  <td>Amount due:</td>
                  <td>$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr/>

        <div className="flex-container">
          <div className="flex-cell">
            <h3>Notes:</h3>
            <p>
              Thank you for your business!<br/>
            </p>
            <p>
              elliot.alderson@robot.com<br/>
              (760) 123-4567
            </p>
          </div>
        </div>
        <h3>{ invoice.title }</h3>
        <p>{ invoice.body }</p>
      </form>
      </ListGroupItem>

    </InlineCss>
)
}

Invoice.propTypes = {
  invoice: React.PropTypes.object.isRequired,
}
