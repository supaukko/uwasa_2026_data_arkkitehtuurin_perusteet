from lxml import etree
import sys


def validate_xml_with_xsd(xml_file, xsd_file):
    try:
        xml_doc = etree.parse(xml_file)
        xsd_doc = etree.parse(xsd_file)

        xmlschema = etree.XMLSchema(xsd_doc)
        xmlschema.assertValid(xml_doc)
        return True

    except etree.DocumentInvalid as e:
        raise ValueError(
            f"The XML file '{xml_file}' is not valid against the XSD '{xsd_file}'. {e}"
        )
    except (etree.XMLSyntaxError, OSError) as e:
        raise ValueError(f"Syntax error: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Käyttö: python validoi.py tiedosto.xml skeema.xsd")
        sys.exit(1)

    xml_file_path = sys.argv[1]
    xsd_file_path = sys.argv[2]

    try:
        validate_xml_with_xsd(xml_file_path, xsd_file_path)
        print(f"XML-tiedosto '{xml_file_path}' on XSD-skeeman '{xsd_file_path}' mukainen.")
    except ValueError as e:
        print(f"Validointivirhe! {e}")
        sys.exit(1)