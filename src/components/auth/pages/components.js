import React from 'react';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Face from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export const LoginBadge = ({ username, next }) => (
  <Paper elevation={3} style={{ borderRadius: '16px' }} onClick={next}>
    <IconButton size="small" style={{ color: '#3c4043' }}>
      <Face style={{ marginRight: '8px' }} />
      <Typography variant="subtitle2">{username}</Typography>
      <KeyboardArrowDown />
    </IconButton>
  </Paper>
);

export const Spacer24 = () => <div style={{ width: '100%', height: '24px' }} />;
