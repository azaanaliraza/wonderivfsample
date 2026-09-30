# Contact Us — Content Inventory

## Meta
- **URL:** https://wonderivf.com/contact-us/
- **Meta title (`<title>`):** Book IVF Consultation in Mumbai, India | Contact Wonder IVF Today!
- **Meta description:** Ready to take the next step? Book IVF consultation in Mumbai, India and contact Wonder IVF today for personalised fertility guidance and treatment support.
- **Canonical:** https://wonderivf.com/contact-us/
- **Breadcrumb as rendered:** Home > Contact us
  - **BROKEN HREF:** the Home breadcrumb links to `https://websites.midinnings.com/wonderivf/` (staging/dev domain) instead of https://wonderivf.com/ → **PLACEHOLDER/BROKEN LINK**

## H1 / Page title
- **H1:** Contact *us* (italic span on "us")

## Headings in order (H2/H3/H4)
- H2: Contact US
  - H3: Corporate Office
  - H3: Contact Info
  - H3: Follow US
  - H3: Book a Consultation
    - H4: GRIEVANCES AND THEIR REDRESSAL:
    - H4: Committee: Wonder IVF Grievance redressal committee
    - H4: Officer in Chief-Grievance Committee:
    - H4: Responsibilities:
- H2: Our Locations
  - H3: Mumbai - (Upcoming Centers)
    - H5: Wonder IVF and Childcare Private Limited
  - H3: Kolhapur - (Upcoming Centers)
    - H5: Wonder IVF and Childcare Private Limited

> NOTE: "Book a Consultation" (H3) renders as a form section header in the DOM; the actual input fields did not render in the markdown capture — see Form fields section below.

## Body content (verbatim)

### Contact US
At Wonder IVF, we provide expert guidance, compassionate care, and a welcoming environment to support you confidently throughout your fertility journey.

### Corporate Office
Plot No. 1, C Block, Meera Nagar, Udaipur, 313001, Rajasthan-In

### Contact Info
- [+91-70734-31122](tel:+91-70734-31122)
- [info@wonderivf.com](mailto:info@wonderivf.com)

### Follow US
- https://www.facebook.com/WonderIVFIndia/
- https://www.instagram.com/wonder.ivf/
- https://www.linkedin.com/company/wonderivf/
(icons only, no visible link text)

### Book a Consultation
(Form section header — see Form fields below.)

#### GRIEVANCES AND THEIR REDRESSAL:
As mandated under the Information Technology Act and the Assisted Reproductive Technology (Regulation) Act, we have established a dedicated Grievance Cell. The contact details of the officer responsible for handling grievances are listed below:

#### Committee: Wonder IVF Grievance redressal committee

#### Officer in Chief-Grievance Committee:
**Name:** (blank — **PLACEHOLDER/MISSING: officer name not filled in**)
**Designation:**  Sr. Manager – Grievance Cell (head office)
**Email:**  grievance@wonderivf.com
**Address:** Plot No. 1, C Block, Meera Nagar, Udaipur, Rajasthan-In – 313001

#### Responsibilities:
- Review all complaints that are not resolved to the satisfaction of the patient or the patient advocate by the staff present.
- Guide their Patient Relations Department in providing written responses to unresolved grievances after the initial patience relations response to the patient or the patient's advocate.
- Investigate grievances, as appropriate.
- Determine an appropriate resolution.
- Identify and prioritise opportunities to improve patient and family experiences.

**Downloads:**
- "Download Grievance form – English" → https://wonderivf.com/wp-content/uploads/2026/09/Grievance-Form-Engish.pdf (filename misspelled "Engish" — verbatim)
- "Download Grievance form – Hindi" → https://wonderivf.com/wp-content/uploads/2026/09/Grievance-Form-hindi.pdf

### Our Locations

#### Mumbai - (Upcoming Centers)
##### Wonder IVF and Childcare Private Limited
Unit 203-205, 2nd Floor, Lotus Link Square, Andheri West, Mumbai, Maharashtra 400053

**Phone :** rendered as two separate link fragments — displayed text is split/broken:
- `[+91-](tel:+918208710244)` → the "+91-" fragment **dials the Kolhapur number 9216073621's counterpart** (href is `tel:+918208710244`) → **BROKEN MISMATCH**
- `[9216073621](tel:+919216073621)` → second fragment
- Combined display appears to be "+91-9216073621" but markup is malformed → **FLAG: broken phone link markup on Mumbai card**

