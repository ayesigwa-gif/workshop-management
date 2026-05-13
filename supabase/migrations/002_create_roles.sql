CREATE TYPE user_role AS ENUM (
  'admin',
  'operation_manager',
  'finance_manager',
  'advertising_manager',
  'worker'
);

ALTER TABLE users ALTER COLUMN role SET DATA TYPE user_role USING role::user_role;
