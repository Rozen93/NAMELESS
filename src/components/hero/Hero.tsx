import styles from './hero.module.css'


const HeroSection = ({children}:any) => {
  return (
    <section id={styles.hero} className='z-[0]'>
      {children}
      <div className={`${styles.lines} ${styles.cover}`}></div>
      <div className={`${styles.content} ${styles.max_1100}`}>
        <h1 className="tracking-[4.5px] font-semibold font-nova text-2xl md:tex-3xl xl:text-[40px] uppercase">IMPULSA TU PRESENCIA ONLINE</h1>
        <p className="font-nova sm:text-lg md:text-xl lg:text-[1.30rem] pt-4 xl:pt-[1.4rem] ">Especialistas en Desarrollo Web, Marketing Digital <span style={{ textTransform: 'lowercase' }}>y</span> Branding Corporativo</p>
      </div>
      <div className={styles.wave_bottom}>
        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
          <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
          <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
