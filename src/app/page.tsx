import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hi, I'm Angelus 👋</h1>
        <h2 className={styles.subtitle}>CS Student & Web Developer</h2>
        <p className={styles.description}>
          I design and develop web applications using JavaScript, React, and Next.js.
        </p>
      </section>
    </main>
  );
}
