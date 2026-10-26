const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

// Injects Google Analytics 4 only when GA_MEASUREMENT_ID is set in the
// hosting environment. Events never include names, emails or message text.
export function withAnalytics(html: string): string {
  const id = process.env.GA_MEASUREMENT_ID?.trim();
  if (!id || !GA_ID_PATTERN.test(id)) return html;

  const snippet = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
    document.addEventListener('click', function (e) {
      var link = e.target.closest && e.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href') || '';
      if (href.indexOf('mailto:') === 0) {
        gtag('event', 'contact_email_click');
      } else if (href.indexOf('tel:') === 0) {
        gtag('event', 'contact_phone_click');
      } else if (link.hostname && link.hostname.indexOf('thumbtack.com') !== -1) {
        gtag('event', 'thumbtack_click');
      }
    });
  </script>
`;
  return html.replace("</head>", `${snippet}</head>`);
}
