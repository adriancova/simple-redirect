import "@loadEnvFile";

const redirectUrl = Deno.env.get("redirectUrl");
if (!redirectUrl) {
  throw Error("Missing redirect url!");
}

new URL(redirectUrl); // done to crash if string is not a valid url

Deno.serve((req) => {
  console.log(`Redirecting ${req.url} to ${redirectUrl}`);
  const url = new URL(req.url);
  const location = `${redirectUrl}${url.pathname}${url.search}`;
  return new Response(null, {
    status: 301,
    headers: new Headers({
      "Location": location,
    }),
  });
});
