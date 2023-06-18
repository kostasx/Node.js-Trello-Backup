const { writeFileSync }    = require('fs');
const request              = require('request');
const { stringify, parse } = JSON;
require('dotenv').config();

// CONFIGURATION:
const KEY      = process.env.KEY;
const TOKEN    = process.env.TOKEN;
const BOARD_ID = process.env.BOARD_ID;

console.log("Starting Trello Backup for Board with ID: " + BOARD_ID);

const options = {
  'method': 'GET',
  'url': 'https://api.trello.com/1/boards/' + BOARD_ID + '/?filters=all&actions=all&action_fields=all&actions_limit=1000&cards=all&card_fields=all&card_attachments=true&labels=all&lists=all&list_fields=all&members=all&member_fields=all&checklists=all&checklist_fields=all&organization=false',
  'headers': { 'Content-Type': 'application/json' },
  body: stringify({ "key": KEY, "token": TOKEN })
};

request(options, function (error, response) {
  if (error) throw new Error(error);

  try {
    const data = parse(response.body);
    writeFileSync('trello-board-' + BOARD_ID + '--' + data.name + '.json', response.body);
    console.log('Data written to file successfully.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }

});
