import React from 'react';
import Card from "./Card";

export default {
  title: 'Card',
  component: Card,
}

export const NoChildren = () => <Card />
export const WithChildren= () => (
  <Card>
    I am some child stuff!
  </Card>
)