import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';

import styles from './index.module.css';

const facts = [
  ['Minecraft', '1.21.1'],
  ['Mod Loader', 'NeoForge 21.1.235'],
  ['Java', '21'],
  ['当前版本', '0.2.0 · 开发中'],
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroGrid} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>MINECRAFT MODPACK · NEOFORGE 1.21.1</p>
        <Heading as="h1" className={styles.heroTitle}>
          Cinder<span>works</span>
        </Heading>
        <p className={styles.heroChinese}>余烬工坊</p>
        <p className={styles.heroDescription}>
          火焰退去之后，余烬仍在暗处发红。让齿轮、锅炉与铁路重新转动起来
        </p>
        <div className={styles.actions}>
          <Link
            className={styles.primaryButton}
            to="/docs/intro">
            阅读文档
          </Link>
          <Link
            className={styles.secondaryButton}
            href="https://github.com/alittlehuaji/Cinderworks/"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className={styles.buttonIcon} aria-hidden="true" />
            <span>GitHub</span>
            <FiExternalLink className={styles.externalIcon} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="余烬工坊"
      description="面向 Minecraft 1.21.1 NeoForge 的科技、机械与自动化整合包">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.intro}>
          <div>
            <p className={styles.sectionLabel}>ABOUT THE PACK</p>
            <Heading as="h2">从第一根传动轴开始</Heading>
          </div>
          <p>
            Cinderworks 是以 Create 为核心，并结合 Applied Energistics 2 与 Mekanism 的 Minecraft 整合包
            围绕机械动力、工业生产、物流仓储与自动化展开，同时保留长期生存和多人协作所需的探索、建造与生活内容
          </p>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.infoCopy}>
            <p className={styles.sectionLabel}>PACK INFORMATION</p>
            <Heading as="h2">整合包信息</Heading>
            <p>请使用 Java 21，并通过支持 Modrinth 整合包导入的启动器安装最新发布版本</p>
            <Link to="/docs/intro" className={styles.textLink}>查看安装与使用指南 →</Link>
          </div>
          <dl className={styles.factList}>
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.startSection}>
          <p className={styles.sectionLabel}>READY TO BUILD</p>
          <Heading as="h2">点燃你的第一座工坊</Heading>
          <p>下载整合包，导入启动器，然后从最基础的机械动力开始</p>
          <Link
            className={styles.primaryButton}
            href="https://github.com/alittlehuaji/Cinderworks/releases">
            前往下载页面
          </Link>
        </section>
      </main>
    </Layout>
  );
}
