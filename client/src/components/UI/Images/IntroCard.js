import classes from "./Card.module.css"
const IntroCard = (props) => {
    return <div className={classes.introcard}>{props.children}</div>
};

export default IntroCard