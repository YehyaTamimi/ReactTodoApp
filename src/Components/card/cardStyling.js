
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  card: {
    alignSelf: 'center',
    marginTop: '20px',
    padding: '20px',
    width: '70%',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    '@media screen and (max-width: 600px)': {
      width: '80%',
    }
  },

  container: {
    display: 'flex',
    position: 'relative',
    paddingLeft: '38px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    alignItems: 'center',
    '& input': {
      position: 'absolute',
      opacity: '0',
      cursor: 'pointer',
      height: '0',
      width: '0',
    },
    '&:hover input ~ $checkmark': {
      backgroundColor: '#ccc',
    },
    '& input:checked ~ $checkmark': {
      backgroundColor: 'green',
    },
  },

  checkmark: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '30px',
    width: '30px',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '50%',
    marginTop: '3px',
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
    },
    '&:after': {
      left: '11px',
      top: '7px',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)',
    },
  },

  text: {
    flex: '1',
    alignSelf: 'center',
    fontSize: '1.2rem !important',
    marginLeft: '10px',
  },

  textInput: {
    flex: '1',
    padding: '10px 10px !important',
    width: '10%',
  },

  crossed: {
    textDecoration: 'line-through',
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

  cardContent: { display: "flex", justifyContent: "space-around", padding: "0", paddingBottom: "0 !important" },
});

export default styles;