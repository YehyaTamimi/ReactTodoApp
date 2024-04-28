import { createUseStyles } from 'react-jss'


const styles = createUseStyles({

    inputContainer: {
      position: 'relative',
      width: '100%',
      "& input": {
        padding: '10px 0 !important',
      width: '100%',
      fontSize: '1rem',
      backgroundColor: 'white',
      marginTop: '0 !important',
      borderRadius: '5px',
      } 
    },

    input: {
      padding: '5px 0px 5px 10px',
      width: '100%',
      fontSize: '1rem',
      backgroundColor: 'white',
      marginTop: '0 !important',
      borderRadius: '5px',
    },

    add: {
      position: 'absolute !important',
      padding: '10px !important',
      color: 'white !important',
      top: '4px',
      right: '-5px',
      backgroundColor: 'black !important',
      borderRadius: '5px !important',
    },
  });

  export default styles;