import { Box } from '@mui/material';
import { Location } from '@shared/ui/Location';

import Logo from '@shared/assets/icons/Logo.svg';
import * as styles from './header.module.css';

export const Header = () => {
  return (
    <Box className={styles.headerContainer}>
      <Logo />
      <Location></Location>
    </Box>
  );
};
