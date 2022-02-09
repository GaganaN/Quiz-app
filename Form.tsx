import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

class Form extends Component {
    constructor(props: any) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            language: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event: any) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event: any) => {
        this.setState({
            lastName: event.target.value
        })
    }
   
    genderhandler = (event: any) => {
        this.setState({
            gender: event.target.value
        })
    }

    languagehandler = (event: any) => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = (event: any) => {
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            gender: "",
            language: "",
        })
     event.preventDefault()

    }

    selectedLaguage = (event: any) => {
        console.log(this.state);
        this.setState({
            language: "",
        })
     event.preventDefault()

    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <Link to="/" className="title">Quiz Portal</Link>
                    <hr />
                    <label>FirstName :</label> <input type="text" onChange={this.firsthandler} placeholder="FirstName..." required/><br />
                    <label>LastName :</label> <input type="text" onChange={this.lasthandler} placeholder="LastName..." required/><br />
                    <label>Gender :</label><select onChange={this.genderhandler} placeholder="Select Gender">
                        <option>       </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>Language :</label>
                    <select onChange={this.languagehandler} required>
                        <option value="English">English</option>
                        <option value="Kannada">Kannada</option>
                    </select>
                    <br/>
                    <Link to="/quiz">
                        <input type="submit" value={"Submit"} ></input>
                    </Link>
                        
                   
                </form>

            </div>

        )
    }
}

export default Form