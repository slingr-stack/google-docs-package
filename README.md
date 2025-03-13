# Overview

Repo: [https://github.com/slingr-stack/google-docs-package](https://github.com/slingr-stack/google-docs-package)

This package allows direct access to the [Google Docs API](https://developers.google.com/docs/api/reference/rest?hl=es-419).

The features available in this package are:

- Authentication and authorization
- Direct access to the Google Docs API

## Configuration

To use the Google Docs package, you must create an app in the [Google Developer Console](https://console.developers.google.com)
by following these instructions:

- Create a Google Cloud project for your Google Docs app.
- Enable the Google Docs API in your Google Cloud project.
- Create a service account and credentials and delegate domain-wide authority to it (assign ONLY the necessary scopes to your service account) [Click here for the instructions](https://developers.google.com/workspace/guides/create-credentials?hl=es-419#service-account).
- Download the JSON file with the service account credentials to get the service account private key.

Otherwise, if you plan to use OAuth 2.0 authentication method:

- Enable the Google Docs API in your Google Cloud project.
- Create a Client ID OAuth 2.0 account.
- Copy the Client ID and Client Secret of the package.

Note that the client must have access to the Google Docs resources. If you try to access to a resource that the user does not own
  the request will result in a 404 or 403 unauthorized error.

To successfully use the Google Docs package through a Service Account, please note the following requirements:

### Domain-Wide Delegation (If you want to access all users' documents within your organization):
If you want to allow the Service Account to access the documents of all users within your domain (Google Workspace/GSuite), you need to configure Domain-Wide Delegation for the Service Account. This allows the Service Account to act on behalf of users in your organization.

#### Steps to Set Up Domain-Wide Delegation:
Enable Domain-Wide Delegation for the Service Account:

1. Go to the Google Cloud Console. Navigate to IAM & Admin > Service Accounts. Select your Service Account and click on it. Under the Service Account details, enable Domain-Wide Delegation. Note the Client ID of the Service Account.

Configure Delegation in the Google Admin Console:

2. Go to the Google Admin Console (you need to be a super administrator). Navigate to Security > API Controls. Under "Domain-wide delegation", click Manage Domain Wide Delegation. Add the Client ID of your Service Account. Assign the necessary scopes (permissions) that you want the Service Account to access, such as https://www.googleapis.com/auth/documents for Google Docs access.
   Share Individual User's Documents with the Service Account (If you want to access a specific user's document):
   If you prefer to limit access to a specific user's document, you can share that document directly with the Service Account.

#### Steps to Share a Document with the Service Account:
Go to Google Docs:

1. Open Google Docs with the user account whose document you want to share.
   Share the Document:

2. In the document you want to share, click the "Share" button in the upper-right corner. In the "Share with people and groups" section, add the email address of the Service Account (typically in the format your-service-account@your-project.iam.gserviceaccount.com).

3. Set the appropriate permissions, such as "Viewer", "Commenter", or "Editor" (depending on your needs). Ensure you grant "Editor" permissions if you want the Service Account to make changes to the document.

## Configuration Parameters

#### Authentication Method
Allows you to choose between Account Service and OAuth 2.0 authorization methods.

**Name**: `authenticationMethod`
**Type**: buttonsGroup
**Mandatory**: true

#### Service Account Email
The email created for the service account, it shows up when Service Account authorization method is enabled.

**Name**: `serviceAccountEmail`
**Type**: text
**Mandatory**: true

#### Private Key
The private key associated with the service account, it shows up when Service Account authorization method is enabled.

**Name**: `privateKey`
**Type**: password
**Mandatory**: true

#### Client ID
The ID for your client application registered with the API provider, it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `clientId`
**Type**: text
**Mandatory**: true

#### Client Secret
The client secret given to you by the API provider, it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `clientSecret`
**Type**: password
**Mandatory**: true

#### OAuth Callback
The OAuth callback to configure in your Google Docs App. it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `oauthCallback`
**Type**: label

#### Google Docs API URL
The URL of the Google Docs API where the requests are performed.

**Name**: `GOOGLE_DOCS_API_BASE_URL`
**Type**: label

#### Scope
The scope of access you are requesting.

**Name**: `scope`
**Type**: text
**Mandatory**: true


### Storage Value And Offline Mode

By default, the `Service Account` authorization method is used. When using this method, you can directly call the following method to retrieve the access token, without requiring any additional actions:

`pkg.googledocs.api.getAccessToken();`

This will return the access token, which will be securely stored in the application's storage and associated with a user by their ID.

If you have enabled the `OAuth 2.0` authorization method, the same method is used. The difference is that the Google Docs package includes the `&access_type=offline` parameter, which allows the application to request a refresh token. This happens when calling the UI service (which should run during runtime, for example, by invoking the method within an action) to log in to the application.

The Google service will return an object containing both the access token and the refresh token. Each token will be stored in the app's storage (accessible via the Monitor), where you can view them encrypted and associated with the user by ID.


# JavaScript API

## HTTP requests
You can make `POST` and `GET`requests to the [Google Docs API](https://developers.google.com/docs/api/how-tos/overview?hl=es-419) like this:
```javascript
var response = pkg.googledocs.api.get('/documents/{documentId}')
var response = pkg.googledocs.api.post('/documents', body)
var response = pkg.googledocs.api.post('/documents/{documentId}:batchUpdate', body)
```

## Events

The Google Docs API does not generate webhooks for events. However, you can receive webhooks for file modifications through the Google Drive API. For more information, please refer to the [Google Drive Package documentation](https://github.com/slingr-stack/google-drive-package).

## Dependencies
* HTTP Service
* Oauth Package

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
