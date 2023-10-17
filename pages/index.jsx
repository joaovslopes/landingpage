import { Inter } from "next/font/google"
import styles from "./Home.module.scss"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}
