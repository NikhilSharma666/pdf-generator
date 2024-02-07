import React from "react";
import {
  Card,
  Button,
  CardHeader,
  __experimentalHStack as HStack,
  __experimentalHeading as Heading,
} from "@wordpress/components";
import { download } from "@wordpress/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSettings } from "../data/context";
import MyPdf from "./Pdf";

const Header = () => {
  const { formData } = useSettings();

  return (
    <Card>
      <CardHeader>
        <HStack>
          <Heading>PDF-Invoice Generator</Heading>
          <PDFDownloadLink document={<MyPdf {...formData} />} fileName="info.pdf">
            {({ loading }) => (
              <Button variant="secondary" icon={download}>
                {loading ? "Loading document..." : "Download"}
               </Button>
            )}
          </PDFDownloadLink>
        </HStack>
      </CardHeader>
    </Card>
  );
};

export default Header;
