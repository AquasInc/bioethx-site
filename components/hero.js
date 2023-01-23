import Image from "next/image";
import heroImage from "../public/hero.webp";
import styles from "../styles/hero.module.css";

const Hero = () => (
  <div className={styles.hero}>
    <Image
      src={heroImage}
      layout="fill"
      objectFit="cover"
      objectPosition="50% 50%"
      placeholder="blur"
      quality={100}
      priority
      alt="Hero image"
    />
  </div>
);

export default Hero;
