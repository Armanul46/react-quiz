import Illustration from "../Illustration";
import Form from "../Form";
import classes from "../../styles/Signup.module.css";
import image from "../../assets/images/signup.svg";
import Textinput from "../Textinput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import {Link} from 'react-router-dom';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>

            <div className="column"> 
                <Illustration img={image} />
                <Form className={`${classes.signup}`}>
                    <Textinput type="text" placeholder="Enter name" icon="person" />

                    <Textinput type="email" placeholder="Enter Email" icon="alternate_email" />

                    <Textinput type="password" placeholder="Enter password" icon="lock" />

                    <Textinput type="password" placeholder="Conform password" icon="lock_clock" />

                    <Checkbox text="I agree to the Terms & Conditions" />

                    <Button><span>Submit now</span></Button>

                    <div class="info">
                        Already have an account? <Link to="login.html">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}