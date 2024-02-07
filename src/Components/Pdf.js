import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
    width:'600px'
  },
  header: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: 'Oswald',
  },
  content: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: 'Times-Roman',
  },
  content1: {
    fontSize: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container2: {
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    width: "100%",
    padding: "10px",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
  },
  total: {
    display: "flex",
    backgroundColor: "grey",
    color: "white",
    padding: "5px 15px",
    width: "100%",
    justifyContent: "space-between",
  },
});

const MyPdf = ({ name, contact, date, product, quantity, price }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.header}>INVOICE</Text>
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={styles.content}>Invoice to: {name}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.content}>Contact: {contact}</Text>
            <Text style={styles.content}>Date: {date}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.content}>Item Description</Text>
        <Text style={styles.content}>Qty</Text>
        <Text style={styles.content}>Price</Text>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.content}>{product}</Text>
        <Text style={styles.content}>{quantity}</Text>
        <Text style={styles.content}>{price}</Text>
      </View>

      <View style={styles.total}>
        <Text style={styles.content}>Total</Text>
        <Text style={styles.content}>{price}</Text>
      </View>
    </Page>
  </Document>
);

export default MyPdf;
