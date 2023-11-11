'use strict';

const axios = require('axios');


module.exports.EsepWebhook = async (event, context, callback) => {
  try {
    // Parse the input event
    const json = JSON.parse(event);

    // Construct payload
    const payload = {
      text: `Issue Created: ${json.issue.html_url}`
    };

    // Environment variable for the Slack URL
    const slackUrl = process.env.SLACK_URL;

    // Sending the HTTP request to the Slack URL
    const response = await axios.post(slackUrl, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Returning the response from the Slack API
    return response.data;
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

