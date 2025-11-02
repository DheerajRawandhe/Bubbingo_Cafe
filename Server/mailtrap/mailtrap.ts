import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();


// const EndPoaint = "https://send.api.mailtrap.io/"
// console.log(process.env.MAILTRAP_API_TOKEN)


export const client = new MailtrapClient({
  token: process.env.MAILTRAP_API_TOKEN!
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Bubbingo Cafe",
};