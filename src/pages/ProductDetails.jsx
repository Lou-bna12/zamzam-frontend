import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="text-center mt-10 text-2xl">
      Détails du produit : {id}
    </div>
  );
}

export default ProductDetails;
