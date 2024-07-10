import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductService } from "../services/ProductService";

import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";

const ProductDetail = () => {
  let { productId } = useParams();

  const [product, setPorduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductId(productId)
      .then((result) => setPorduct(result.data.data));
  }, []);

  return (
    <div>
      <CardGroup>
        <Card fluid>
          <CardContent>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <CardHeader>{product.productName}</CardHeader>
            <CardMeta>Category : {product.categoryId}</CardMeta>
            <CardDescription>
              Steve wants to add you to the group <strong>best friends</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ProductDetail;
