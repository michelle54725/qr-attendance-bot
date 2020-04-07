module.exports = {
  
  interactive: {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "Find out more about AWE:\n*<https://awe.berkeley.edu/|AWE's Website>*"
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Approve"
            },
            style: "primary",
            value: "approve"
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Deny"
            },
            style: "danger",
            value: "deny"
          }
        ]
      }
    ]
  }
  
};