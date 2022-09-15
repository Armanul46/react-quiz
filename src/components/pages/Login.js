import classes from "../../styles/Login.module.css";
import Illustration from "../Illustration";
import LoginImage from "../../assets/images/login.svg";
import Form from "../Form";
import Textinput from "../Textinput";
import Button from "../Button";
import {Link} from 'react-router-dom';

export default function Login(){
    return ( 
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={LoginImage} />
                <Form className={classes.login}>
                    <Textinput type="text" placeholder="Enter email" icon="alternate_email" />

                    <Textinput type="password" placeholder="Enter password" icon="lock" />

                    <Button><span>Submit now</span></Button>
                    <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    );
}