import classes from "./MountainsInfo.module.css"

const ChallengeSummary = () => {
    return (
        <section className={classes.info}>
            <h2 className={classes.infoh2}>Welcome to the National 3 x 5 Peaks Challenge!</h2>
            <p>Climb the five highest mountains within Scotland, England and Wales. Log your progress and enjoy the adventure.</p>
            <p>Check off the mountains as you go and save any important information from your climb (routes, weather or quality of the company you had on the day)</p>
        </section>
    );
};

export default ChallengeSummary