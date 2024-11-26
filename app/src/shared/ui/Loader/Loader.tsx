import classnames from 'classnames';
import { CircularProgress } from '@mui/material';
import * as styles from './loader.module.css';

interface LoaderProps {
  size?: number;
}

export const Loader = (props: LoaderProps) => {
  const { size = 4 } = props;
  return (
    <div className={classnames(styles.loaderContainer)}>
      <CircularProgress size={size} />
    </div>
  );
};
