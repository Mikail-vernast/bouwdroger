# Security

De bevindingen zelf staan **niet in deze repo**. Dit is een publieke repo, en een
register van openstaande zwaktes is daar een leidraad voor wie ze wil gebruiken:
het benoemt welke drempels waar zitten, welke routes er niet onder vallen, en
welke risico's bewust geaccepteerd zijn. Dat hoort achter een login.

Het register staat in de vault, naast dat van het portaal:

```
brent---vault/02-Projects/bouwdroger/Security/
  openstaande-kwetsbaarheden.md
  lovable-database-opruimen.md
```

Het portaal houdt zijn eigen doorlopende register bij in de privé-repo
`Mikail-vernast/Vernast-v2.0`, in `docs/security/findings.md`. Bij een audit die
beide kanten raakt: daar de bevinding, hier alleen de code.

## Wat hier wél mag staan

- Hoe iets werkt, met de afweging erbij — de commentaar in `api/` en `src/lib/`
  legt per route uit waarom een drempel, een allowlist of een controle er staat.
  Dat is bouwdocumentatie, geen aanvalskaart.
- Namen van omgevingsvariabelen (zie `README.md`), niet hun waarden.

## Wat hier niet hoort

- Project-ID's, endpoints of sleutels van systemen die nog leven.
- Een opsomming van wat nog open staat, of hoe je erbij komt.
- Meetresultaten van een audit: welke grens op welk pad precies afgaat.
