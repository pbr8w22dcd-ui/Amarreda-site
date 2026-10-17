# Amarreda — sito web

Sito statico responsive da pubblicare con GitHub Pages. Questo è un **prototipo front-end**: navigazione, questionario dimostrativo e stime illustrative funzionano nel browser, ma non sono ancora collegati a cataloghi ufficiali, agenti AI, servizi di rendering o database reali.

## Pubblicazione su GitHub Pages
1. Estrai questo ZIP.
2. Apri il repository GitHub che hai già creato.
3. Seleziona **Add file → Upload files**.
4. Carica i file e le cartelle contenuti nella cartella `amarreda_sito`, mantenendo la struttura (`css`, `js`, `pages`).
5. Fai clic su **Commit changes**.
6. Nel repository vai su **Settings → Pages**.
7. In **Build and deployment**, scegli **Deploy from a branch**.
8. Seleziona branch `main` e cartella `/(root)`, poi salva.
9. Attendi la pubblicazione: GitHub mostrerà l'indirizzo del sito nella sezione Pages.

**Importante:** non caricare soltanto il file ZIP: GitHub Pages non lo estrae automaticamente. Devono essere presenti nel repository `index.html`, le cartelle e i file del sito.

## Come personalizzarlo
- Nome, email e testi principali: `js/site-config.js`
- Profili e valori dimostrativi: `js/catalog.js`
- Colori, font e layout: `css/style.css`
- Testi delle pagine: `index.html` e file HTML dentro `pages/`
- Immagini: gli URL Unsplash nelle pagine HTML possono essere sostituiti con immagini autorizzate tue.

## Prima di usare il sito commercialmente
- Completa e fai verificare le pagine Privacy e Termini.
- I profili e i valori nel configuratore sono esempi fittizi, non marchi o listini ufficiali.
- Il modulo contatti è dimostrativo e non invia email.
- L'analisi reale delle planimetrie, gli agenti AI, i cataloghi verificati, i rendering e il salvataggio dei progetti richiederanno backend, servizi esterni e integrazioni.
