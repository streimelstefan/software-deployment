#!/bin/bash
set -e

service mysql start

# Wait for MySQL to be ready
until mysqladmin ping --silent; do
    echo "Waiting for MySQL to start..."
    sleep 2
done

mysql --user=root <<EOF
ALTER USER 'root'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASSWORD}';
CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\`;
CREATE USER IF NOT EXISTS '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';
GRANT ALL PRIVILEGES ON \`${MYSQL_DATABASE}\`.* TO '${MYSQL_USER}'@'%';
FLUSH PRIVILEGES;
EOF

service mysql stop

echo "MySQL configured successfully! Starting now..."
exec "$@"
