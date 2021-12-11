/**
 * Theme/index.js
 */
import { createMuiTheme } from '@material-ui/core/styles';

// Local
import palette from 'assets/globalStyles/palette.scss';

const theme = createMuiTheme({
  palette: {
    primary: palette['darkest']
    // {
    //   main: palette['darkest']
    // }
  },
  overrides: {
    PrivateTabIndicator: {
      colorPrimary: {
        backgroundColor: palette['accent-light']
      }
    },
    MuiTab: {
      textColorPrimary: {
        color: palette['light'],
        fontSize: '1.1rem',
        '&$selected': {
          color: palette['accent-light'],
          fontWeight: '700',
          fontSize: '1.1rem'
        }
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: '1.05rem'
      }
    },

    MuiPaper: {
      elevation2: {
        boxShadow: 'none'
      }
    },
    MuiTableRow: {
      root: {
        '&:hover': {
          backgroundColor: `rgba(12, 45, 84, 0.9) !important`,
          transition: '0.1s ease-in-out'
        }
      }
    },
    MuiTableSortLabel: {
      root: {
        '&:hover': {
          color: palette['accent-light']
        },
        '&$active': {
          color: palette['accent-light']
        }
      },
      iconDirectionDesc: {
        color: `${palette['accent-light']} !important`,
        '&:hover': {
          color: palette['accent-light']
        }
      },
      iconDirectionAsc: {
        color: `${palette['accent-light']} !important`,
        '&:hover': {
          color: palette['accent-light']
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${palette['dark']}`,
        fontSize: '1rem'
      }
    },
    MuiInputBase: {
      input: {
        padding: '10px',
        backgroundColor: palette['input-bg']
      }
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        backgroundColor: palette['input-bg'],
        paddingTop: '0px !important',
        '&$disabled': {
          backgroundColor: palette['input-bg']
        },
        '&$focused': {
          backgroundColor: palette['input-bg']
        },
        '&:hover': {
          backgroundColor: palette['input-bg']
        }
      },
      input: {
        padding: '10px 12px 10px'
      }
    }
  }
});

export default theme;
