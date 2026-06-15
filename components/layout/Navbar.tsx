'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    setDark(!dark)
  }

  const toggleMenu = () => setMenuOpen((v) => !v)
  const closeMenu  = () => setMenuOpen(false)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          {/* Brand — left */}
          <div className={styles.brand}>
            <div className={styles.avatar}>A</div>
            <span className={styles.brandName}>Abinash Kumar</span>
          </div>

          {/* Links — CENTER */}
          <div className={`${styles.links} nav-links-desktop`}>
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
            ))}
          </div>

          {/* Actions — right */}
          <div className={styles.right}>
            <a href="mailto:abinashkumar185@gmail.com" className={`${styles.hireBtn} hire-btn-desktop`}>
              Hire Me ✦
            </a>
            <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
              {dark ? '☀️' : '🌙'}
            </button>
            <button
              className={`${styles.hamburger} hamburger ${menuOpen ? styles.open + ' open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} className={styles.drawerLink} onClick={closeMenu}>{l.label}</a>
        ))}
        <a href="mailto:abinashkumar185@gmail.com" className={styles.drawerLink} onClick={closeMenu}>
          ✉️ Hire Me
        </a>
      </div>
    </>
  )
}
