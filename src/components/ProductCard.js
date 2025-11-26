import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ProductCard = ({ product }) => {
    return (_jsx("div", { className: "table-wrapper", children: _jsx("table", { className: "product-table", children: _jsx("tbody", { children: _jsxs("tr", { children: [_jsx("td", { className: "photo-cell", children: _jsx("div", { className: "image-container", children: _jsx("img", { src: product.imgSrc, alt: product.imgAlt }) }) }), _jsxs("td", { className: "content-cell", children: [_jsx("h3", { children: product.title }), _jsx("p", { children: product.description }), _jsxs("div", { className: "link-area", children: [_jsx("strong", { children: product.action }), _jsx("p", {}), _jsx("a", { href: product.linkUrl, target: "_blank", rel: "noopener noreferrer", children: product.linkLabel })] })] })] }) }) }) }));
};
export default ProductCard;
