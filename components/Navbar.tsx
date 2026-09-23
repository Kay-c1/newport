"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

const links = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:scrolled||open?"color-mix(in srgb, var(--bg) 82%, transparent)":"transparent",borderBottom:scrolled&&!open?"1px solid var(--border)":"none",backdropFilter:scrolled?"blur(18px)":"none",transition:"all .3s ease"}}>
        <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:"70px"}}>
          <a href="/" style={{color:"var(--text)",fontWeight:900,fontSize:"20px",textDecoration:"none",letterSpacing:"-.06em",zIndex:60}}>KDS<span style={{color:"var(--maroon)"}}>.</span></a>
          <div className="desktop-nav" style={{display:"flex",alignItems:"center",gap:"28px"}}>
            {links.map(link => (
              <a key={link.label} href={link.href} style={{color:"var(--muted)",textDecoration:"none",fontSize:"12px",textTransform:"uppercase",letterSpacing:".14em",transition:"color .2s"}}
                onMouseEnter={e => e.currentTarget.style.color="var(--text)"}
                onMouseLeave={e => e.currentTarget.style.color="var(--muted)"}
              >{link.label}</a>
            ))}
            <ThemeToggle />
            <a href="mailto:delossantoskristian5@gmail.com" className="magnetic" style={{color:"#fff",background:"var(--maroon)",padding:"9px 17px",borderRadius:"999px",fontSize:"12px",textDecoration:"none",fontWeight:700}}>Hire Me</a>
          </div>
          <button onClick={() => setOpen(!open)} className="mobile-nav" aria-label="Toggle menu" style={{background:"none",border:"none",cursor:"pointer",padding:"8px",display:"none",flexDirection:"column",gap:"5px",zIndex:60}}>
            <span style={{display:"block",width:"24px",height:"2px",background:"var(--text)",transform:open?"rotate(45deg) translateY(7px)":"none",transition:"all .3s"}} />
            <span style={{display:"block",width:"24px",height:"2px",background:"var(--text)",opacity:open?0:1,transition:"all .3s"}} />
            <span style={{display:"block",width:"24px",height:"2px",background:"var(--text)",transform:open?"rotate(-45deg) translateY(-7px)":"none",transition:"all .3s"}} />
          </button>
        </div>
      </nav>
      <div style={{position:"fixed",inset:0,zIndex:40,background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",opacity:open?1:0,pointerEvents:open?"auto":"none",transform:open?"translateY(0)":"translateY(-10px)",transition:"all .4s ease"}}>
        {links.map((link,i) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{color:"var(--text)",fontSize:"clamp(34px,10vw,58px)",fontWeight:900,textDecoration:"none",letterSpacing:"-.06em",opacity:open?1:0,transform:open?"translateY(0)":"translateY(20px)",transition:"all .35s ease",transitionDelay:open?(i*0.05)+"s":"0s"}}>{link.label}</a>
        ))}
        <div style={{marginTop:"20px"}}><ThemeToggle /></div>
      </div>
      <style>{`
        @media (max-width:768px) {
          .desktop-nav { display:none !important; }
          .mobile-nav { display:flex !important; }
        }
      `}</style>
    </>
  )
}
