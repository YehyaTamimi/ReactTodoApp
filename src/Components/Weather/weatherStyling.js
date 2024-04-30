import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    container: {
        display: "flex",
        flexDirection : "column",
        alignItems: "center",
        position: "absolute",
        padding: "10px 10px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        fontWeight: "600",
        top: "20px",
        left: "20px",
        "& p": {
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
            fontSize: "1rem",
            margin: "5px",
            "& span": {
                color: "white"
            }
        }
    },

    icon :{
        color: "yellow",
    },

    weatherIcon: {
        width: "35px",
        height: "35px",
    }
})

export default styles;