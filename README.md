# Good Food ApiGateway

## Description
Gateway for the GoodFood App

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Running the project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)

## Installation
Instructions on how to install the project and its dependencies.

```sh
git clone https://github.com/GoodFoodGoodApp/Service.Gateway.git 
cd Service.Gateway
```

# Configuration

Create a certificat with open ssl

```sh
openssl genrsa -out certs/server.key 2048
openssl req -new -key certs/server.key -out certs/server.csr
openssl x509 -req -in certs/server.csr -signkey certs/server.key -out certs/server.cert
```
Encode both of the key and the certificate

```sh
# Encode the private key
base64 certs/server.key > certs/server.key.base64

# Encode the certificate
base64 certs/server.cert > certs/server.cert.base64
```

Copy paste in the .env

# Running the project

```sh
docker-compose up --build
```

curl command to test

```sh
curl localhost:3000

curl localhost:3000/tests

curl localhost:3000/tests/1
```