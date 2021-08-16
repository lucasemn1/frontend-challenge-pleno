import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.newsletter}>
        <h2>Newletter</h2>
        <p>
          Receba nossas informações por email e fique sabendo de todas as
          novidades
        </p>

        <form action="">
          <input type="email" name="" id="" placeholder="Seu email" />
          <button type="button">Salvar</button>
        </form>
      </div>

      <footer className={`content ${styles.footer}`}>
        <Image
          src="/assets/img/logo.png"
          alt="Logomarca"
          className={styles.logo}
          width="90"
          height="28"
        />

        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Sobre</Link>
          </li>
          <li>
            <Link href="#">Preços</Link>
          </li>
          <li>
            <Link href="#">Desenvolvedores</Link>
          </li>
          <li>
            <Link href="#">Ajuda</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
        </ul>

        <h3>+80 1234 56789 | ola@sitedemo.com.br</h3>
      </footer>
    </footer>
  );
}
