

const MyHOC = (OriginalComponent, props) => {
    
  
    return (
            <div className="wrapper">
                 <OriginalComponent name={props.name} />
            </div> 
    )
}   
export default MyHOC