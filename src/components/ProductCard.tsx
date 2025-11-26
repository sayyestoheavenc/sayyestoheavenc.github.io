import React from "react";

type Product = {
  title: string;
  description: string;
  action:string;
  imgSrc: string;
  imgAlt: string;
  linkLabel: string;
  linkUrl: string;
  note?: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="table-wrapper">
      <table className="product-table">
        <tbody>
          <tr>
            <td className="photo-cell">
              <div className="image-container">
                <img
                  src={product.imgSrc}
                  alt={product.imgAlt}
                />
              </div>
            </td>
            <td className="content-cell">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="link-area">
                <strong>{product.action}</strong>
                <p></p>
                <a
                  href={product.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.linkLabel}
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;