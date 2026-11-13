# Esempi guidati del modulo M2

Questi sono i file che il docente costruisce insieme alla classe nella seconda parte di ciascuna delle
tre lezioni. Il progetto è quello creato in M1 e continua a crescere: ogni cartella qui sotto contiene
**soltanto i file che quella lezione crea o modifica**, collocati nel percorso che devono avere dentro il
progetto. Il file `src/app/dati/modelli.ts`, con le interfacce `Dispositivo` e `Prestito`, esiste già dal
modulo M1 e non va riscritto.

## Preparazione dell'ambiente

Si apre il Codespace del repository di classe dall'applicazione desktop di Visual Studio Code, con
l'estensione GitHub Codespaces: il repository si trova in `/workspaces/tpsit4-prestiti` e il progetto
Angular in `/workspaces/tpsit4-prestiti/prestiti`. In alternativa, sulla postazione del laboratorio, si
apre la copia clonata in `C:\tpsit\tpsit4-prestiti` e si usa il comando *Riapri nel contenitore* di
Docker Desktop: il contenitore la monta allo stesso percorso, e da quel momento i comandi sono identici.

Sulla postazione, per posizionarsi nella cartella del repository prima di aprire Visual Studio Code:

```powershell
cd C:\tpsit\tpsit4-prestiti
code .
```

Dentro il contenitore, dalla radice del progetto Angular:

```bash
cd /workspaces/tpsit4-prestiti/prestiti
npm install
ng serve
```

Il server di sviluppo occupa la **porta 4200**. Nel pannello *Porte* di Visual Studio Code la 4200
compare da sola all'avvio; l'applicazione si apre poi su `http://localhost:4200`. Il ricaricamento è
automatico a ogni salvataggio. Per fermare il server si preme `Ctrl+C` nel terminale. In questo modulo
non serve alcun altro processo: json-server entra in scena soltanto dal modulo M6.

Il terminale di `ng serve` va tenuto sotto controllo per tutta la lezione. Oltre agli errori, che
interrompono la compilazione, emette **avvisi** che non la interrompono: in questo modulo si incontra
`NG8111`, che segnala un gestore di evento scritto senza le parentesi di chiamata.

## I file, nell'ordine della dispensa

### Prima lezione — il componente e i tre file

| File | Descrizione |
|---|---|
| `01_SchedaDispositivo/src/app/scheda-dispositivo/scheda-dispositivo.ts` | La classe con il decoratore `@Component` e il dispositivo `INV-0101` scritto come proprietà. |
| `01_SchedaDispositivo/src/app/scheda-dispositivo/scheda-dispositivo.html` | Il template, con la sola interpolazione delle proprietà del dispositivo. |
| `01_SchedaDispositivo/src/app/scheda-dispositivo/scheda-dispositivo.css` | Gli stili della scheda, spostati qui da `app.css` di M1. |
| `01_SchedaDispositivo/src/app/app.ts` | Il componente radice di M1, a cui si aggiunge `SchedaDispositivo` nel campo `imports`. |
| `01_SchedaDispositivo/src/app/app.html` | Lo stesso template di M1: resta l'intestazione, e dentro il `<main>` la sezione scritta a mano lascia il posto a `<app-scheda-dispositivo />`. |
| `01_SchedaDispositivo/src/app/app.css` | Le regole dell'intestazione restano; quelle della scheda spariscono, perché si sono spostate nel figlio. |

La cartella `src/app/scheda-dispositivo/` non va creata a mano: si ottiene con il comando

```bash
ng generate component scheda-dispositivo
```

lanciato dalla radice del progetto. Il comando genera anche `scheda-dispositivo.spec.ts`, che in questo
corso non viene usato e si può lasciare dov'è. I tre file generati vanno poi sostituiti con quelli di
questa cartella. I tre file `app.*` sostituiscono gli omonimi prodotti da M1.

