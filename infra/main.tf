provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "foodtime_bucket" {
  bucket_prefix = "foodtime-"
}

output "bucket_name" {
  value = aws_s3_bucket.foodtime_bucket.bucket
}