**Get Direction:** https://maps.app.goo.gl/Tc3TpiRj6pxmVkRTA

#### Kolhapur - (Upcoming Centers)
##### Wonder IVF and Childcare Private Limited
Office No. 503, 505–508 Royal 09, Tourist Hub Station Road, Kolhapur, Maharashtra 416001

**Phone :** [+91-8208710244](tel:+918208710244)

**Get Direction:** https://maps.app.goo.gl/U9qZabY5KXmKo9Mw6

## CONTACT DETAILS INVENTORY (critical)

### Phone numbers (exact as they appear)
| Displayed | Href | Location | Flag |
|---|---|---|---|
| +91-70734-31122 | `tel:%20+258-8520` | Header top bar | **BROKEN HREF (nonsense number 258-8520) — PLACEHOLDER** |
| +91-70734-31122 | `tel:+91-254-882-963` | "Curious About IVF? Let's Talk." CTA block | **BROKEN HREF (wrong number 254-882-963) — PLACEHOLDER** |
| +91-70734-31122 | `tel:+917073431122` | Hero CTA, footer, sticky widget | OK |
| +91-70734-31122 | `tel:+91-70734-31122` | Contact Info block | OK |
| +91-9216073621 | `tel:+919216073621` | Footer Andheri centre | OK-ish (displayed); note footer variant `tel:%20+919216073621` has stray space |
| +91-8208710244 | `tel:%20+919216073621` | Footer Kolhapur centre | **BROKEN: dials Andheri number** |
| "+91-" fragment + "9216073621" fragment | `tel:+918208710244` / `tel:+919216073621` | Contact page Mumbai card | **BROKEN MARKUP — mixed numbers** |
| +91-8208710244 | `tel:+918208710244` | Contact page Kolhapur card | OK |
| +917073431122 | `https://api.whatsapp.com/send?phone=+917073431122` | Sticky WhatsApp widget | OK |

### Emails
| Address | Href | Location | Flag |
|---|---|---|---|
| info@wonderivf.com | `mailto:info@domainname.com` | Header top bar | **PLACEHOLDER HREF (domainname.com)** |
| info@wonderivf.com | `mailto:%20info@domainname.com` | "Curious About IVF?" CTA block | **PLACEHOLDER HREF + leading space** |
| info@wonderivf.com | `mailto:info@wonderivf.com` | Contact Info, footer, closing CTAs, sticky widget | OK |
| grievance@wonderivf.com | (plain text / not a mailto in capture) | Grievance Officer block | Note: appears as text only in capture |

### Addresses
1. **Corporate Office (header + footer + contact page):** Plot No. 1, C Block, Meera Nagar, Udaipur, Rajasthan-In – 313001
   - Contact-page variant: "Plot No. 1, C Block, Meera Nagar, Udaipur, 313001, Rajasthan-In" (formatting differs)
   - **"Rajasthan-In" appears to be a typo for "Rajasthan, India" — flag (appears site-wide)**
2. **Mumbai/Andheri centre (header top bar):** Unit 203, 204 and 205, Second Floor, Lotus Link Square, DN Nagar Link Road, Andheri West, Mumbai – 400053
3. **Mumbai/Andheri centre (contact page + footer + locations):** Unit 203-205, 2nd Floor, Lotus Link Square, Andheri West, Mumbai, Maharashtra 400053 (footer variant has double space before "– 400053")
4. **Kolhapur centre:** Office No. 503, 505–508 Royal 09, Tourist Hub Station Road, Kolhapur, Maharashtra 416001 (locations-page variant: "Kolhapur – 416001, Maharashtra")

### Map links
- Andheri Get Direction → https://maps.app.goo.gl/Tc3TpiRj6pxmVkRTA
- Kolhapur Get Direction → https://maps.app.goo.gl/U9qZabY5KXmKo9Mw6

### WhatsApp
- Sticky widget: https://api.whatsapp.com/send?phone=+917073431122 (label "WhatsApp", text "+917073431122")
- No WhatsApp link inside the main contact content — only the sticky widget.

### Office hours
- **NONE FOUND — PLACEHOLDER/MISSING: no office hours / timings are published anywhere on the contact page.**

