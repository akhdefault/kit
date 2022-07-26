#!/usr/bin/env node
// @ts-ignore
import parseOptions from 'parse-options';
import genComponent from './component/genComponent';

const options = parseOptions('@component|c', process.argv);

if (options.component) {
  genComponent();
}
