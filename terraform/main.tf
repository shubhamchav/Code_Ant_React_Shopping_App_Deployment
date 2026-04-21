terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "shubham_ec2" {
  source = "./modules/ec2"

  instance_name = "shubham-demo-ec2-open"
}

module "shubham_rds" {
  source = "./modules/rds"

  db_identifier = "shubham-demo-rds-open"
}
