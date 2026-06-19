# UI/UX DESIGN & CONTENT ARCHITECTURE: LADDIFY LANDING PAGE

## 1. SCROLL-LINKED 3D ANIMATION SYSTEM (CRUCIAL)
Landing page ini wajib memiliki efek imersif menggunakan elemen "3D Floating Spheres" (bola-bola 3D putih halus) yang bereaksi terhadap *scroll* pengguna.
*   **Tech Stack Animasi:** Gunakan `useScroll` dan `useTransform` dari `framer-motion`.
*   **Perilaku Bola (Parallax Effect):** 
    *   Buat komponen `<FloatingSpheresBackground />` yang diletakkan secara `fixed` atau `absolute` menutupi layar.
    *   Mapping nilai `scrollY` ke properti `y`, `scale`, dan `rotate` pada bola-bola tersebut. 
    *   **Efek Imersif:** Saat pengguna melakukan *scroll* ke bawah, beberapa bola harus bergerak ke atas dengan kecepatan lambat (foreground), sementara bola lainnya bergerak lebih cepat atau sedikit membesar (background), menciptakan ilusi kedalaman 3D (*parallax depth*).

## 2. THE DUAL-FONT SYSTEM & LIGHT-GLASSMORPHISM
*   **Heading:** `Gerhaus` (Display Font).
*   **Body & Paragraphs:** `Codec Pro` (Readability Font).
*   **Tema:** Light-Glassmorphism (Background `#FAFAFC` dengan efek `backdrop-blur` pada card, shadow sangat halus, dan hairline border transparan).
*   **Aksen Brand:** Gradient `#FF73C3` -> `#7B4DFF` -> `#20D6FF`.

---

## 3. PAGE CONTENT & SECTION MAPPING (FROM OFFICIAL DECK)

### SECTION 1: HERO & VISION
*   **Animasi:** Bola 3D merespons gerakan *mouse* (menggunakan `useMotionValue` / `useSpring`) sebelum pengguna mulai *scroll*.
*   **Headline:** Scale It, Laddify It.[cite: 1]
*   **Sub-headline (Vision):** We believe every business has the potential to grow bigger and stronger.[cite: 1] With Laddify Social Media Management, we help you unlock that potential by improving your brand image, expanding your reach, and optimizing your marketing efforts.[cite: 1] So your business not only grows, but stands out.[cite: 1]
*   **CTA:** "Get Free Consultation" -> Arahkan ke WhatsApp 081805877845 (IVO)[cite: 1].

### SECTION 2: OUR VALUE (BENTO GRID OR CARDS)
Gunakan layout 4 kotak dengan komponen `.apple-glass-card`.
*   **Header:** Our Value[cite: 1]
*   **Value 1:** Ensure consistency in your brand's visual identity and messaging.[cite: 1]
*   **Value 2:** Provide well-crafted content based on in-depth research.[cite: 1]
*   **Value 3:** Adapt the tone of communication to align perfectly with your brand's personality and audience.[cite: 1]
*   **Value 4:** Focus on delivering measurable results to help your brand grow and stay ahead of the competition.[cite: 1]

### SECTION 3: PRICING PACKAGES (WITH TOGGLE SWITCH)
*   **UI:** Gunakan Framer Motion Toggle Switch (Basic Packages vs Premium Packages).

**TAB 1: Basic Packages**[cite: 1]
1.  **Elite (IDR 2.400.000,-/Month):** 10 Feeds Posts, 5 Video Reels, Story Hari Raya Greeting, Copywriting + Caption & Hastag, Posting.[cite: 1]
2.  **Core (IDR 3.600.000,-/Month):** 12 Feeds Posts, 6 Video Reels, Story Hari Raya Greeting, Copywriting + Caption & Hastag, Posting.[cite: 1]
3.  **Prime (IDR 4.800.000,-/Month):** 16 Feeds Posts, 10 Video Reels, Story Hari Raya Greeting, Copywriting + Caption & Hastag, Posting.[cite: 1] *(Highlight card ini dengan label "Most Popular")*.

**TAB 2: Premium Packages**[cite: 1]
1.  **Elite (IDR 3.600.000,-/Month):** 3 Feeds Posts, 6 Video Reels, Story Hari Raya Greeting, Copywriting + Caption & Hastag, Posting, Content Performance Reports.[cite: 1]
2.  **Core (IDR 7.200.000,-/Month):** 6 Feeds Posts, 12 Video Reels, Story Hari Raya Greeting, Copywriting + Caption & Hastag, Posting, Content Performance Reports.[cite: 1]
3.  **Prime (IDR 10.800.000,-/Month):** 12 Feeds Posts, 18 Video Reels, Story Hari Raya Greeting, Copywriting + Caption & Hastag, Posting, Content Performance Reports.[cite: 1] *(Highlight card ini)*.

**Terms & Conditions (Tampilkan di bawah tabel harga):**[cite: 1]
*   Maximum 3x minor revisions for each project.[cite: 1]
*   Content concepts will be developed through discussion with the client or the client's team via online meet.[cite: 1]
*   No minimum contract duration is required.[cite: 1]
*   Full payment must be made in advance prior to the commencement of work.[cite: 1]
*   *Note:* Any additional editing or revisions beyond the agreed scope will be subject to extra charges, based on a new quotation.[cite: 1]

### SECTION 4: THE CLOSING HOOK & FOOTER
*   **Portfolio Prompt:** Gunakan ikon QR Code atau tombol besar bertuliskan "Scan for Our Portofolio" (arahkan ke link Bitly portofolio).[cite: 1]
*   **Headline:** You're exactly where you need to be.[cite: 1]
*   **Sub-headline:** If you're ready to scale, we're ready to make it happen. Let's work with us![cite: 1]
*   **Contact & Location:** 
    *   Phone: 0818-0587-7845[cite: 1]
    *   Address: Kaba Raya No.44, Semarang, Indonesia[cite: 1]

