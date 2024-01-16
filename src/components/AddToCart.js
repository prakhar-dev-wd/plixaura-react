import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./App.css"
import Membership from './Membership';
import MemberButton from './MemberButton';
import ProductCost from './ProductCost';




function Cart(){
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className='btn ant-btn' type='primary' onClick={showDrawer}>
      Add To Cart
      </Button>
      <Drawer width={500} className='fontsize'   title="Shopping Cart" onClose={onClose} open={open}>
      <Membership/>
      <MemberButton/>
      <ProductCost/>
      </Drawer>
    </>
  );
};



export default Cart;