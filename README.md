# scratch-gui
#### Scratch GUI is a set of React components that comprise the interface for creating and running Scratch 3.0 projects

[![Build Status](https://travis-ci.com/LLK/scratch-gui.svg?token=Yfq2ryN1BwaxDME69Lnc&branch=master)](https://travis-ci.com/LLK/scratch-gui)
[![Greenkeeper badge](https://badges.greenkeeper.io/LLK/scratch-gui.svg)](https://greenkeeper.io/)

## Installation
This requires you to have Git and Node.js installed.

In your own node environment/application:
```bash
npm install https://github.com/LLK/scratch-gui.git
```
If you want to edit/play yourself:
```bash
git clone git@github.com:LLK/scratch-gui.git
cd scratch-gui
npm install
```

## Getting started
Running the project requires Node.js to be installed.

## Running
Open a Command Prompt or Terminal in the repository and run:
```bash
npm start
```
Then go to [http://localhost:8601/](http://localhost:8601/) - the playground outputs the default GUI component

## Testing
NOTE: If you're a windows user, please run these scripts in Windows `cmd.exe`  instead of Git Bash/MINGW64.

Run linter, unit tests, and build.
```bash
npm test
```

Run unit tests in isolation.
```bash
npm run unit-test
```

Run unit tests in watch mode (watches for code changes and continuously runs tests). See [jest cli docs](https://facebook.github.io/jest/docs/en/cli.html#content) for more options.
```bash
npm run unit-test -- --watch
```

## Donate
We provide [Scratch](https://scratch.mit.edu) free of charge, and want to keep it that way! Please consider making a [donation](https://secure.donationpay.org/scratchfoundation/) to support our continued engineering, design, community, and resource development efforts. Donations of any size are appreciated. Thank you!
