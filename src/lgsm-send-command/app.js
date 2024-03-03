import { SSMClient, SendCommandCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient({region: "us-east-1"});
const ec2Id = process.env.KNOWHERE_EC2_ID;
const serverName = {
  minecraft: "mcserver",
  palworld: "pwserver"
};

export async function handler(event) {
    let body = JSON.parse(event.body);
    let command = body.command;
    let game = serverName[body.game];
    let input = {
        InstanceIds: [
          ec2Id,
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
}
