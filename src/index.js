/*
  Redirect to a subdomain of exmaple.com. It is expected that the full URL will be preserved, but the DNS won't resolve as example.com doesn't support this. This is expected behaviour. However, as the redirect is based on the location of the user, it is very difficult to test the various outcomes.
*/

// Define a fall-back host, which will be used as a fallback or if none of the countries are matched.
const newHost = 'example.com';

// Data with the hosts of the countries we want to redirect to - The key needs to remain lowercase
const countryMap = {
  us: 'us.example.com',
  au: 'au.example.com',
  gb: 'uk.example.com'
}


// Default event
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// Handling the request within the event
const handleRequest = async (request) => {
  // Save the request as a new Request
  request = new Request(request);

  // Save the requested URL as an object
  const url = new URL(request.url);

  // Store the country  in lowercase - info: https://support.cloudflare.com/hc/en-us/articles/200168236-What-does-Cloudflare-IP-Geolocation-do-
  // Please note, does not work in preview
  const country = request.headers.get('cf-ipcountry').lower();

  // Change the host name by default, we may override this; but this is the safest way to ensure that the redirect will happen
  url.host = newHost;
  
  // Now we double check the country of origin and map the host name; for now, we will store it as a HTTP response header
  if (country != null && country in countryMap){

    // set the custom HTTP response header
    url.host = countryMap[country];
  
  }

  // Return the response/redirect
  return Response.redirect(url, 307);
}
