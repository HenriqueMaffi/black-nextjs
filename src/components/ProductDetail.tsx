// src/components/ProductDetails.tsx

import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { ProductType } from "../services/products";
import SuccessToast from "./SuccessToast";
import { useCart } from "../hooks/useCart";

type ProductDetailsProps = {
  product: ProductType
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { addProduct } = useCart()

  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}                 
          layout="responsive"
        />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Description:</span>
          {product.description}
        </p>

        <p className="text-muted">Amount in stock: {product.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product)
            setToastIsOpen(true)
            setTimeout(() => setToastIsOpen(false), 1000 * 5)
          }}
        >
          Buy now
        </Button>

        <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
      </Col>
    </Row>
  )
}

export default ProductDetails