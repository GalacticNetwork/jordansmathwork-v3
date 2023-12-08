// Check if the browser supports the Web App Install Banner
if ('getInstalledRelatedApps' in navigator) {
  navigator.getInstalledRelatedApps().then(function (apps) {
    if (apps.length === 0) {
      // Display the installation prompt
      showInstallPrompt();
    }
  });
}

// Function to display the installation prompt
function showInstallPrompt() {
  const installButton = document.createElement('button');
  installButton.innerText = 'Install App';
  installButton.addEventListener('click', function () {
    // Prompt the user to install the app
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      const promptEvent = e;
      promptEvent.prompt();
      promptEvent.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('User installed the app');
        } else {
          console.log('User dismissed the app installation');
        }
        // Clean up the install button
        installButton.parentNode.removeChild(installButton);
      });
    });
  });

  document.body.appendChild(installButton);
}