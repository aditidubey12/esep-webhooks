'use strict';

const axios = require('axios');


module.exports.EsepWebhook = async (event, context, callback) => {
  try {
    console.log(event);
    
    const jsonBody = JSON.parse(event.body);

    console.log(jsonBody.issue.html_url);

   
    const payload = {
      text: `Issue Created: ${jsonBody.issue.html_url}`
    };

    
    const slackUrl = process.env.SLACK_URL;

    const response = await axios.post(slackUrl, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    throw new Error('Error sending message to Slack');
  }


};
