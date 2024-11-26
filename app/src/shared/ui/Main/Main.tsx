import { ReactNode } from 'react';
import classnames from 'classnames';
import * as styles from './main.module.css';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return <main className={classnames(styles.main)}>{children}</main>;
}
