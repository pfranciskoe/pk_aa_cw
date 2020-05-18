import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({},this.state)
        this.props.processForm(user)
    }

    handleChange(type) {
        return (e)=>{this.setState({[type]:e.target.value})}
    }
    render(){
        return(
            <div>
                <h2>{this.props.formType}</h2>
                <form>
                    <label>Username:
                        <input type="text" onChange={this.handleChange('username')} value={this.state.username} />
                    </label>
                    <label>Password:
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
                <ul className='errors'>
                    {Object.values(this.props.errors.session).map( (er,idx)=>(
                    <li key={`${er}-${idx}`}>{er}</li>
                    )) }
                </ul>
                <Link to={`/${this.formType}`}>{this.props.formType}</Link>
            </div>
        )
    }

}
export default SessionForm;