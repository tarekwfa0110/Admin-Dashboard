import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const ResponsiveGrid = ({ children, spacing = 3, minChildWidth = 300 }) => {
  return (
    <Grid container spacing={spacing}>
      {React.Children.map(children, (child) => (
        <Grid
          item
          xs={12}
          sm={minChildWidth >= 600 ? 12 : 6}
          md={minChildWidth >= 400 ? 6 : 4}
          lg={minChildWidth >= 300 ? 4 : 3}
          xl={minChildWidth >= 300 ? 3 : 2}
        >
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

ResponsiveGrid.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number,
  minChildWidth: PropTypes.number,
};

export default ResponsiveGrid; 