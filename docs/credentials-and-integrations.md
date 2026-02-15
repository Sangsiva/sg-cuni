# Credentials & Integration Keys

Reference document for third-party service IDs and integration snippets.
**Do NOT commit actual secret keys to git.** Store secrets in `.env` files only.

---

## Google Analytics (GA4)

**Measurement ID:** `G-JLH7CYN402`

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JLH7CYN402"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JLH7CYN402');
</script>
```

---

## Google Search Console

**Verification Content:** `b98_8foltEIsG6G-AfY1WrEo2ZPRgSs_7vWLLhFlgZw`

```html
<meta name="google-site-verification" content="b98_8foltEIsG6G-AfY1WrEo2ZPRgSs_7vWLLhFlgZw" />
```

---

## Other Services

- **Resend API** - Email sending (key in `.env`)
- **Google Sheets API** - Lead capture (service account key in `.env`)
- **WhatsApp Business** - `+65 8017 6492`
- **Email** - `enquiry@sgcorpuniforms.com`