Il passaggio delle regole CSS da `app.css` a `scheda-dispositivo.css` è la dimostrazione da fare a voce:
conviene spostare prima il markup e lasciare le regole dove stanno, osservare che la scheda perde ogni
formattazione senza che compaia alcun messaggio, e spostare le regole solo dopo.

Risultato osservabile: la pagina è identica a quella di M1, ma la scheda è ora un componente a sé e
mostra il dispositivo `INV-0101`.

I dati usati in tutto il modulo sono quelli dell'insieme fissato per il progetto e non vanno cambiati:
il modulo M3 costruisce l'elenco con `@for` a partire dagli stessi record, e un dispositivo che cambia
valori fra una lezione e l'altra è la prima cosa che gli studenti notano.

### Seconda lezione — i tipi di binding

| File | Descrizione |
|---|---|
| `02_BindingNellaScheda/src/app/scheda-dispositivo/scheda-dispositivo.ts` | Passa al dispositivo `INV-0102`, che è in prestito, e aggiunge il metodo `percentualeVita()`, il gestore dell'evento `input` con `$event` e il metodo `richiedi()`. |
| `02_BindingNellaScheda/src/app/scheda-dispositivo/scheda-dispositivo.html` | Binding di attributo con `attr.`, di classe con `class.`, di stile con `style.width.%`, di proprietà su `disabled` e di evento su `input` e `click`. |
| `02_BindingNellaScheda/src/app/scheda-dispositivo/scheda-dispositivo.css` | Le regole delle tre classi di stato, della barra, del campo di testo e del pulsante disabilitato. |

I tre file sostituiscono quelli della prima lezione. I file `app.*` restano invariati.

La scheda passa dal dispositivo `INV-0101` a `INV-0102`, che ha gli stessi marca, modello e anno ma
risulta in prestito. Il cambio non è casuale e va detto alla classe: con un dispositivo disponibile i
binding di classe e di proprietà ci sarebbero comunque, ma non si osserverebbe nulla, perché il bordo
resterebbe verde e il pulsante attivo. Per vedere il terzo colore si sostituisce `INV-0102` con
`INV-0127`, che è in manutenzione: `{ id: 4, inventario: 'INV-0127', tipo: 'notebook', marca: 'HP',
modello: 'ProBook 450', anno: 2022, stato: 'manutenzione' }`.

Risultato osservabile: il bordo della scheda è arancione perché il dispositivo è in prestito, la barra
dell'età è proporzionale all'anno, il pulsante «Richiedi in prestito» è disattivato e, sostituendo il
dispositivo con uno disponibile, torna premibile e mostra il messaggio di conferma.

Due prove da fare con la classe. La prima, negli strumenti di sviluppo del browser: sull'articolo si
leggono l'attributo `data-inventario` e l'attributo generato `_ngcontent-…`, che è il meccanismo
dell'incapsulamento. La seconda, nel terminale: togliendo il prefisso `attr.` da `data-inventario`
compare `NG8002`, mentre togliendo le parentesi da `(click)="richiedi()"` compare l'avviso `NG8111` e il
pulsante smette di rispondere senza che la console del browser dica nulla.

### Terza lezione — comunicazione fra componenti

