# FinGuard Insights V6

## Homepage update
- Editorial-first homepage: investigations, research desks and official regulatory notices lead the page.
- Hero copy reframed as independent financial-safety and regulatory analysis.
- Homepage features a fixed editorial selection: MCC/card-dispute analysis, dispute windows, offshore Forex regulation, broker price-display concerns, high-yield investment claims and recovery scams.
- Homepage and investigation cards use real editorial stock photography from Unsplash; article-page photos are no longer replaced by generated SVG artwork. Images use consistent crops, lazy loading where appropriate, descriptive alt text and a fallback image.
- Regulatory ticker and alert table link to individual FCA warning notices and show source dates.
- The homepage keeps its weekly digest request form. Each article retains its five-step transaction/platform assessment and enquiry form.
- Legacy quiz URLs redirect to the digest section.
- Legacy quiz links on non-article pages lead to the digest; links on article pages lead to that article's assessment.
- Privacy Policy no longer describes the old quiz or IP-based phone-code lookup.

## Newsletter status
The current site is deployed on GitHub Pages, which serves static files only. The digest form opens a prefilled email request to `compliance@finguard-insights.com`; it does not automatically store subscribers or send campaigns. The article assessment now has client-side step navigation and attempts to POST to `submit.php`; GitHub Pages cannot execute PHP, so it falls back to a prefilled email request. For reliable automatic lead capture, deploy the PHP endpoint on a PHP-capable host or connect an approved form backend. Update the privacy notice before connecting any new processor.

## Regulatory notices
The homepage uses dated notices from the FCA and links to the original regulator pages. The snapshot is editorially maintained, not a live regulator API. Recheck every notice before changing the dates or status.

## Before public launch
- Verify the publication's legal operator, working contact email and real business address.
- Confirm the privacy notice against the actual hosting, email, analytics and advertising setup.
- Add an unsubscribe process and update the privacy policy before activating a mailing-list provider.
- Do not publish unverified warnings, invented metrics, fabricated testimonials or guaranteed outcomes.
- Test all internal links, mobile layout and the GitHub Pages deployment after each update.

## Editorial homepage and photographs
- The homepage contains six static, crawlable, fully clickable article cards, even if JavaScript is disabled. Priority topics are withdrawal lockouts, offshore Forex brokers, card disputes, suspicious price feeds, unrealistic investment returns and recovery scams.
- The hero includes a clickable editorial photograph leading to the offshore Forex explainer. Article images open in an accessible enlarge-photo dialog when JavaScript is enabled.

## Article assessment
- The same five-step assessment is embedded in all 30 articles; there is no country-of-residence selection. The phone-prefix dropdown may use the browser language region as an initial suggestion, with manual correction available.
- The static GitHub Pages preview cannot run `submit.php`; the enquiry falls back to a prefilled email that the visitor must send. No lead should be counted as received until the email is actually sent and received. A production form backend is still required.

## Photo deployment
- GitHub Actions downloads the shared Unsplash editorial photographs into the deployed `assets/photos/` directory and rewrites article and homepage image URLs to local paths when download succeeds. If the image host is temporarily unavailable at build time, original image URLs remain as a fallback. Images are illustrative and not representations of a specific case.
