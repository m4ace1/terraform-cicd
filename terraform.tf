terraform {
  backend "s3" {
    bucket = "giggle-learn-tf-state-bucket"
    key    = "m4ace/terraform.tfstate"
    region = "us-east-1"
  }
}
