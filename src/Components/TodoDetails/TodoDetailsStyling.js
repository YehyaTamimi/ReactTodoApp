import { createUseStyles } from 'react-jss'


const styles = createUseStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },

    form: {
        backgroundColor: "white",
        width: "60%",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        display: "flex",
        flexDirection: "column"
    },

    title: {
        fontWeight: "600",
        fontSize: "2rem",
        marginBottom: "20px",
    },

    descTitle: {
        fontWeight: "600",
        fontSize: "1.3rem",
        marginBottom: "5px",
    },

    desc: {
        border: "1px solid rgb(210, 210, 210)",
        borderRadius: "5px",
        padding: "5px",
        marginBottom: "20px",
    },

    date: {
        borderRadius: "5px",
        marginBottom: "20px",
    },

    options: {
        display: "flex",
        gap: "10px",
    },

    high: {
        padding: "7px",
        border: "1px solid red",
        alignSelf: "start",
        backgroundColor: "rgba(255, 0, 0, 0.43)",
        borderRadius: "5px",
        fontWeight: "600",
        marginBottom: "20px"
    },

    mid: {
        padding: "7px",
        border: "1px solid rgba(255, 186, 0, 0.9)",
        alignSelf: "start",
        backgroundColor: "rgba(255, 186, 0, 0.6)",
        borderRadius: "5px",
        fontWeight: "600",
        marginBottom: "20px"
    },

    low: {
        padding: "7px",
        border: "1px solid green",
        alignSelf: "start",
        backgroundColor: "rgba(0, 255, 0, 0.43)",
        borderRadius: "5px",
        fontWeight: "600",
        marginBottom: "20px"
    },

    complete: {
        padding: "7px",
        border: "1px solid green",
        alignSelf: "start",
        backgroundColor: "rgba(0, 255, 0, 0.43)",
        borderRadius: "5px",
        fontWeight: "600",
        marginBottom: "20px",
    },

    incomplete: {
        padding: "7px",
        border: "1px solid rgba(255, 186, 0, 0.9)",
        alignSelf: "start",
        backgroundColor: "rgba(255, 186, 0, 0.6)",
        borderRadius: "5px",
        fontWeight: "600",
        marginBottom: "20px",
    },

    buttons: {
        alignSelf: "flex-end",
    },

    edit: {
        backgroundColor: 'green !important',
        color: 'white !important',
        borderRadius: '5px !important',
        marginLeft: '20px !important',
      },
    
      save: {
        backgroundColor: 'green !important',
        color: 'white !important',
        borderRadius: '5px !important',
        marginLeft: '20px !important',
      },
    
      delete: {
        backgroundColor: 'red !important',
        color: 'white !important',
        borderRadius: '5px !important',
        marginLeft: '10px !important',
      },
      
      discard: {
        backgroundColor: 'red !important',
        color: 'white !important',
        borderRadius: '5px !important',
        marginLeft: '10px !important',
      },

    back: {
        backgroundColor: "orange",
        padding: "10px",
        marginLeft: "10px",
        marginTop: "0px",
        borderRadius: "5px",
        cursor: "pointer",
        height: "39px",
        color: "white",
        fontWeight: "600"
      },

      input: {
        padding: '5px 0px 5px 10px !important',
        fontSize: '1rem',
        backgroundColor: 'white',
        marginTop: '0 !important',
        borderRadius: '5px',
        border: "1px solid rgb(210, 210, 210)",
        marginBottom: "20px",
      },

      selected: {
        border: "2px solid black",
      }


});

export default styles;