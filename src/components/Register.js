import React from "react";


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState(event.target.value)
    }

    onPasswordChange = (event) => {
        this.setState(event.target.value)
    }

    onNameChange = (event) => {
        this.setState(event.target.value)
    }

    render(){
        return(
            <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Register</legend>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="name">Name</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        )
    }
}

export default Register;