#!/usr/bin/env node
import start from '../index';

console.log(start(Number(process.argv[process.argv.length - 1])));
