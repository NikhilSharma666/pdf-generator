import React from "react";
import {
  Panel,
  PanelBody,
  __experimentalInputControl as InputControl,
} from "@wordpress/components";
import { useSettings } from "../data/context";

const Form = () => {
  const { formData, setFormData } = useSettings();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Panel className="sidepanel" >
      <PanelBody title="Input Values" initialOpen={true}>
        <InputControl
          key="Name"
          label="Name"
          value={formData.name}
          onChange={(value) => handleInputChange("name", value)}
        />
        <InputControl
          key="Contact"
          label="Contact"
          value={formData.contact}
          onChange={(value) => handleInputChange("contact", value)}
        />
        <InputControl
          key="Date"
          label="Date"
          value={formData.date}
          onChange={(value) => handleInputChange("date", value)}
        />
        <InputControl
          key="Product"
          label="Product"
          value={formData.product}
          onChange={(value) => handleInputChange("product", value)}
        />
        <InputControl
          key="Quantity"
          label="Quantity"
          value={formData.quantity}
          onChange={(value) => handleInputChange("quantity", value)}
        />
        <InputControl
          key="Price"
          label="Price"
          value={formData.price}
          onChange={(value) => handleInputChange("price", value)}
        />
      </PanelBody>
    </Panel>
  );
};

export default Form;
