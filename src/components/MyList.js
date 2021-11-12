function MyList(props) {
    console.log(props.items);
    const listItems =  props.items.map((item) => 
        //https://www.robinwieruch.de/react-update-item-in-list
        //if item.clicked = true then change textDecoration to line-through. using className to change decoration did not work in the tests but worked on the webpage
        <li style={{textDecoration:
        item.clicked ? 'line-through' : ''}} key={item.id} onClick={() => props.updateItem(item.id)} >
            {item.text}
        </li>
        
    );
    
    return  (
    <div>
        
        <h1>{props.header}</h1>
       <ol>{listItems}</ol>
        
        
    </div>
    )
}

export default MyList;