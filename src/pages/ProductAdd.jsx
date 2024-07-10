import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField, Button, Checkbox, Label } from "semantic-ui-react";
import ApexiTextInput from "../utilities/customFormControl/ApexiTextInput";
import { ProductService } from "../services/ProductService";

const ProductAdd = () => {
  const intitialValues = {
    categoryId: 1,
    productName: "",
    unitsInStock: 1,
    unitPrice: 1,
  };

  const shema = Yup.object({
    categoryId: Yup.number().required("Category  required"),
    productName: Yup.string().required("product name required"),
    unitsInStock: Yup.number().required("unit in stock name required").max(100),
    unitPrice: Yup.number().required("Unit price required").min(1),
  });

  const addProductApi = (product) => {
    // let productService = new ProductService();
    // productService.addProduct(product);
  };

  return (
    <div>
      <Formik
        initialValues={intitialValues}
        validationSchema={shema}
        onSubmit={(values) => {
          let productService = new ProductService();
          productService.addProduct(values);
        }}
      >
        <Form className="ui form">
          <ApexiTextInput name="categoryId" placeholder="Category Id" />
          <ApexiTextInput name="productName" placeholder="Product Name" />
          <ApexiTextInput name="unitsInStock" placeholder="Units In Stock" />
          <ApexiTextInput name="unitPrice" placeholder="Unit Price" />
          <Button color="green" type="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductAdd;
