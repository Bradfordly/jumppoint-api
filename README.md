# Jump Point API
![GitHub Release](https://img.shields.io/github/v/release/Bradfordly/jumppoint-api)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Bradfordly/jumppoint-api/main.yml)

### API for Knowhere (AWS Instance Management System)

Jump Point API deploys itself as a serverless solution to AWS. This exposes REST endpoints to integrate with the Knowhere EC2 host.

## Usage

[CloudFormation Template (CFT)](jumppoint-api-cft.yaml) is used to manage the infrastructure involved with running Jump Point API. You can upload the CFT to S3 as-is and apply the CFT with CloudFormation. *Important Note:* The CFT does not provision an IAM Role which is required for API Gateway to interface with AWS Services.

Once the Lambda functions are deployed, API Gateway is deployed to expose a public API.

## Development Setup

GitHub Actions have been setup to run jobs to deploy resources for testing. Branches should match the following naming conventions:

* `feature/name-of-feature/issue#`
* `bugfix/name-of-bug/issue#`

**PLEASE** ensure any AWS resources deployed outside of the `main` and `develop` branches are cleaned up quickly. If possible, downsize EC2 types (such as t2.micro, free tier eligbale) for feature/bugfix branches.
