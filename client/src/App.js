import React from 'react';
import { List } from './common/lists/List';
import { people, products } from './mockData';
import { PersonListItem } from './common/lists/PersonListItem';
import { ProductListItem } from './common/lists/ProductListItem';
import { Modal } from './common/modals/Modal';

function App() {
  return (
    <div>
      <List
        items={people}
        resourceName="person"
        itemComponent={PersonListItem}
      />
      <List
        items={products}
        resourceName="product"
        itemComponent={ProductListItem}
      />
      <Modal>
        <ProductListItem product={products[0]} />
      </Modal>
    </div>
  );
}

export default App;
