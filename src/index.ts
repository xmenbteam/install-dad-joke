#!/usr/bin/env node

import axios, { AxiosResponse } from "axios";

export const thingToPrint = process.argv[2];

const printThing = async (name: string) => {
  console.log(`Hello ${name}! Fetching your dad joke... \n`);
  try {
    const response: AxiosResponse<any> = await axios.request({
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
  } catch (err) {
    console.log(">>>>", err, "<<<");
  }
};

module.exports = printThing(thingToPrint);
