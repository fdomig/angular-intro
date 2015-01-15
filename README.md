# AngularJS Intro

This talk gives a quick introduction to AngularJS. Starting with the differences to _traditional_ JavaScript frameworks like jQuery the most crucial parts of a "Single Page Application (SPA)" are explained.

A simple example SPA`` is built from scratch with AngularJS. From an input field with no logic attached, a basic book collection is created with retrieving books via Ajax (REST) from a backend system. A glimpse on upcoming features of AngularJS 2.0 with a personal interpretation is given at the end of this presentation.

## Prerequisites

NodeJS respectively Node Package Manager (`npm`) have to be installed on your machine. Every other dependency will be installed with it.

## Build and install

````
$ git clone https://github.com/fdomig/angular-intro
$ npm install
$ npm start

````

A local webserver will serve the slides at `http://localhost:3000/slides/` as well as a small REST-API for the example application.


## Slides

Please find all slides for the small intro in `public/slides/`.

## Application

The demo application is created in four steps. Find in the folder `public/` the `basic.html`, `mid.html`, `advanced.html` as well as `index.html` which include a simple book application that is built step by step.

## Issues

Please file an issue to let me know if you have any problems or have found an error.

## License

The MIT License (MIT)

Copyright (c) 2014 Franziskus Domig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.