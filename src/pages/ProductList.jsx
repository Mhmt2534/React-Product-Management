import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
  Button,
} from "semantic-ui-react";
import { ProductService } from "../services/ProductService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, addToCart } from "../store/actions/CartActions";

const ProductList = () => {
  const [products, setPorducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setPorducts(result.data.data));
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
    toast.success(`${product.productName} Sepete eklendi`);
  };

  return (
    <div>
      {" "}
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Product Name</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Units In Stock</TableHeaderCell>
            <TableHeaderCell>Unit Price</TableHeaderCell>
            <TableHeaderCell>
              <Link to={`/products/add`}>
                {" "}
                <Button primary>Add product</Button>
              </Link>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.productId}>
              <TableCell>
                <Link to={`/products/${product.productId}`}>
                  {product.productName}
                </Link>
              </TableCell>
              <TableCell>{product.categoryId}</TableCell>
              <TableCell>{product.unitsInStock}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>
                <Button onClick={() => handleAddToCart(product)}>
                  Sepete Ekle
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ProductList;
