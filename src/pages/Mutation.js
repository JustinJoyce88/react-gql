import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $price: Int!) {
    createProduct(name: $name, price: $price) {
      id
      name
      price
    }
  }
`;

export default function Mutation() {
  const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT, {
    variables: {
      name: 'test',
      price: 100,
    },
  });
  return (
    <div>
      <button onClick={() => createProduct()}>Click</button>
    </div>
  );
}
