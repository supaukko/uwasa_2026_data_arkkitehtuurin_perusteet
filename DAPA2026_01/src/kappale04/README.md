
# Kappale 4
Opit ymmärtämään: Mitä tarkoitetaan datan transformoinnilla (muuntaminen), missä tilanteissa sitä tarvitaan ja
millaisilla ohjelmointityökaluilla sitä tehdään, miten datan suodatus ja puhdistus siihen liittyvät,
miksi data pitää puhdistaa ennen käyttöä ja mitä se käytännössä tarkoittaa, millaisia laatuvirheitä datassa voi olla,
miksi kategorisointia voidaan tarvita, miksi funktioiden pitäisi olla yleiskäyttöisiä. 

Opit tekemään:
Pythonilla: Lukemaan JSON ja CSV-datatiedoston Pandas dataframe-rakenteeksi,
suodattamaan objektilistaa objektien attribuuttien arvojen perusteella, poistamaan listasta tuplarivit,
vaihtamaan Pandas dataframe rakenteessa sarakkeiden nimet toiseksi, luomaan ja yhdistelemään sarakkeiden
sisällön uudeksi sarakkeeksi.
JavaScriptillä: kategorisoimaan tietoa, muuntamaan objektin muodosta toiseen, muuntamaan CSV-tiedoston sisällön objektilistaksi. 

Täydentävää osaamista: järjestämään listan, poistamaan listasta ylimmän rivin, parsimaan päivämääräobjektin merkkijonosta,
destrukturoiva sijoitus JavaScriptissä

# Python

## XML skeemavalidointi Pythonilla

### Luodaan virtuaaliympäristö

Windows CMD - luodaan uusi venv

```
cd DAPA2026_01\src\kappale04
py --list
py --version
py -m venv .venv
.venv\Scripts\activate.bat
pip install lxml
pip list
pip freeze > requirements.txt
deactivate
```

Windows CMD - asennetaan venv

```
cd DAPA2026_01\src\kappale05
py --list
py --version
py -m venv .venv
.venv\Scripts\activate.bat
pip install -r requirements.txt
deactivate

```


### Tiedon validointi

Validate varmistaa, että xml on oikean muotoinen xsd tiedoston avulla

### Harjoitus 2

Aja komento projektin juuresta:

```
py src/utils/validate.py src/h2/transactions.xml src/h2/transactions.xsd
```

### Harjoitus 3

Aja komento projektin juuresta:

```
py src/utils/validate.py src/h3/products.xml src/h3/products.xsd
```

### Harjoitus 4

Aja komento projektin juuresta:

```
py src/utils/transform.py src/h4/source.xml src/h4/sales_to_invoice.xslt src/h4/target2.xml
```
