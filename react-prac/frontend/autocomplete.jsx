import React from 'react';

export default class Autocomplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: ''
        }
        this.matches = this.matches.bind(this)
    }
    matches(){
        if(inputVal.length === 0) return this.props.names
        matchingNames = [];
        this.props.names.forEach(name=>{
            if(name.slice(0,this.state.inputVal.length)===this.state.inputVal){
                matchingNames.push(name)
            }
        })
        return matchingNames;
    }
    render(){
        return(
            <div className='auto-complete'>
                <input type="text" className='auto-complete__input'/>
                <ul className='auto-complete__list'>
                    {this.matches.map((name,index)=>(
                        <li key={index}>name</li>
                    ))}
                </ul>
            </div>
        )
    }
}