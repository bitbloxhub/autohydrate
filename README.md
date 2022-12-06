# autohydrate: simple island hydration

code is formated with `deno fmt` with my deno.json

only 183 bytes when minified with `esbuild --minify autohydrate.ts --outfile=autohydrate.min.js`

to use:

- export a default async function in a js file
- put `data-autohydrate="url_here"` on your element, where url_here is the url of your previous file
- run a script that awaits the default export of [autohydrate.ts](autohydrate.ts) with the argument of the root element to start looking from (probably body)
