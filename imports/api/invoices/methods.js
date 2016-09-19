import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Invoices } from './invoices'

export const insertInvoice = new ValidatedMethod({
  name: 'invoices.insert',
  validate: new SimpleSchema({
    title: { type: String },
    body: { type: String },
  }).validator(),
  run(invoice) {
    const newInvoice = Invoices.insert(invoice)
    return newInvoice
  },
})

export const removeInvoice = new ValidatedMethod({
  name: 'invoices.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Invoices.remove(_id)
  },
})
