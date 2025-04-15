# 🚀 Vrste renderiranja u Next.js-u

Next.js pruža nekoliko različitih načina renderiranja, svaki pogodan za specifične situacije i potrebe.

---

## 🌍 1. Statičko generiranje (Static Site Generation - SSG)

🔹 **Opis:**
Stranice se generiraju unaprijed prilikom izgradnje aplikacije i posluživane su kao statičke HTML datoteke.

🔸 **Kada koristiti?**

- Blogovi
- Marketinške stranice
- Dokumentacije

✨ **Prednosti:**

- Izuzetno brzo učitavanje ⚡
- Bolja sigurnost 🔒
- SEO prijateljski ✅

⏳ **Mane:**

- Sadržaj se ne ažurira često (potrebno ponovno generiranje)

---

## ⚡ 2. Serversko renderiranje (Server-side Rendering - SSR)

🔹 **Opis:**
Svaki zahtjev korisnika rezultira generiranjem HTML-a na poslužitelju prije slanja stranice korisniku.

🔸 **Kada koristiti?**

- Dinamički sadržaj (npr. trgovine, portali)
- SEO ovisan o ažurnim podacima

✨ **Prednosti:**

- Uvijek ažurni podaci 📆
- Bolje za SEO kod dinamičnog sadržaja 📈

⏳ **Mane:**

- Malo sporije od SSG-a jer se generira pri svakom zahtjevu
- Veće opterećenje poslužitelja 🖥️

---

## 🔄 3. Inkrementalno statičko generiranje (Incremental Static Regeneration - ISR)

🔹 **Opis:**
Kombinacija SSG-a i SSR-a. Omogućava periodično osvježavanje statički generiranih stranica.

🔸 **Kada koristiti?**

- Web stranice s umjereno dinamičnim sadržajem
- Sadržaj koji se mijenja povremeno (npr. vijesti)

✨ **Prednosti:**

- Brzina statičkih stranica 🚀
- Dinamička ažuriranja bez ponovne izgradnje 🔄

⏳ **Mane:**

- Malo složenije podešavanje

---

## 🔍 4. Klijentsko renderiranje (Client-side Rendering - CSR)

🔹 **Opis:**
Stranica se generira u pregledniku korisnika pomoću JavaScripta nakon inicijalnog preuzimanja minimalnog HTML-a.

🔸 **Kada koristiti?**

- Korisničke nadzorne ploče
- Web aplikacije s mnogo interakcija

✨ **Prednosti:**

- Brza interakcija i navigacija unutar aplikacije 🎯
- Manje opterećenje na server 🛠️

⏳ **Mane:**

- Početno sporije učitavanje
- Slabija SEO optimizacija 📉

---

## 📌 Sažeta usporedba

| Način renderiranja | Brzina ⚡   | Dinamičnost 🔄 | SEO 🔍   | Opterećenje servera 🖥️ |
| ------------------ | ----------- | -------------- | -------- | ---------------------- |
| SSG 🌍             | ✅ Brzo     | ❌ Niska       | ✅ Visok | ✅ Nisko               |
| SSR ⚡             | ⚠️ Umjereno | ✅ Visoka      | ✅ Visok | ⚠️ Visoko              |
| ISR 🔄             | ✅ Brzo     | ⚠️ Umjerena    | ✅ Visok | ⚠️ Umjereno            |
| CSR 🔍             | ⚠️ Umjereno | ✅ Visoka      | ❌ Nizak | ✅ Nisko               |

---
