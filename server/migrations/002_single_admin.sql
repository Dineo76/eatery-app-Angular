CREATE UNIQUE INDEX IF NOT EXISTS users_only_one_admin_idx
  ON users ((1))
  WHERE upper(role) = 'ADMIN';