| File | Descrizione |
|---|---|
| `03_SchedaConInputOutput/src/app/scheda-dispositivo/scheda-dispositivo.ts` | La scheda riceve il dispositivo con `input.required()`, accetta l'ingresso facoltativo `compatta` ed emette l'evento `richiesta` con `output()`. |
| `03_SchedaConInputOutput/src/app/scheda-dispositivo/scheda-dispositivo.html` | Lo stesso template, con il valore letto sempre nella forma `dispositivo()`. |
| `03_SchedaConInputOutput/src/app/scheda-dispositivo/scheda-dispositivo.css` | Aggiunge le regole della versione compatta. |
| `03_SchedaConInputOutput/src/app/app.ts` | I dispositivi `INV-0101`, `INV-0203` e `INV-0305` come proprietà separate, il campo del richiedente e il metodo `registraRichiesta()`. |
| `03_SchedaConInputOutput/src/app/app.html` | Lo stesso componente usato tre volte con dati diversi, e il riquadro di riepilogo. |
| `03_SchedaConInputOutput/src/app/app.css` | La disposizione delle schede in riga e il riquadro di riepilogo. |
| `04_SelettoreDurata/src/app/selettore-durata/selettore-durata.ts` | Il componente del binding bidirezionale, con `model(7)` e i metodi che scrivono il valore. |
| `04_SelettoreDurata/src/app/selettore-durata/selettore-durata.html` | I due comandi di incremento e decremento e il valore corrente. |
| `04_SelettoreDurata/src/app/selettore-durata/selettore-durata.css` | Gli stili del selettore. |
| `04_SelettoreDurata/src/app/app.ts` | Il componente radice completo, che aggiunge la proprietà `giorniPrestito`. |
| `04_SelettoreDurata/src/app/app.html` | Aggiunge `<app-selettore-durata [(giorni)]="giorniPrestito" />`. |
| `04_SelettoreDurata/src/app/app.css` | Aggiunge le regole del blocco della durata. |

**Che cosa si sposta e perché.** Il campo di testo del richiedente e il messaggio di conferma, costruiti
nella seconda lezione dentro la scheda, non vengono cancellati: passano nel componente radice. La ragione
va detta alla classe perché è il concetto della lezione, non un dettaglio di riordino: da questa lezione
le schede sono tre, mentre il richiedente è uno solo per tutta la pagina; se il campo restasse nella
scheda ci sarebbero tre caselle di testo indipendenti e tre messaggi separati. Il dato appartiene a chi
lo raccoglie per tutti, cioè al padre, e il figlio si limita ad annunciare la richiesta.

Il secondo componente si genera con

```bash
ng generate component selettore-durata
```

e i file generati vanno sostituiti con quelli della cartella `04_SelettoreDurata`. I file `app.ts`,
`app.html` e `app.css` della cartella `04_SelettoreDurata` sostituiscono quelli della cartella
`03_SchedaConInputOutput`: sono la versione finale del modulo.

I tre dispositivi sono `INV-0101`, `INV-0203` e `INV-0305`, cioè un notebook, un tablet e un proiettore:
sono scelti per coprire i tre valori di `tipo`, che è il punto della lezione, ed è la ragione per cui la
scheda deve ricevere il dato dall'esterno invece di conoscerlo. Sono tutti e tre disponibili, quindi in
questa schermata il bordo è verde e i tre pulsanti sono attivi: i colori dello stato e il pulsante
disattivato si sono visti nella seconda lezione su `INV-0102` e `INV-0127`, e torneranno in M3, dove
l'elenco mostra tutti e otto i dispositivi del progetto con tutti gli stati.

Risultato osservabile: tre schede diverse costruite dallo stesso componente, il contatore delle richieste
che avanza quando si preme il comando di una qualsiasi delle tre, e il numero di giorni che cambia nel
riquadro di riepilogo mentre si agisce sui comandi del selettore.

Prova da fare nel terminale: togliendo `[dispositivo]="primoDispositivo"` dalla prima scheda compare
`NG8008: Required input 'dispositivo' from component SchedaDispositivo must be specified`. È un errore di
compilazione, non un messaggio in console, e se `ng serve` è già avviato il browser continua a mostrare
l'ultima versione riuscita: è il caso in cui bisogna guardare il terminale e non la pagina.

## Che cosa non compare in questi esempi

Non si usano i blocchi `@if`, `@for` e `@switch`, che sono l'argomento del modulo M3: è la ragione per
cui i tre dispositivi sono tre proprietà distinte e le tre schede sono scritte una per una nel template.
Non si usano servizi, iniezione delle dipendenze, routing né `HttpClient`: i dati restano dentro la
classe del componente radice.
