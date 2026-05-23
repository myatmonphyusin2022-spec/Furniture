import { useParams } from "react-router";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  return <div>ProductDetail</div>;
}

export default ProductDetail;
