import React from "react";

type Product = {
  title: string;
  description: string;
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
    <div className="flex flex-col sm:flex-row mb-8 border-b border-dashed border-gray-300 pb-6">
      <div className="sm:w-1/3 flex justify-center mb-4 sm:mb-0">
        <div className="w-48 h-48 overflow-hidden rounded-lg shadow-lg bg-transparent">
          <img
            src={product.imgSrc}
            alt={product.imgAlt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="sm:w-2/3 pl-0 sm:pl-6 text-left">
        <h3 className="mt-0 mb-2 text-xl font-semibold">{product.title}</h3>
        <p className="mb-2">{product.description}</p>
        <div className="link-area">
          <strong>填單選擇領取地點:</strong>
          <p className="my-1"></p>
          <a
            href={product.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-steelblue-600 font-bold hover:underline"
          >
            {product.linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
