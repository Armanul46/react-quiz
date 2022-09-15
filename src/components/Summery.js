import classes from "../styles/Summery.module.css";
import img from "../assets/images/success.png";

export default function Summery() {
    return(
        <div className={classes.summary}>
          <div className={classes.point}>
            {/* <!-- progress bar will be placed here --> */}
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.badge}>
            <img src={img} alt="Success" />
          </div>
        </div>
    );
}