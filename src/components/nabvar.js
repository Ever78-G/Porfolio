import { itemsNavbar } from "../../data";
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
      {itemsNavbar.map((item) => (
          <div key={item.id} className={styles.navbar_item}>
            
            <a href={item.link} className={styles.navbar_link}>
              {item.icon}
            </a>
          </div>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;
