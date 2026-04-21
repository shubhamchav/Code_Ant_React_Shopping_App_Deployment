variable "db_identifier" {
  description = "RDS instance identifier"
  type        = string
}

resource "aws_db_instance" "shubham_rds_instance" {
  identifier             = var.db_identifier
  allocated_storage      = 20
  engine                 = "mysql"
  engine_version         = "8.0"
  instance_class         = "db.t3.micro"
  username               = "admin"
  password               = "admin123456"
  db_name                = "shubhamappdb"
  skip_final_snapshot    = true
  publicly_accessible    = true
  storage_encrypted      = false
  backup_retention_period = 0
  deletion_protection    = false
  multi_az               = false
}
