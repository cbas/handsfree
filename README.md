# handsfree
*Open the pod bay doors...*

[![Travis CI](https://img.shields.io/travis/cbas/handsfree.svg)](https://travis-ci.org/cbas/handsfree)

## Installation
The Speech API, unlike most things in life, is better with safety.

On unsafe connections, i.e. plain text HTTP, Google Chrome spams the user with repeated permission requests. Enable HTTPS to suppress all but the first request.

### Generate a self-signed certificate
```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Development
```bash
# launch demo in web browser
npm start

# run the unit tests
npm test

# keep re-building while coding
npm run watch

# like watch, but also serve on a non-caching server wit HTTPS, and open it in browser. Wow!
npm run dev
```
