import { composeWithTracker } from 'react-komposer'
import { Invoices } from '../../api/invoices/invoices'
import { InvoicesList } from '../components/invoices-list'
import { Loading } from '../components/loading'
import { Meteor } from 'meteor/meteor'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('invoices')
  if (subscription) {
    const invoices = Invoices.find().fetch()
    onData(null, { invoices })
  }
}

export default composeWithTracker(composer, Loading)(InvoicesList)
