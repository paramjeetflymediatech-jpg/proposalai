-- Create and select the database
CREATE DATABASE IF NOT EXISTS proposalai;
USE proposalai;

-- Drop old table if exists
DROP TABLE IF EXISTS demo_requests;

-- Create demo_requests table with all form fields
CREATE TABLE demo_requests (
  id           INT AUTO_INCREMENT PRIMARY KEY,

  -- Personal Info
  first_name   VARCHAR(100)  NOT NULL,
  last_name    VARCHAR(100)  NOT NULL,
  email        VARCHAR(150)  NOT NULL,
  phone        VARCHAR(20)   DEFAULT NULL,

  -- Company Info
  company      VARCHAR(150)  NOT NULL,
  role         VARCHAR(100)  NOT NULL,

  -- Inquiry
  help         VARCHAR(200)  NOT NULL,
  message      TEXT          NOT NULL,

  -- Consent
  consent      TINYINT(1)    NOT NULL DEFAULT 0,

  -- Meta
  created_at   DATETIME      NOT NULL,

  INDEX idx_email      (email),
  INDEX idx_company    (company),
  INDEX idx_created_at (created_at)
);