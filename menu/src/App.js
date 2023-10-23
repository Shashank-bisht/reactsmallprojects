import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';  
import items from './data';

// using set to get only unique categories and map to extract category from each items
// joining all and other categories using , and spread operator
const allCategories = ['all',...new Set(items.map((item)=>
  item.category
))]
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories)

  //This function is responsible for filtering the menu items based on the selected category. If the selected category is 'all', it sets menuItems to the original items array, effectively showing all items. If a specific category is selected, it filters the items array to create a new array, newItems, containing only items that match the selected category, and then sets menuItems to this filtered array.
  
  const filterItems = (category)=>{
    if(category === 'all'){
      setMenuItems(items)
    }else{const newItems = items.filter((item)=> item.category === category);
      setMenuItems(newItems);}
  }

  return (<main>
    <section className="menu section" >
      <h2>our menu</h2>
      <div className="underline"></div>
      {/*  */}
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>)
}

export default App;
