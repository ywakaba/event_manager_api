const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const port = process.env.PORT || 3001;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World!'))
const db = require('./models/index');
const events = db.events;
const statuses = db.statuses;
const categories= db.categories;
const documents= db.documents;
//////////////////////////////
// events(事象)テーブルAPI
//////////////////////////////
app.post('/api/events', (req, res) => {
  console.log(req.body);
  console.log(req.body.body);
  console.log(req.params);
  let newData = JSON.parse(req.body.body);
  events.create({eventGroupId: newData.eventGroupId, eventName: newData.eventName,
                 eventCategory: newData.eventCategory, eventOverView: newData.eventOverView,
                 scheduledStartDate: newData.scheduledStartDate,
                 expectedDeliveryDate: newData.expectedDeliveryDate,
                 fixedDeliveryDate: newData.fixedDeliveryDate,
                 expectedBillingDate: newData.expectedBillingDate,
                 customerCompany: newData.customerCompany,
                 customerStaff: newData.customerStaff,
                 progress: newData.progress,
                 eventStatus: newData.eventStatus
  }).then(u => { res.send(u);});
});

app.post('/api/events/:id', (req, res) => {
  console.log(req.body);
  console.log(req.body.body);
  console.log(req.params);
  const id = req.params.id;
  let newData = JSON.parse(req.body.body);
  events.update({eventGroupId: newData.eventGroupId, eventName: newData.eventName,
                 eventCategory: newData.eventCategory, eventOverView: newData.eventOverView,
                 scheduledStartDate: newData.scheduledStartDate,
                 expectedDeliveryDate: newData.expectedDeliveryDate,
                 fixedDeliveryDate: newData.fixedDeliveryDate,
                 expectedBillingDate: newData.expectedBillingDate,
                 customerCompany: newData.customerCompany,
                 customerStaff: newData.customerStaff,
                 progress: newData.progress,
                 eventStatus: newData.eventStatus
  },
  {where: { id: id } }
  ).then(u => { res.send(u);});
});

app.get('/api/events', (req, res) => {
  console.log(req.query);
  const groupId = req.query.eventGroupId;
  events.findAll({
    where: {
      eventGroupId: groupId
    },
    raw: true,
    include: [
      {
        model: db.statuses,
        required: true
      },
      {
        model: db.categories,
        required: true
      }
    ],
    order: [
      ['id', 'ASC']
    ]
  }).then(e => { res.send(e);});
});

app.get('/api/events/:id', (req, res) => {
  const id = req.params.id;
  events.findOne({
    where: {
      id: id
    }
  })
  .then(ev => {
    res.send(ev);
  });
});

//////////////////////////////
// documents(書類)テーブルAPI
//////////////////////////////
app.get('/api/documents', (req, res) => {
  console.log(req.query);
  documents.findAll({
    order: [
      ['id', 'ASC']
    ]
  }).then(d => { res.send(d);});
});

//////////////////////////////////
// statuses(ステータス)テーブルAPI
//////////////////////////////////
app.get('/api/statuses', (req, res) => {
  console.log(req.query);
  let groupId = req.query.eventGroupId;

  statuses.findAll({
    where: {
      eventGroupId: groupId
    },
    order: [
      ['id', 'ASC']
    ]
  }).then(statuses => { res.send(statuses);});
});

//////////////////////////////////
// categories(カテゴリ)テーブルAPI
//////////////////////////////////
app.get('/api/categories', (req, res) => {
  console.log(req.query);
  let groupId = req.query.eventGroupId;

  categories.findAll({
    where: {
      eventGroupId: groupId
    },
    order: [
      ['id', 'ASC']
    ]
  }).then(categories => { res.send(categories);});
});

app.listen(port, () => {
  console.log(`Server up on ${port}`);
});