### Grievance contacts
- Committee: Wonder IVF Grievance redressal committee
- Officer in Chief-Grievance Committee: **Name: (blank — MISSING)**
- Designation: Sr. Manager – Grievance Cell (head office)
- Email: grievance@wonderivf.com
- Address: Plot No. 1, C Block, Meera Nagar, Udaipur, Rajasthan-In – 313001
- Forms: Grievance-Form-Engish.pdf (English), Grievance-Form-hindi.pdf (Hindi)

## Form fields
- Section header: **"Book a Consultation"** (H3)
- No input fields, labels, placeholders, or submit button were rendered in the markdown/HTML capture of the form area — the form did not expose its fields to the crawler.
- **FLAG: FORM FIELDS NOT CAPTURED / POSSIBLY EMPTY — verify in browser before rebuild.**
- Separately, the Andheri and Kolhapur centre pages have a "Choose Services" select with options: In Vitro Fertilization (IVF), Egg Freezing, Embryo Freezing, Fertility Preservation, Surrogacy Support, Male Fertility Care, Ovulation Induction, PGT (Genetic Testing).

## CTA texts
- "Book An Appointment" (header) → https://wonderivf.com/contact-us/ (self)
- Grievance form download buttons (2)
- "Get Direction" (x2) → map links
- Sticky: WhatsApp / Phone / Email

## FAQ on this page
None.

## Images (absolute URLs + alt)
| Image URL | Alt / title |
|---|---|
| https://wonderivf.com/wp-content/uploads/2025/04/wonder-ivf-mumbai-india.png | Wonder IVF Mumbai, India providing expert fertility treatments for hopeful parents (header/footer logo) |
| https://wonderivf.com/wp-content/uploads/2026/08/female-fertility-treatment-mumbai.webp | Female fertility treatment and reproductive care at Wonder IVF Mumbai — hero/banner |
| https://wonderivf.com/wp-content/uploads/2026/05/logo-white.png (referenced in Yoast schema as org logo) | Wonder IVF |

## Internal links (page body)
- **BROKEN:** Home breadcrumb → https://websites.midinnings.com/wonderivf/ (staging domain — PLACEHOLDER)
- https://wonderivf.com/contact-us/ (header CTA, self)
- Grievance PDFs (2 URLs above)
- Map links (2)
- Social: Facebook, Instagram, LinkedIn

## Global header (appears on every page)
- "+91-70734-31122" → `tel:%20+258-8520` → **PLACEHOLDER/BROKEN**
- "info@wonderivf.com" → `mailto:info@domainname.com` → **PLACEHOLDER/BROKEN**
- Address: Unit 203, 204 and 205, Second Floor, Lotus Link Square, DN Nagar Link Road, Andheri West, Mumbai – 400053
- Nav: Home; About (About Us → /about-us/, Vision & Mission → /vision-and-mission/, Founder & Director → /founder-and-director/, Leadership → /leadership/, Our Team → /?page_id=3583, Our Doctors → /our-doctors/); "Services (Upcoming)" (no link); "Locations (Upcoming)" (no link); Partner With Us → /partner-with-us/; Blog → /blog/; Contact Us → /contact-us/; "X"; "Book An Appointment" → /contact-us/

## Global footer (appears on every page)
- Corporate Office: Plot No. 1, C Block, Meera Nagar, Udaipur, Rajasthan-In – 313001 ; +91-7073431122 ; info@wonderivf.com
- Follow US: Facebook / Instagram / LinkedIn
- Quick Links: Home, About Us, Partner With Us, Technology and Infrastructure, Blog, Contact Us
- Our Policy: Privacy Policy (https://wonderivf.com/privacy-policy/), Disclaimer (https://wonderivf.com/disclaimer/), FAQs (https://wonderivf.com/faqs/), Terms & Conditions (https://wonderivf.com/terms-conditions/)
- Upcoming Centers: Andheri (map https://maps.app.goo.gl/Tc3TpiRj6pxmVkRTA, phone +91-9216073621) ; Kolhapur (map https://maps.app.goo.gl/U9qZabY5KXmKo9Mw6, phone +91-8208710244 → `tel:%20+919216073621` **BROKEN**)
- Copyright © 2026 Wonder IVF All Rights Reserved. / Design by Midinnings (https://midinnings.com/)
- Sticky widget: WhatsApp / Phone / Email (URLs above)
