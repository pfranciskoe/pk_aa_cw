import React from 'react';

class Tabs extends React.Component { 
    constructor(props){
        super(props);
        this.arr = props.items
        this.state = {selectedIndex:0}
    }
    render(){
        return(
            <div className="tabs">
                <ul className="tab-heads">
                    {this.arr.map((obj,idx) => (
                    <h1 className="head"
                        onClick={()=>this.setState({selectedIndex:idx})}
                        
                    >
                        {obj.title}
                    </h1>
                    ))}
                </ul>
                <article>
                    {this.arr[this.state.selectedIndex].content}
                </article>
            </div>
        );
    }

}

export default Tabs