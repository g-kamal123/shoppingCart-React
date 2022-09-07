import { createContext, useEffect, useState } from "react";
import { Gold_array } from "./Data";
import { Diamond_array } from "./Data";
import { Gemstone_array } from "./Data";
import { Studded_array } from "./Data";

export const Storage = createContext();

export const Context = (props) => {
  const [arr, setArr] = useState(Gold_array);
  const [printarr, setprintarr] = useState(Gold_array);
  const [modalItem, setModalItem] = useState([]);
  const [error, setError] = useState(false);
  const [cartArray,setCartArray] = useState({});
  const [logged,setLogged] = useState(false)
  const [mode,setMode] = useState(false)

  const inc =(a,b)=>{
    return Number(a.price) - Number(b.price);
  }
  const dec =(a,b)=>{
    return Number(b.price) - Number(a.price);

  }
  const htl =()=>{
    let arr = [...printarr];
    arr.sort(dec)
    setprintarr(arr)
  }
  const lth =()=>{
    let arr = [...printarr];
    arr.sort(inc)
    setprintarr(arr)
  }
  const background =(val)=>{
    if(val)
    setMode(true)
    else setMode(false)
  }
  const login = ()=>{
    setLogged(true)
  }
  useEffect(() => {
    const compare = (a, b) => {
      return Number(a.price) - Number(b.price);
    };
    let arr1 = [...arr];
    arr1.sort(compare);
    setprintarr(arr1);
  }, [arr]);
  const filterHandler = () => {
    var inp = document.getElementById("search").value;
    var gold = document.getElementById("gold").checked;
    var diamond = document.getElementById("diamond").checked;
    var gem = document.getElementById("gemstone").checked;
    var studded = document.getElementById("gold_studded").checked;
    let selected = [gold, diamond, gem, studded];
    let arr = [Gold_array, Diamond_array, Gemstone_array, Studded_array];
    let arr1 = [];
    for (let i = 0; i < 4; i++) {
      if (selected[i]) arr1 = [...arr[i], ...arr1];
    }
    if (document.getElementById("search").value !== "") {
      arr1 = arr1.filter(
        (item) =>
          item.type.toLowerCase().includes(inp) ||
          item.name.toLowerCase().includes(inp)
      );
    }
    setArr(arr1);
    if (!arr1.length && inp !== "") setError(true);
    else if (!arr1.length) {
      setArr(Gold_array);
      setError(false);
    }
  };
  const exploreMorehandler = (val) => {
    // console.log(val)
    setModalItem([val]);
  };
  //   console.log(modalItem)
  const searchHandler = (event) => {
    var gold = document.getElementById("gold").checked;
    var diamond = document.getElementById("diamond").checked;
    var gem = document.getElementById("gemstone").checked;
    var studded = document.getElementById("gold_studded").checked;
    let arr = [];
    if (gold || diamond || gem || studded) {
      let selected = [gold, diamond, gem, studded];
      let arr2 = [Gold_array, Diamond_array, Gemstone_array, Studded_array];
      for (let i = 0; i < 4; i++) {
        if (selected[i]) arr = [...arr2[i], ...arr];
      }
    } else
      arr = [
        ...Gold_array,
        ...Diamond_array,
        ...Gemstone_array,
        ...Studded_array,
      ];
    let inp = event.target.value;
    let arr1 = arr.filter(
      (item) =>
        item.type.toLowerCase().includes(inp) ||
        item.name.toLowerCase().includes(inp)
    );
    setArr(arr1);
    if (!arr1.length) setError(true);
    else setError(false);
  };
  const addToCartHandler =(val)=>{
    console.log(val)
    var toAdd ={}
    if(Object.keys(cartArray).length)
    Object.keys(cartArray).map((item)=>{
      if(item===val.id){
        toAdd = {
          id:val.id,
          name:val.name,
          price:val.price,
          quantity:Number(cartArray[item].quantity) + 1,
          image:val.image
        }
      }
      else{
        toAdd = {
          id:val.id,
          name:val.name,
          price:val.price,
          quantity:1,
          image:val.image
        }
      }
    })
      else{
        toAdd = {
          id:val.id,
          name:val.name,
          price:val.price,
          quantity:1,
          image:val.image
        }
      }
    // console.log(toAdd.name)
    let arr = {...cartArray,[val.id]:toAdd}
    // console.log(arr)
    setCartArray(arr)
  }
  const decrementHandler =(val)=>{
    let arr ={...cartArray}
    if(arr[val].quantity>1)
    arr[val].quantity -= 1
    setCartArray(arr)
  }
  const incrementHandler =(val)=>{
    let arr ={...cartArray}
    arr[val].quantity += 1;
    setCartArray(arr)
  }
  const deleteCartItem=(val)=>{
    // console.log(val)
    let arr = {...cartArray}
    let arr1 ={}
    Object.keys(arr).map((item)=>{
      if(item!==val){
        let toAdd = {
          id:arr[item].id,
          name:arr[item].name,
          price:arr[item].price,
          quantity:arr[item].quantity,
          image:arr[item].image
        }
        arr1 = {...arr1,[arr[item].id]:toAdd}
      }
    })
    setCartArray(arr1)
  }
  const checkoutHandler =()=>{
    setCartArray({})
  }
  // console.log(cartArray)
  return (
    <Storage.Provider
      value={{
        arr: arr,
        printarr: printarr,
        filterHandler: filterHandler,
        exploreMorehandler: exploreMorehandler,
        modalItem: modalItem,
        searchHandler: searchHandler,
        error: error,
        addToCartHandler:addToCartHandler,
        cartArray:cartArray,
        incrementHandler:incrementHandler,
        decrementHandler:decrementHandler,
        deleteCartItem:deleteCartItem,
        checkoutHandler:checkoutHandler,
        login:login,
        logged:logged,
        background:background,
        mode:mode,
        htl:htl,
        lth:lth
      }}
    >
      {props.children}
    </Storage.Provider>
  );
};
