import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    heroImage: {
      backgroundImage: `url(${require('../../images/background.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '400px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },

    h1: {
        color: 'white',
    },

    heroContainer: {
      width: '50%',
      marginTop: '100px',
      '@media screen and (max-width: 600px)': {
        width: '70%',
        marginRight: '4%',
      },
    },
  });

  export default styles;