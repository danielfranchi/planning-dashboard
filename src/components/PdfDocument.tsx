import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

interface Data {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string;
}

interface PropsPdfDocument {
  data: Data;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

const PdfDocument = ({ data }: PropsPdfDocument) => {
  const { title, description, date, location, participants } = data;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Description:</Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.subtitle}>Date:</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.subtitle}>Location:</Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.subtitle}>Participants:</Text>
          <Text style={styles.text}>{participants}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
