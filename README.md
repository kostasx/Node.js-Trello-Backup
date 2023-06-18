# Backup a Trello Board using Node.js and the Trello REST API
### Node.js-Trello-Backup

## INSTRUCTIONS

**Setting up:** _(Required once)_

1. Rename `.env.sample` to `.env` and update file with your Trello API KEY, TOKEN and BOARD ID
2. Run `npm install`

**Backing up:**

3. Run `npm start`

After the script has completed successfully, you'll get a JSON file named `trello-board-<BOARD_ID>--<BOARD_NAME>.json` on your local folder that will contain all the Board data.