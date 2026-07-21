# Image Asset Manifest

Place every file below into `public/images/`, named exactly as shown
(all lowercase, hyphen-separated, `.webp`). The code references these exact
filenames — nothing is a placeholder or remote URL.

| File Name | Purpose | Recommended Image | Orientation | Min. Resolution |
|---|---|---|---|---|
| `hero-doctor.webp` | Hero section portrait | Dr. Abhilekh standing confidently, arms relaxed or folded, clinical background softly blurred | Portrait | 1600×2200 |
| `about-doctor.webp` | About section primary photo | Dr. Abhilekh smiling naturally in a clinic corridor or office | Portrait | 1400×1800 |
| `about-consultation.webp` | About section inset photo | Dr. Abhilekh seated, speaking with a patient | Landscape | 1200×900 |
| `clinic-interior.webp` | "Why Choose Us" background + Clinic Info schema image | Wide shot of reception/waiting lounge, warm lighting | Landscape | 2000×1400 |
| `laser-procedure.webp` | Technology showcase — laser system | Holmium/thulium laser console or procedure in progress | Landscape | 1800×1200 |
| `equipment.webp` | Technology showcase — robotic platform | Da Vinci robotic arm or console, or general modern equipment | Landscape | 1800×1200 |
| `kidney-model.webp` | Technology showcase — diagnostics | Anatomical kidney model or 3D imaging screen | Landscape | 1600×1200 |
| `gallery-doctor-1.webp` | Gallery — doctor category | Dr. Abhilekh in the consultation room | Portrait | 1200×1500 |
| `gallery-doctor-2.webp` | Gallery — doctor category | Dr. Abhilekh reviewing scans/reports | Portrait | 1200×1500 |
| `gallery-clinic-1.webp` | Gallery — clinic category | Reception area | Portrait | 1200×1500 |
| `gallery-clinic-2.webp` | Gallery — clinic category | Waiting lounge, different angle | Portrait | 1200×1500 |
| `gallery-clinic-3.webp` | Gallery — clinic category | Clinic exterior facade / signage | Portrait | 1200×1500 |
| `gallery-surgery-1.webp` | Gallery — operation theatre category | Robotic or laser surgery in progress (generic/anonymized) | Portrait | 1200×1500 |
| `gallery-surgery-2.webp` | Gallery — operation theatre category | Operation theatre setup, no identifiable patient | Portrait | 1200×1500 |
| `gallery-equipment-1.webp` | Gallery — equipment category | Laser lithotripsy machine close-up | Portrait | 1200×1500 |
| `gallery-equipment-2.webp` | Gallery — equipment category | Ultrasound / imaging suite | Portrait | 1200×1500 |
| `gallery-team-1.webp` | Gallery — team category | Dr. Abhilekh with nursing/clinical staff | Portrait | 1200×1500 |
| `gallery-team-2.webp` | Gallery — team category | Clinical team huddle/briefing | Portrait | 1200×1500 |
| `gallery-awards-1.webp` | Gallery — awards category | Dr. Abhilekh receiving a medical honour or speaking at a conference | Portrait | 1200×1500 |
| `before-treatment.webp` | Before/After comparison slider | Diagnostic scan (e.g. CT/X-ray showing stone) before treatment | Landscape | 1600×1000 |
| `after-treatment.webp` | Before/After comparison slider | Matching diagnostic scan after successful treatment | Landscape | 1600×1000 |
| `testimonial-1.webp` | Patient testimonial avatar | Patient portrait (with consent), warm and approachable | Square | 600×600 |
| `testimonial-2.webp` | Patient testimonial avatar | Patient portrait (with consent) | Square | 600×600 |
| `testimonial-3.webp` | Patient testimonial avatar | Patient portrait (with consent) | Square | 600×600 |
| `footer-bg.webp` | Footer background texture | Subtle, dark clinic interior or abstract medical texture, will sit under a dark overlay | Landscape | 2000×1200 |

**Total: 24 images.**

## Notes

- All images should be exported as `.webp` for optimal compression; `next/image`
  will further optimize them at request time.
- Portrait gallery images are recommended at a consistent 4:5 aspect ratio so the
  masonry grid stays visually even.
- For any image involving patients (testimonials, gallery "team"/"surgery" shots),
  make sure you have documented consent to use their likeness publicly.
- If a listed file is missing at build time, `next/image` will render a broken
  image icon in that slot — the rest of the page will still function normally.
