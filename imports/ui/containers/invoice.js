import { composeWithTracker } from 'react-komposer'
import { Invoices } from '../../api/invoices/invoices'
import { Invoice } from '../components/invoice'
import { Loading } from '../components/loading'
import { Meteor } from 'meteor/meteor'

const composer = (props, onData) => {
  const { invoiceId } = props.params
  console.log(invoiceId)
  const subscription = Meteor.subscribe('invoices')
  if (subscription) {
    const invoice = Invoices.findOne(invoiceId)
    onData(null, { invoice })
  }
}

export default composeWithTracker(composer, Loading)(Invoice)
