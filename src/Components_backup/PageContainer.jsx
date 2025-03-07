import { Box, Paper } from '@mui/material';
import PropTypes from 'prop-types';

const PageContainer = ({ children, elevation = 1, noPadding = false }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: '100%',
        p: noPadding ? 0 : { xs: 2, sm: 3, md: 4 },
        borderRadius: { xs: 0, sm: 1 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  elevation: PropTypes.number,
  noPadding: PropTypes.bool,
};

export default PageContainer; 