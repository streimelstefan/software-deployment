FROM ubuntu:25.04

ENV WORDPRESS_DB_HOST=localhost
ENV WORDPRESS_DB_USER=wordpress
ENV WORDPRESS_DB_PASSWORD=wordpress
ENV WORDPRESS_DB_NAME=wordpress

RUN apt-get update && \
  apt-get install -y \
  apache2 \
  php \
  php-mysql \
  curl \
  wget \
  unzip \
  libapache2-mod-php && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

RUN curl -o wordpress.tar.gz -fSL https://wordpress.org/latest.tar.gz && \
  tar -xzf wordpress.tar.gz -C /var/www/html --strip-components=1 && \
  rm wordpress.tar.gz

COPY wordpress/wp-config-template.php /var/www/html/wp-config.php

RUN chown -R www-data:www-data /var/www/html && \
  chmod -R 755 /var/www/html

RUN rm /var/www/html/index.html

RUN a2enmod rewrite

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
