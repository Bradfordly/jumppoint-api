const { SSMClient, SendCommandCommand } = require("@aws-sdk/client-ssm");
const ssmClient = new SSMClient({region: "us-east-1"});
const hostName = process.env.HOST_NAME;
const serverName = {
  minecraft: "mcserver",
  palworld: "pwserver"
};

// TODO:
// * run ec2.DescribeInstanceTags w/ host name
// * input validation (API spec?)
// * error handling

exports.handler = async (event, context) => {
    let command = event.command
    let game = event.game
    game = serverName[game]
    let input = {
        InstanceIds: [
          "",
        ],
        DocumentName: "AWS-RunShellScript",
        Parameters: {
            "commands": [
              util.format('/bin/su -c "/home/%s/%s %s" - %s', game, game, command, game),
            ],
        }
    };
    const ssmCommand = new SendCommandCommand(input);
    const response = await client.send(ssmCommand);
    console.log(response);
    return response.statusCode;
};
