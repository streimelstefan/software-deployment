FROM ubuntu:25.04

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=wordpress
ENV MYSQL_USER=wordpress
ENV MYSQL_PASSWORD=wordpress

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
  mysql-server && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

EXPOSE 3306
RUN usermod -d /var/lib/mysql/ mysql && \ 
  mkdir -p /var/lib/mysql && \
  chown -R mysql:mysql /var/lib/mysql

# RUN mysqld --initialize-insecure --datadir=/var/lib/mysql

RUN sed -i "s/^bind-address\s*=.*/bind-address = 0.0.0.0/" /etc/mysql/mysql.conf.d/mysqld.cnf

COPY mysql/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["mysqld"]
