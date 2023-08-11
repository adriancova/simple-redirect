import express from "@express";

const redirectUrl = Deno.env.get("redirectUrl");
if (!redirectUrl) {
  throw Error("Missing redirect url!");
}

new URL(redirectUrl); // done to crash if string is not a valid url

const app = express();
const port = 80;

app.use((req, res) => {
  res.redirect(301, `${redirectUrl}${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Redirecting all requests to ${redirectUrl}`);
});
