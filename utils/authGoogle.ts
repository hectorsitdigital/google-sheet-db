import { google } from 'googleapis';

//KeyFilename must be a json document from google cloud project and be sure that is the relative path of the file.
const auth = new google.auth.GoogleAuth({
    keyFilename: 'sit-credentials.json',
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
    ]
});

export {
    auth
}