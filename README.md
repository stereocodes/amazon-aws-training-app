# AWS TRAINING CONCEPT APP

![](https://storage.googleapis.com/stereocode-github-assets/aws-repo-header.jpg)

This is a proof of concept desktop application. The repos' soul purpose is to create a stunning proof of concept to showcase what is possible for AWS brand. 

## Install

```yarn install```

## Start

```yarn run start:electron```
```yarn run start:react```

This creates a new electron window instance using the electron cli. It then uses webpack dev server to create a local react application to the instanced window.


## Test
```yarn run test```

Basic unit testing is added with jest/enzyme

## Build

```yarn run build:electron-mac```

This uses the electron build cli to build the production application files. you can also optionally build for windows by issuing the `build:electron-win` command.