const https = require("https");
const { SSMClient, SendCommandCommand } = require("@aws-sdk/client-ssm");
const client = new SSMClient(config);

exports.handler = async function (event) {
  let statusCode;
  let input = {
    InstanceIds: [
      "STRING_VALUE",
    ],
    DocumentName: "AWS-RunShellScript",
    Parameters: { // Parameters
      "<keys>": [ // ParameterValueList
        "STRING_VALUE",
      ],
    }
  };
  const command = new SendCommandCommand(input);
  const response = await client.send(command);
  console.log(response);
  return response.statusCode;
};

