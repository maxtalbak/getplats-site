// Where the "Get Plats" buttons point. Fill in one; the App Store link wins once the app is live.
window.PLATS = {
  // The app's App Store page, such as "https://apps.apple.com/app/id1234567890". Empty until launch.
  appStoreURL: "",
  // The TestFlight public link for the beta, such as "https://testflight.apple.com/join/AbCdEf12". Empty until created.
  testFlightURL: ""
};

// Sets up every element marked data-get-app: its link and its label.
document.addEventListener("DOMContentLoaded", function () {
  var cfg = window.PLATS || {};
  var href = cfg.appStoreURL || cfg.testFlightURL || "";
  var label = cfg.appStoreURL ? "Get Plats on the App Store"
    : cfg.testFlightURL ? "Join the iPhone beta"
    : "Coming soon to iPhone";
  var note = cfg.appStoreURL ? "Free for iPhone · iOS 17 or later"
    : cfg.testFlightURL ? "Free beta through Apple's TestFlight · iOS 17 or later"
    : "Plats is in a closed beta in Stockholm.";
  document.querySelectorAll("[data-get-app]").forEach(function (el) {
    var text = el.querySelector("[data-label]");
    if (text) text.textContent = label;
    if (href) {
      el.setAttribute("href", href);
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
    }
  });
  document.querySelectorAll("[data-get-app-note]").forEach(function (el) { el.textContent = note; });
});
