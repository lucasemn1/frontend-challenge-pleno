import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Navbar() {
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

        <span>
          <ul>
            <li>
              <Link href="#">Sobre</Link>
            </li>
            <li>
              <Link href="#">Preço</Link>
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
      </div>
    </nav>
  );
}
