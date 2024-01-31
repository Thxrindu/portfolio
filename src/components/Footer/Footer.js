import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
//checked
export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>{`THARINDU SAMARAKOON | 2024`}</span>
    </Text>
  </footer>
);
