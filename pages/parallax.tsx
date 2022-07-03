import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Parallax.module.css'
import { ParallaxBanner } from 'react-scroll-parallax';

import hillGround from '../public/hill/hill_01_ground.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Parallax</title>
        <meta name="description" content="Parallax Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.parallax}>
        <div className={styles.caption}>
          <span className='border'>Parallax Effect</span>
        </div>
      </div>

      <div className={styles.separator}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima esse voluptatum impedit? Asperiores deserunt inventore consequuntur libero numquam rem qui, facilis facere dolor vitae autem et dicta odio! Distinctio!
      </div>

      <ParallaxBanner
        layers={[
          { image: '/hill/hill_11_background.png', speed: 0 },
          { image: '/hill/hill_10_distant_clouds.png', speed: -15 },
          { image: '/hill/hill_09_distant_clouds1.png', speed: -10 },
          { image: '/hill/hill_08_clouds.png', speed: -30 },
          { image: '/hill/hill_07_huge_clouds.png', speed: -20 },
          { image: '/hill/hill_06_hill2.png', speed: -10 },
          { image: '/hill/hill_05_hill1.png', speed: -5 },
          { image: '/hill/hill_04_bushes.png', speed: -10 },
          { image: '/hill/hill_03_distant_trees.png', speed: -30 },
          { image: '/hill/hill_02_trees.png', speed: -20 },
          { image: '/hill/hill_01_ground.png', speed: -10 },
        ]}
        style={{minHeight: '100vh'}}
      />
    </>
  )
}

export default Home
