#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thingToPrint = void 0;
const axios_1 = __importDefault(require("axios"));
exports.thingToPrint = process.argv[2];
const printThing = async (name) => {
    console.log(`Hello ${name}! Fetching your dad joke... \n`);
    try {
        const response = await axios_1.default.request({
            method: "GET",
            url: "https://dad-jokes.p.rapidapi.com/random/joke",
            headers: {
                "X-RapidAPI-Key": "220c0cd0cbmsh0add015af228208p1b55d8jsnb4a19430d21b",
                "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
            },
        });
        // const body = await response.json();
        console.log(response.data.body[0].setup, "\n");
        console.log(response.data.body[0].punchline, "\n");
    }
    catch (err) {
        console.log(">>>>", err, "<<<");
    }
};
module.exports = printThing(exports.thingToPrint);
