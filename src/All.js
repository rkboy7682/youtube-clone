import React from "react";

const All = () => {
  const arr = ["rahul", "yadav", "amana"];
  const promise = createOrder(arr); // orderId
  // console.log("promise", promise);

  promise
    .then(function (orderId) {
      console.log("this is your orderm id:", orderId);
      return orderId;
    })
    .then(function (orderId) {
      return proceedToPayment(orderId);
    })
    .then(function (oder) {
      console.log("you make payment:", oder);
      return oder;
    })
    .then(function (oder) {
      return orderSummery(oder);
    })
    .then(function (summery) {
      console.log("Congresctulations:", summery);
    })
    .catch(function (err) {
      console.log(err.message);
    });

  /// producer
  function createOrder(arr) {
    const pro = new Promise((resolve, reject) => {
      if (!Validation(arr)) {
        const err = new Error("Arrr not  found");
        reject(err);
      }

      const orderId = "123654789";
      if (orderId) {
        resolve(orderId);
      }
    });
    return pro;
  }
  function proceedToPayment(orderId) {
    const oder = new Promise((resolve, reject) => {
      resolve("succesful");
    });
    return oder;
  }

  function orderSummery(oder) {
    const summery = new Promise((resolve, reject) => {
      resolve("this is your order summery");
    });
    return summery;
  }

  function Validation(arr) {
    return true;
  }

  // function promise
  const arr1 = ["rahul", "yadav", "suhani", "singh"];
  const promis = nameList(arr1);
  promis.then(function (name) {
    console.log("name is :", name);
  });

  //
  function nameList(arr1) {
    const pro = new Promise((resolve, reject) => {
      if (!rej(arr1)) {
        const err = new Error("name is not valid");
        reject(err);
      }
      const name = "Rahul";
      if (name == "Rahul") {
        resolve(name);
      }
    });

    function rej(arr1) {
      return true;
    }
    return pro;
  }

  // async & await

  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1 resolve");
    }, 5000);
  });
  const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2 resolve");
    }, 10000);
  });

  async function name2() {
    const data = await pro;
    console.log("data", data);
    const data1 = await pro1;
    console.log("data1", data1);
  }
  name2();

  // fetch

  //  const Api="https://www.sadkbddnmk.com"

  // async function handlepromise() {
  //    const data=await fetch("Api")
  //  const json= await data.json()
  //  console.log("json:",json);        //fetch().then((res)=>{res.json()}).then((res)=>{console.log(res)})
  // }
  // handlepromise();

  return <div>All</div>;
};

export default All;
