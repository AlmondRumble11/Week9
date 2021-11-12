import { useState } from "react";
import MyList from "./MyList";

function MyContainer() {
   
    const [items, setItems] = useState([
        { id: "1", text: "this is an item", clicked: false },
        { id: "2", text: "this is also item", clicked: false }
    ]);
    const [text, setText] = useState('');
    let [id, setId] = useState(2);

    const onSubmit = (e) =>{
        e.preventDefault();
        setText('');
        id += 1;
        setId(id);

        const newtext = document.getElementById('textarea').value;
        console.log(newtext);
       let  clicked = false;
        const newItem = {id, text, clicked};
        setItems([...items, newItem]);
        
    }

    const updateItem = (id) =>{
        console.log(id + " was pressed");

        //https://www.robinwieruch.de/react-update-item-in-list
        const newList = items.map((item) => {
            if(item.id === id){
                if(item.clicked === false){
                    const updatedItem = {...item, clicked:true};
                    return updatedItem;
                }else{
                    const updatedItem = {...item, clicked:false};
                    return updatedItem;
                }
                
            }else{
                return item;
            }

        });
        setItems(newList);
          
        
    
    }
    

    return (
    <div>
    <form onSubmit={onSubmit}>
        <textarea className="textarea" id="textarea" placeholder="add item" onChange={(e) => setText(e.target.value)} value={text}></textarea>
        <button  type="submit">Add item</button>
    </form>
        <MyList 
        updateItem={updateItem}
        header="Really epic list component"
        items={items}
        /> 
    </div>)
}



export default MyContainer;