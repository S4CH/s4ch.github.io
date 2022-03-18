import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

export const projectStyles = makeStyles(() =>
  createStyles({
    container: {
      flexDirection: 'row',
      margin: 20,
      marginLeft: 0,
      display: 'flex',
    },
    imgContainer: {
      flex: '1 1',
      marginRight: 10,
    },
    img: {
      width: 250,
      borderRadius: 6,
      border: '1px solid #e8e8e8',
      flex: '1 1',
    },
    content: {
      flex: '2 1',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      flex: '2 0',
      fontWeight: 800,
      fontSize: 18,
    },
    description: {
      fontSize: 14,
    },
    linkContainer: {
      display: 'flex',
    },
    link: {
      marginRight: '.7rem',
      marginLeft: '-.7rem',
      padding: '.5rem .7rem',
      color: 'blue',
    },
  }),
);
