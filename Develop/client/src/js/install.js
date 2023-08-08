const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome showing the prompt
    event.preventDefault();
    window.deferredPrompt = event;
    // Show the modal add to home screen dialog
    butInstall.style.display = 'block';
  });
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide install button
    butInstall.style.display = 'none';
    const deferredPrompt = window.deferredPrompt;

    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    
    const choiceResult = await deferredPrompt.userChoice;
    
    window.deferredPrompt = null;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // App was installed
    console.log('App was successfully installed!');
  });
