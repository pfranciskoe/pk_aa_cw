import React from 'react';

export default class Autocomplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal : ''
        }
        this.matches = this.matches.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    matches(){
        if(this.state.inputVal.length === 0) return this.props.names
        const matchingNames = [];
        this.props.names.forEach(name=>{
            if(name.slice(0,this.state.inputVal.length)===this.state.inputVal){
                matchingNames.push(name)
            }
        })
        return matchingNames;
    }
    handleInput(event){
        this.setState({inputVal: event.currentTarget.value})
    }
    handleClick(event){
        this.setState({ inputVal: event.currentTarget.innerText })
    }
    render(){
        const matches = this.matches()
        return(
            <div className='auto-complete'>
                <input
                    className='auto-complete__input' 
                    onChange={this.handleInput}
                    placeholder='Search...'
                    value={this.state.inputVal}/>   
                <ul className='auto-complete__list'>
                    {matches.map((name,index)=>(
                        <li key={index} onClick={this.handleClick}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}