/*Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman*/

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public')); // 4. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

// 2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const posts = [
  {
    title: "Cracker alla barbabietola",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                Cracker di farro
                Cracker di lupini
                Cracker allo zafferano
                Cracker ai semi`,
    image: "/img/cracker_barbabietola.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
  },
  {
    title: "Ciambellone",
    content: `Il ciambellone è un dolce soffice e genuino, perfetto per la colazione o la merenda. Preparato con ingredienti semplici come farina, zucchero, uova e latte, può essere arricchito con scorza di limone, vaniglia o cacao per varianti sempre nuove. Ottimo da inzuppare nel latte o accompagnare con una tazza di tè.`,
    image: "/img/ciambellone.jpeg",
    tags: ["Dolci", "Colazione", "Ricette tradizionali"],
  },
  {
    title: "Pane fritto dolce",
    content: `Il pane fritto dolce è una ricetta golosa e anti-spreco, ideale per riutilizzare il pane avanzato. Bagnato nel latte o nel succo d'arancia, poi passato nell'uovo e fritto fino a diventare dorato e croccante, viene infine cosparso di zucchero e cannella per un sapore irresistibile. Perfetto per una merenda sfiziosa o un dolce dell’ultimo minuto.`,
    image: "/img/pane_fritto_dolce.jpeg",
    tags: ["Dolci", "Ricette facili", "Ricette anti-spreco"],
  },
  {
    title: "Pasta alla barbabietola",
    content: `La pasta alla barbabietola è un primo piatto colorato e ricco di sapore. Il suo impasto, reso vibrante dalla barbabietola frullata, dona un tocco originale alla tavola. Perfetta da condire con burro e salvia, ricotta o una crema di noci per un contrasto di sapori davvero delizioso.`,
    image: "/img/pasta_barbabietola.jpeg",
    tags: ["Primi piatti", "Ricette vegetariane", "Cucina creativa"],
  },
  {
    title: "Torta paesana",
    content: `La torta paesana è un dolce rustico della tradizione lombarda, preparato con pane raffermo, latte, cacao, uvetta e pinoli. La sua consistenza morbida e il sapore avvolgente la rendono perfetta per la colazione o la merenda. Un classico intramontabile che unisce semplicità e bontà.`,
    image: "/img/torta_paesana.jpeg",
    tags: ["Dolci", "Ricette tradizionali", "Ricette anti-spreco"],
  },
];

app.get("/", (req, res) => {
  res.send("Server al mio blog"); // 1. Creiamo il Progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
});

// 3. Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

app.get("/bacheca", (req, res) => {
  console.log("Richiesta ricevuta su /bacheca");
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
