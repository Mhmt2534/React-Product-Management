import axios from "axios";

export class ProductService {
  getProducts() {
    return axios.get("http://localhost:5107/api/Products/getall");
  }

  getByProductId(productId) {
    return axios.get(
      "http://localhost:5107/api/Products/getbyid?id=" + productId
    );
  }

  addProduct(product) {
    console.log(product);
    return axios
      .post("http://localhost:5107/api/Products/add", product)
      .then((response) => {
        console.log("Ürün başarıyla eklendi:", response.data);
      })
      .catch((error) => {
        console.error("Ürün eklenirken bir hata oluştu:", error);
      });
  }
}
