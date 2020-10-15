import React from 'react';
export default class Translator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: ''
        };
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(event){
        this.setState({inputVal:event.currentTarget.value})
    }
    render(){
        const output = this.props.dict[this.state.inputVal] ?
            this.props.dict[this.state.inputVal] :
            ''
        return(
            <div className='translator'>
                <input className='translator-input' onChange={this.handleInput}/>
                <p className='translator-output'>{output}</p>
            </div>
        )
    }
}