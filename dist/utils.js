"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCaseString = exports.capitalizeString = void 0;
const capitalizeString = (s) => s.charAt(0).toUpperCase() + s.slice(1);
exports.capitalizeString = capitalizeString;
const lowerCaseString = (s) => s.charAt(0).toLowerCase() + s.slice(1);
exports.lowerCaseString = lowerCaseString;
