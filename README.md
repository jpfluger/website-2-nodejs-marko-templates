# Website 2: NodeJS Marko Templates

A website primer for Node Express using [Marko](https://www.npmjs.com/package/marko) as the [template engine](http://markojs.com/docs/express/). This site is built upon [Website 1: NodeJS Starter](https://github.com/jpfluger/website-1-nodejs-starter) which uses Twitter Bootstrap (v3.3), Bootstrap-Dialog, JQuery, lodash, numeral and moment.

## Install `node`

Download [NodeJS](https://nodejs.org/en/) and install the version for your operating system. 

## Install `npm` and `bower` modules

We include a script, `install.sh` that initializes:

* local npm modules in directory `node_modules`
* local bower modules in directory `bower_components`

Then it copies only the required files from `bower_components/` into `public/_third/`, a directory we use to serve public web pages.

Run installation:

```bash
./install.sh
```

## Run

```bash
$ node server.js
```

> Note: Type Ctrl-C to quit the server.

Open the client web browser to url [http://localhost:8080](http://localhost:8080).

## About Marko

[Marko.js](http://markojs.com/) is used by eBay to build web applications. It can be [integrated](http://markojs.com/docs/express/) with Express to respond to web requests. We began using Marko in 2014 because we liked how the tag system worked to compose layouts on the server-side. We especially liked the simplicity of the [include tag](http://markojs.com/docs/core-tags/#reusable-content) and that templates pre-compiled into javascript. It made for tidy code. Since 2014, Marko has evolved to render pages on both server and the client (competing with React and Angular). For this demo, we are only using Marko on the server.

## [MIT Licensed](LICENSE)
