# Proces hidracije u Next.js

## 🔹 Što je hidracija u Next.js?

Hidracija je proces u kojem:

- Browser dobije HTML renderiran na serveru (SSR ili SSG).
- Next.js na klijentu "poveže" taj HTML s React-om, dodajući event listenere, stanje, i funkcionalnosti.

⛲ Zato se zove hidracija – “zalijeva” suhi HTML s dodatnim funkcionalnostima

---

## 🔹 Zašto se to radi?

Kako bi se postigla:

- **Brži prikaz sadržaja:** korisnik odmah vidi sadržaj jer je HTML renderiran na serveru.
- **Interaktivnost:** kad JS stigne, stranica "oživi" (npr. dugmad, obrasci, modalna prozori...).

---

## 🔹 Kako izgleda proces korak po korak?

1. ✅ **Server rendera stranicu** pomoću Reacta i pošalje gotov HTML klijentu.
2. 📄 **Browser prikaže HTML** odmah (nema čekanja na JS).
3. 📦 **Next.js JS bundle se učita** (to uključuje tvoje komponente, logiku, itd.).
4. 💧 **React usporedi DOM** koji je server generirao s onim što bi renderao klijent → ako je sve isto, samo veže event listenere.
5. 🧠 **Stranica postaje interaktivna** (click handleri, state, itd.).

---

## 🔹 Što ako server ne pošalje HTML koji bi se generirao na klijentu?

Ako server pošalje HTML koji **nije isti** kao ono što bi React renderirao na klijentu, dolazi do **hydration mismatch-a**. Evo što se tada događa i zašto je to bitno.

🔍 1. Nakon učitavanja JS bundle-a, React uspoređuje server-renderirani HTML s vlastitim renderiranjem na klijentu.

🚨 2. Ako postoje razlike, react izbacuje `hydration mismatch` warning, npr:

```bash
Warning: Content did not match. Server: "Hello" Client: "Hello there!"
```

🧨 3. Posljedice

- ✅ Male razlike:
  Warning u konzoli.
  Rerender tog dijela DOM-a.
  Potencijalni vizualni "flicker".

- ❌ Veće razlike:
  React može rerenderirati cijeli komponentni subtree.
  Mogu se resetirati forme, layout se “preskoči”.
  U nekim slučajevima – greška u React-u.

📦 4. Najčešći uzroci mismatch-a su `window`, `localStorage`, `navigator` direktno u render funkciji. Npr.

```tsx
// ❌ Loše
const isMobile = window.innerWidth < 768;
return <p>{isMobile ? "Mobile" : "Desktop"}</p>;

// ✅ Dobro
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);
```
