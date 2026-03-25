FROM node:22-alpine as build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

FROM php:8.2-apache

# Install database dependencies
RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html

COPY --from=build /app/dist/ ./

# Install htaccess support
RUN a2enmod rewrite

# Set permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80