import { PropsWithChildren } from 'react';
import * as styles from './layout.module.css';
import classnames from 'classnames';

export function Layout(props: PropsWithChildren) {
  const { children } = props;

  return <div className={classnames(styles.root)}>{children}</div>;
}
