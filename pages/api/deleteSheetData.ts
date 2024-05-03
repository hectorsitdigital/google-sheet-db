import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';
import { auth } from '../../utils/authGoogle'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const rowToDelete = Number(JSON.parse(req.body).row);
        const endIndex = rowToDelete + 1;
        let batchUpdateRequest = {
            "requests": [
              {
                "deleteDimension": {
                  "range": {
                    "sheetId": 0,
                    "dimension": "ROWS",
                    "startIndex": rowToDelete,
                    "endIndex": endIndex
                  }
                }
              }
            ]
          };
        const sheets = google.sheets({ version: 'v4', auth });
        //this code just delete values on the table not the complete row.
        // const response = await sheets.spreadsheets.values.clear({
        //     spreadsheetId: process.env.SPREADSHEET_ID,
        //     range: rangeToDelete
        // })
        const response = await sheets.spreadsheets.batchUpdate({
            spreadsheetId: process.env.SPREADSHEET_ID,
            requestBody: batchUpdateRequest
        })
        console.log(response)

        return res.status(200).send(response);
    } catch (error) {
        console.log(error)
    }
};