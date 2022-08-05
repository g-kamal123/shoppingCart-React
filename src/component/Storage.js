import { createContext, useEffect, useState } from "react";
import { Gold_array } from "./Data";
import { Diamond_array } from "./Data";
import { Gemstone_array } from "./Data";
import { Studded_array } from "./Data";

export const Storage = createContext();

export const Context = (props) => {
  const [arr, setArr] = useState(Gold_array);
  const [printarr, setprintarr] = useState(Gold_array);
  const [modalItem,setModalItem] = useState([])
  const [error,setError] = useState(false)

  useEffect(() => {
    const compare = (a, b) => {
      return Number(a.price) - Number(b.price);
    };
    let arr1 = [...arr];
    arr1.sort(compare);
    setprintarr(arr1);
  }, [arr]);
  const filterHandler = () => {
    var inp = document.getElementById('search').value;
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
    if(document.getElementById('search').value!==''){
        arr1 = arr1.filter((item)=>item.type.toLowerCase().includes(inp)
        || item.name.toLowerCase().includes(inp))
    }
    setArr(arr1);
    if(!arr1.length && inp!=='') setError(true);
    else
    if (!arr1.length) {
        setArr(Gold_array)
    setError(false)};
  };
  const exploreMorehandler=(val)=>{
    // console.log(val)
    setModalItem([val])
  }
//   console.log(modalItem)
  const searchHandler =(event)=>{
    var gold = document.getElementById("gold").checked;
    var diamond = document.getElementById("diamond").checked;
    var gem = document.getElementById("gemstone").checked;
    var studded = document.getElementById("gold_studded").checked;
    let arr =[]
    if(gold || diamond || gem || studded){
        let selected = [gold, diamond, gem, studded];
        let arr2 = [Gold_array, Diamond_array, Gemstone_array, Studded_array];
        for(let i =0;i<4;i++){
            if(selected[i]) arr =[...arr2[i],...arr];
        }
    }
    else
    arr = [...Gold_array,...Diamond_array,...Gemstone_array,...Studded_array]
    let inp = event.target.value
    let arr1 = arr.filter((item)=> item.type.toLowerCase().includes(inp)
    || item.name.toLowerCase().includes(inp))
    setArr(arr1)
    if (!arr1.length) setError(true);
    else setError(false)
  }
  return (
    <Storage.Provider
      value={{ arr: arr, printarr: printarr, filterHandler: filterHandler,exploreMorehandler:exploreMorehandler,modalItem:modalItem,searchHandler:searchHandler ,error:error}}
    >
      {props.children}
    </Storage.Provider>
  );
};
