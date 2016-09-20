import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Invoices } from './invoices'

export const insertInvoice = new ValidatedMethod({
  name: 'invoices.insert',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Invoices.insert({
      number: '100100',
      date: '10/31/2016',
      due_date: '10/31/2016',
      bill_to: 'elliot.alderson@fsociety.com',
      bill_to_cc: 'edward.alderson@fsociety.com',
      description: 'Created season 3 web application to hack evil corp',
      hours: '15',
      rate: '$70.00',
      amount: '$1050.00',
      amount_paid: '$0.00',
      amount_due: '$0.00',
      notes: 'Thanks for your business!',
    })
  },
})

export const updateInvoice = new ValidatedMethod({
  name: 'invoices.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.number': { type: String, optional: true },
    'udpate.date': { type: String, optional: true },
    'update.due_date': { type: String, optional: true },
    'update.bill_to': { type: String, optional: true },
    'update.bill_to_cc': { type: String, optional: true },
    'update.description': { type: String, optional: true },
    'update.hours': { type: String, optional: true },
    'update.rate': { type: String, optional: true },
    'update.amount': { type: Number, optional: true },
    'update.amount_paid': { type: Number, optional: true },
    'update.amount_due': { type: Number, optional: true },
    'update.notes': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Invoices.update(_id, { $set: update })
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
