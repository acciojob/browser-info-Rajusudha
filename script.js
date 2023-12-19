//your JS code here. If required.
 var browserName = getBrowserName();
    var browserVersion = getBrowserVersion();

    // Display the browser information in the "browser-info" div
    var browserInfoDiv = document.getElementById('browser-info');
    browserInfoDiv.textContent = 'You are using ' + browserName + ' version ' + browserVersion;

    // Function to get the browser name
    function getBrowserName() {
      var userAgent = navigator.userAgent;
      if (userAgent.includes("Chrome")) return "Google Chrome";
      if (userAgent.includes("Firefox")) return "Mozilla Firefox";
      if (userAgent.includes("Safari")) return "Apple Safari";
      if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) return "Internet Explorer";
      if (userAgent.includes("Edge")) return "Microsoft Edge";
      return "Unknown";
    }

    // Function to get the browser version
    function getBrowserVersion() {
      var userAgent = navigator.userAgent;
      var versionIndex = userAgent.indexOf("Version/");
      if (versionIndex !== -1) {
        return userAgent.substring(versionIndex + 8, userAgent.indexOf(" ", versionIndex));
      }
      return "Unknown";
    }