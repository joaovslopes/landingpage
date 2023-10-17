import { Inter } from "next/font/google"
import styles from "./Home.module.scss"
import Header from "@/components/header"
import Welcome from "@/components/welcome"
import Button from "@/components/button"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
    </div>
  )
}
