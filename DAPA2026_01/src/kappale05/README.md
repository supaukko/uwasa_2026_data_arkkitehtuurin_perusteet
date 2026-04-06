# XML skeemavalidointi Pythonilla

Hakemistot:

- data-hakemisto sisältää xml-tiedostot
- schema-hakemisto sisältää xsd-skeemat, joita validointi tarvitsee
- xslt-hakemisto sisältää muunnokseen tarvittavat säännöt

## Luodaan virtuaaliympäristö

Windows CMD - luodaan uusi venv

```
cd DAPA2026_01\src\kappale05
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


## Tiedon validointi

Validate varmistaa, että customer.xml on oikean muotoinen.

```
python3 ./validate.py
```
