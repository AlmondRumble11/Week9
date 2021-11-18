import {useState, useEffect} from 'react';



function About(){
    let [data, setData] = useState(null);


    useEffect( () =>{
        let mounted = true;

        async function fecthPosts() {
            var posts;

            await fetch('https://jsonplaceholder.typicode.com/posts').
            then(res => res.json()).

            then((posts) => { console.log(posts);
                var a;
                const b  = posts.map((item) => {
                    var id = item.id;
                    var title = item.title;
                    
                    a = {id, title};
                    return a
                    
                
                    
                });
              
                
                if(mounted) {
                   console.log(b);
                   setData(b);
                   console.log(b);
                   
                }
            });
        }
     
      
        fecthPosts();
        
        return() => {
            mounted = false;
        };


    },[]);

    console.log("data"+data);
    var listItems = [];
    if(data){
        listItems =  data.map((item) => 
        //https://www.robinwieruch.de/react-update-item-in-list
        //if item.clicked = true then change textDecoration to line-through. using className to change decoration did not work in the tests but worked on the webpage
        <li  key={item.id} >
            {item.title}
        </li>
        
    );

    }

    return (
        <div>
            <h1>About page..</h1>
            <ul> {listItems}</ul>
         
        </div>
    )
}


export default About