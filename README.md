# TRACK Frontend

This repository contains a **Work In Progress** frontend for TRACK. This is made in Vue as a test. It utilizes the 
NuxtJS-framework. This is an easy to use framework around Vue. 

## TODO: 
- [ ] Create a Timer Overview Page
- [ ] Create a Login Page
- [ ] Create a Timer Edit Page
- [ ] Fully Finish OpenAPI Specification
- [ ] Add Timer Actions
    - [ ] Start Timer
    - [ ] Stop Timer
    - [ ] Remove Timer
- Optional:
    - [ ] Link Gitlab page
    - [ ] Link Harvest Forecast page

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Run the API. 
Currently, there is no reference API implementation. This is a work in progress. However, it is possible to easily spawn
a mock API using [Stoplight Prism](https://stoplight.io/open-source/prism/). 

How to spawn a Mock API locally:

```bash
$ npm install -g @stoplight/prism-cli

$ prism mock open-api.yaml
[3:52:06 PM] › [CLI] …  awaiting  Starting Prism…
[3:52:06 PM] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/timers?date=1998-01-15
[3:52:06 PM] › [CLI] ▶  start     Prism is listening on http://127.0.0.1:4010
```

When you get an error
- `Error: Cannot find module 'worker_threads'`
    - Make sure to start `node` with the `--experimental-worker` flag. E.g. `/usr/bin/node --experimental-worker ~/file/to/prism mock oas.yaml`
