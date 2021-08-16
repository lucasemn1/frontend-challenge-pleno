// Next
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Icons
import { MdMenu } from "react-icons/md";

// Styles
import styles from "./styles.module.scss";

export default function Navbar() {
  function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");

    if (window.screen.width <= 960) {
      navMenu.classList.toggle(styles.hiddenMobileMenu);
      console.log("oi");
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={`content ${styles.content}`}>
        <Image
          src="/assets/img/logo.png"
          alt="Logomarca"
          className={styles.logo}
          width="90"
          height="28"
        />

        <span id="nav-menu" className={styles.hiddenMobileMenu}>
          <ul>
            <li>
              <Link href="#">Sobre</Link>
            </li>
            <li>
              <Link href="#">Desenvolvedores</Link>
            </li>
          </ul>

          <ul>
            <li>Buscar</li>
            <li>
              <Link href="#">Ajuda</Link>
            </li>
            <li>
              <Link href="#">Contato</Link>
            </li>
            <li className={styles.start}>
              <Link href="#">Começar</Link>
            </li>
          </ul>
        </span>

        <button onClick={toggleMenu}>
          <MdMenu size={20} />
        </button>
      </div>
    </nav>
  );
}
