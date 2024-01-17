import React, { useState } from "react";
import { Button, Drawer } from "antd";
import "./App.css";
import Membership from "./Membership";
import MemberButton from "./MemberButton";
import ProductCost from "./ProductCost";
import axios from "axios";

function Cart() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    if(document.getElementById("item"))
    document.getElementById("item").classList.remove("null_display");
    axios.post("https://plixlifehapi.farziengineer.co/rest/create_checkout/", {
      checkoutInput: {
        lines: [
          {
            quantity: 1,
            variantId: 2113,
          },
        ],
        email: "dummy@dummy.com",
        isRecalculate: true,
        tags: [],
      },
    }).then(( res)=>{
      console.log(res.data);
      // localStorage.setItem("qty", 1);
      // if(!localStorage.key("qty")) {
      //   localStorage.setItem("qty", 1)
      // }
    });
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className="btn ant-btn" type="primary" onClick={showDrawer}>
        Add To Cart
      </Button>
      <Drawer
        width={500}
        className="fontsize"
        title="Shopping Cart"
        onClose={onClose}
        open={open}
      >
        <Membership />
        <MemberButton />
        <ProductCost />
      </Drawer>
    </>
  );
}

export default Cart;
