FROM php:8.0
RUN pecl install ev-beta && \
          docker-php-ext-enable ev
WORKDIR /chat/src
CMD ["/usr/local/bin/php", "server.php"]
