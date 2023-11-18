# AlfaBank AutoTest

____

## Before starting

``` bash
# install dependencies
$ npm i
```

## Running UI tests

``` bash
# individual test suites
$ npx wdio run wdio.conf.ts --suite NAME
```

``` bash
# all test suites
$ npm run wdio
```

### Name of solo suites

```
1. case1
2. case2
3. case3
4. case4
5. case5
```

### .skip

```
To skip a set of cases (describe block) or one specific test (it blog), it is necessary to add .skip after the block 
name
```

### .only

```
To launch a specific set of cases (describe block) or one specific test (it blog), it is necessary to add .only after 
the block name
```
