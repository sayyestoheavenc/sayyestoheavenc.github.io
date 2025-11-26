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
   <div className="table-wrapper bg-white bg-opacity-50 rounded-xl p-6 shadow-md">
    
     <div className="flex gap-6 items-start">
        {/* 圖片區域 */}
        <div className="flex-shrink-0">
          <img
            src={product.imgSrc}
            alt={product.imgAlt}
            className="w-48 h-48 object-cover rounded-lg"
          />
        </div>

        {/* 文字區域 */}
        <div className="flex-1">
          <h3 className="mt-0 mb-2 text-xl font-semibold">{product.title}</h3>
          <p className="mb-2 text-gray-700">{product.description}</p>
          <div className="link-area mt-4">
            <strong>填單選擇領取地點:</strong>
            <p className="my-2"></p>
            <a
              href={product.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              {product.linkLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
