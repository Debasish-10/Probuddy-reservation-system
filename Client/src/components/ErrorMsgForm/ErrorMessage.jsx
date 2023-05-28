import React from 'react';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const ErrorMessage = ({ msg }) => {
  return (
    <span style={{ color: 'red', marginTop: '5px' }}>
      <ReportProblemOutlinedIcon />
      <span style={{ position: 'relative', top: '-5px', left: '5px' }}>
        {msg}
      </span>
    </span>
  );
};

export default ErrorMessage;
