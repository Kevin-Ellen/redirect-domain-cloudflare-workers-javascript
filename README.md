# 👷 What I do
I redirect every request using a 307-Temporary Redirect to point to the example.com host, preserving the full URL. I may use a subdomain, if the request originates from AU, US or the UK. Don't be alarmed if this happens and the domain is not shown, as example.com doesn't support subdomains! This is expected behaviour.

## Deployment
* Cloudflare Wrangler

## Development
* JavaScript

## Testing
* Domain: https://geo-redirect-domain.croud-testing.workers.dev

1) Open a page on the test domain (example: https://geo-redirect-domain.croud-testing.workers.dev/hello-world?param=value)
2) Confirm you see a 302 redirect
3) Confirm that the redirect changed the host, but preserved the path and parameter.

## Documentation
* Cloudflare Workers: https://developers.cloudflare.com/workers/
* Cloudflare Workers Examples: https://developers.cloudflare.com/workers/examples
* Cloudflare Wrangler: https://github.com/cloudflare/wrangler

## Developed by
Kevin Ellen, Global Director of Web Experience