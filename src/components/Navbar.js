import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import styles from './Navbar.module.css'

export default function Navbar () {
    return (
      <nav className={styles.navbar}>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} size="2x" />
        </Link>
      </nav>
    );
}