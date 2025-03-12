# Overview
Reads and writes Google Docs documents.

# Javascript API


- **HTTP requests**

## HTTP requests
You can make `GET`,`POST` requests to the [Google Docs API](https://developers.google.com/docs/api/reference/rest) like this:
```javascript
var response = pkg.googledocs.api.get('/documents/{documentId}')
var response = pkg.googledocs.api.post('/documents', body)
var response = pkg.googledocs.api.post('/documents/{documentId}:batchUpdate', body)

```

## Dependencies
* HTTP Service
* Oauth Package

## About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
