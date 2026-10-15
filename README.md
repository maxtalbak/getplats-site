# getplats.com

The website for Plats, served by GitHub Pages.

- `index.html`: the landing page.
- `b/`: the page a shared booking link opens when the person doesn't have Plats. The booking is packed into the link after `#`, so it is read in the browser and never sent to the server.
- `.well-known/apple-app-site-association`: tells iPhones to open `getplats.com/b` links in the Plats app when it is installed.
- `assets/config.js`: where the "Get Plats" buttons point. Fill in `testFlightURL` for the beta and `appStoreURL` at launch.

Familjen Grotesk is by Familjen STHLM and used under the SIL Open Font License.
- `catalogue.json`: restaurants added for everyone. The app downloads it on launch and shows the restaurants from the next launch. Each entry has the same fields as the app's built-in list, with `"tier": "listed"`.
