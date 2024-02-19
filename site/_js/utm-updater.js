// utm-updater.js
function updateUTMParameters() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    const url = new URL(link.href);

    // Check if the URL is pointing to privacysandbox.info
    if (url.hostname === 'privacysandbox.info') {
      // Skip updating UTM parameters for our own URL
      return;
    }

    if (url.hostname) {
      // Update UTM parameters for external links
      url.searchParams.set('utm_source', 'psat');
      url.searchParams.set('utm_medium', 'extension');

      // Update the href attribute of the link
      link.href = url.toString();

      // Open external links in a new tab
      link.target = '_blank';
      // Add rel="noopener noreferrer" for security and performance reasons
      link.rel = 'noopener noreferrer';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateUTMParameters();
});
