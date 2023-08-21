"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceOccurrences = void 0;
const core = __importStar(require("@actions/core"));
function replaceOccurrences(inputString, regexPattern, replacement) {
    try {
        // Create a RegExp object from the given pattern
        const regex = new RegExp(regexPattern, 'g');
        // Replace all occurrences that match the regex
        const replaced = inputString.replace(regex, replacement);
        // Replace multiple consecutive "-" with a single "-"
        const result = replaced.replace(/-+/g, '-');
        return result;
    }
    catch (error) {
        // Handle any errors in the regular expression pattern or replacement
        if (error instanceof Error)
            core.setFailed(error.message);
        return inputString;
    }
}
exports.replaceOccurrences = replaceOccurrences;
// Example usage within a GitHub Action
function run() {
    try {
        const inputString = core.getInput('input');
        const regexPattern = core.getInput('regex');
        const replacement = core.getInput('replace');
        const result = replaceOccurrences(inputString, regexPattern, replacement);
        core.setOutput('result', result);
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
    }
}
run();
