# Terraform Security Misconfiguration Lab

This folder contains intentionally insecure Terraform examples for learning and security scanning practice.

## Included Modules

- `modules/ec2`: EC2 instance with open security group, IMDSv1 allowed, and unencrypted root volume.
- `modules/rds`: Public RDS instance with weak hardcoded password, no storage encryption, and backups disabled.

## Usage

```bash
terraform init
terraform plan
```

Do not deploy this configuration in a production environment.
