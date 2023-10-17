import Image from "next/image"
import Logo from "/public/images/logo.svg"
import Link from "next/link"
import Styles from "./header.module.scss"

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logotipo}>
        <Image src={Logo} />
      </div>
      <div className={Styles.menu}>
        <Link href="http://jlnetworks.com.br/Index.html">Home</Link>
        <Link href="http://jlnetworks.com.br/Index.html">O que fazemos</Link>
        <Link href="http://jlnetworks.com.br/Index.html">Cases</Link>
      </div>
      <div className={Styles.action}>
        <button className={Styles.button}>Fale conosco</button>
      </div>
    </div>
  )
}

export default Header
