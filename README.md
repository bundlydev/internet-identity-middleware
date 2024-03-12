# Internet Identity Middleware

This middleware solves the communication problem when authenticating native applications (such as mobile applications) and Internet Identity.

It allows authentication to be performed in the Middleware and transfer that authentication to the application.

## How to run

Copy .env-example and replace values

```bash
cp .env-example .env
```

Set your Internet Identity URL (local or production)

```bash
REACT_APP_INTERNET_IDENTITY_URL=https://identity.ic0.app
```

Run the application

```
npm run start
```

Open a browser with the following URL:

```
http://localhost:3000/?pubkey=YOUR_PUBKEY&redirect_uri=YOUR_APP_LINK
```

Replace `YOUR_PUBKEY` with your public key, it should look like this:

`302a300506032b65700321003b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29`

Replace `YOUR_APP_LINK` with the link of your application, e.g.

`app://success`
