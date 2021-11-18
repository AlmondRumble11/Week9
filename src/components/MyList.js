function MyList(props) {
    console.log(props.items);
    const listItems =  props.items.map((item) => 
        //https://www.robinwieruch.de/react-update-item-in-list
        //if item.clicked = true then change textDecoration to line-through. using className to change decoration did not work in the tests but worked on the webpage
        <li  key={item.id} >
            {item.title}
        </li>
        
    );
    
    return  (
    <div>
        
        <h1>{props.header}</h1>
       <ul>{listItems}</ul>
        
        
    </div>
    )
}

export default MyList;