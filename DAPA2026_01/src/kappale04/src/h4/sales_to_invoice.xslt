<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
    <xsl:template match="/">
        <Invoice>
            <Customer>
                <Firstname>
                    <xsl:value-of select="Sales/SalesEvent/Customer/Firstname"/>
                </Firstname>
                <Lastname>
                    <xsl:value-of select="Sales/SalesEvent/Customer/Lastname"/>
                </Lastname>
                <StreetAddress>
                    <xsl:value-of select="concat(Sales/SalesEvent/Customer/Street, ' ', Sales/SalesEvent/Customer/HouseNumber)"/>
                </StreetAddress>
            </Customer>
            <InvoiceRows>
                <xsl:apply-templates select="Sales/SalesEvent/Products/Product"/>
            </InvoiceRows>
        </Invoice>
    </xsl:template>
    <!--  Jokainen Product  -->
    <xsl:template match="Product">
         <Product>
            <ProductName>
                <xsl:value-of select="concat(Vendor, ' ', Name)"/>
            </ProductName>
            <TotalPrice>
                <xsl:value-of select="format-number(Price * Quantity, '0.00')"/>
            </TotalPrice>
            <Currency>
                <xsl:value-of select="Currency"/>
            </Currency>
        </Product>
    </xsl:template>
</xsl:stylesheet>