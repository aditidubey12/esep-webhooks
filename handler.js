'use strict';

const axios = require('axios');


module.exports.EsepWebhook = async (event, context, callback) => {
  try {
    console.log(event);
    // Parse the input event
    const jsonBody = JSON.parse(event.body);

    console.log(jsonBody.issue.html_url);

    // Construct payload
    const payload = {
      text: `Issue Created: ${jsonBody.issue.html_url}`
    };

    // Environment variable for the Slack URL
    const slackUrl = process.env.SLACK_URL;

    // Sending the HTTP request to the Slack URL
    const response = await axios.post(slackUrl, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);

    // Returning the response from the Slack API
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    // Handle any errors
    console.error('Error sending message to Slack:', error);
    throw new Error('Error sending message to Slack');
  }

  // const response = {
  //   statusCode: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  //   },
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // callback(null, response);

};


// // Decode the base64 string
// const decodedBuffer = Buffer.from('SERVERLESS_TELEMETRY.TZ.H4sIAAAAAAAAA61Uz2/cRBTuNu0WmaZJE1WoBqQoyqUV4/WMZ8Z2D4h4k5LANg2yk1a5RDPjN1k3uztb2/mJkHrnhAT8AeWAOCFx4AA3DghxQeoBcUDiT0BC6h1vlpBsIwgHDrZnvjfP8715831Wac2lnCrNWIhcDwOiWgCSVHLEXBUy5XJKXd9+HQrooz2QbWO2C5TCLlqskAdD4Day7LcKyHch70BRNMRegTqiK1OBinR76orrYOZgatd7JoVHhf1l3ZrhOvRZKDlXaUA9TzEIVej5Qmvi6iDwp2Y8qQikQuhUuTgIdOoCFQHhkpOUBprNWtU+znCfW0/Gft94s/vpK/inN34xg8GdHy8/rX9fPd9dtur7Ad/kdLJmTw9SRD/bEiXsiQMnh6KcvTYKRv9e7Dtznh8ST0KAAlf5iAY4RGGIKQIdklRIooEFG1fmWvPJYpz0a1/Vfx2zLq3ej5Opl5aSZLWBHWw7zA8DtrvfLn0H9kHtlIAqCs5OgUAUJcKO6IpD0xtQU6Y7e71R0WicJhbV55WCfhlNDL9osadMmvW2ovGmUG1ATdMrc9OJ7GbH7KR382qK7pp8T+QppGg1N6WJXjsVWy7QAhTbpemj9Qz2II9eHY3eMzLrwHHwhdS4K/IyWf+H1ETIDpTHwRungkMIzccr0c2zcNPsVEUcRFcHxUCFJwd9iC4tmaKMxlerd1f0UGK2oRdZa8XgP1vVqmhsPRPRyw/RfPcQNTVaTqOJo0m1NhcK/gJODqMaRZOngVWTl9H1hy+el5y+txzHyytvb8bJfLIWbzbvLyx+U1+xrvqYEhoyn2KfTFknzbXHqr4dImuOu9WNYYxU4tIUUeAuCnVAkAe+xFJ5PnXV5MdfPP/tW/ysPmGNj/Ta/qRmzUhX6kAGPoQe8UJGqCeFZF6IfR1orOj5irHPVd3szRNNOVkvKzPRyQ5FmZneicSA/wFHErtgf1TxImnAXc0JAaoYTwOFeUC0xJhW9cqU/y+8bozw2jVqyOnn6ZYelf0F++uL1gykDLvcD4RymSKaSQnS8wh3PWAhweq/cDqvrtmpgZ057bLsF5WRPN6pvOTW5tMPsyNCT5yVIaHPa8/qn9XOGMDEkbk4RUeo7SOF32kMHDRTUDQSl7U4eRC+G8eNyOWe7+FWC7sNb3/hUd5/fH/xvZK2XbFh1uKiiJprf1vBqExOK+LacaQFva2yfcY0ln6o3b74/gd/AgRjv/ERBgAA', 'base64');

// // Convert the buffer to a string
// const decodedString = decodedBuffer.toString('utf-8');

// // Log the decoded string
// console.log(decodedString);