from lxml import etree
import sys


def transform_xml(xml_file, xslt_file, output_file):
    try:
        xml_doc = etree.parse(xml_file)
        xslt_doc = etree.parse(xslt_file)

        transform = etree.XSLT(xslt_doc)
        result = transform(xml_doc)

        with open(output_file, "wb") as f:
            f.write(etree.tostring(result, pretty_print=True, xml_declaration=True, encoding="UTF-8"))

        print(f"Muunnos onnistui. Tulos tallennettu tiedostoon: {output_file}")

    except (etree.XMLSyntaxError, etree.XSLTParseError, etree.XSLTApplyError, OSError) as e:
        print(f"Virhe muunnoksessa: {e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Käyttö: python transform.py lähde.xml muunnos.xslt tulos.xml")
        sys.exit(1)

    xml_file = sys.argv[1]
    xslt_file = sys.argv[2]
    output_file = sys.argv[3]

    transform_xml(xml_file, xslt_file, output_file)