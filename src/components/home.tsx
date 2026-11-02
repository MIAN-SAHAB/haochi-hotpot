"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { addons, momos, money, whatsapp, instagram } from '@/lib/menu';
import { ActionLink, Preloader } from './shell';
import { BowlLayers } from './bowl-layers';
import { SpiceLab } from './spice-lab';
gsap.registerPlugin(ScrollTrigger);
export function Conversion(){return <section className="conversion"><span className="eyebrow">THE NIGHT IS YOUNG. THE BROTH IS READY.</span><h2>Ready to<br/>break the <em>seal?</em></h2><div className="actions"><ActionLink href={whatsapp()}>Order on WhatsApp <span>↗</span></ActionLink><a className="text-link" href={instagram} target="_blank" rel="noreferrer">Slide into our DMs ↗</a></div><p>Warm & fresh. Every single time.</p></section>}
export function Home(){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{
 gsap.to('.hero-photo',{scale:1.18,yPercent:8,ease:'none',scrollTrigger:{trigger:'.hero-wrap',start:'top top',end:'bottom bottom',scrub:1}});
 gsap.to('.hero-copy',{y:-85,opacity:.15,ease:'none',scrollTrigger:{trigger:'.hero-wrap',start:'35% top',end:'bottom bottom',scrub:1}});
 const tl=gsap.timeline({scrollTrigger:{trigger:'.anatomy-wrap',start:'top top',end:'bottom bottom',scrub:1}});tl.from('.ingredient',{opacity:0,y:-120,scale:.7,stagger:.65,duration:1}).from('.bowl-ring',{scale:.6,opacity:0,duration:1},0).from('.food-layer',{opacity:0,y:-90,scale:.85,transformOrigin:'50% 50%',stagger:.65,duration:1},0);
 gsap.to('.momo-track',{x:()=>-Math.max(0,(document.querySelector('.momo-track') as HTMLElement).scrollWidth-window.innerWidth+80),ease:'none',scrollTrigger:{trigger:'.momo-wrap',start:'top top',end:'bottom bottom',scrub:1,invalidateOnRefresh:true}});
 gsap.from('.conversion h2',{y:70,rotation:-3,opacity:.4,scrollTrigger:{trigger:'.conversion',start:'top 85%',end:'top 20%',scrub:1}});
 gsap.to('.ritual-image',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'.ritual',start:'top bottom',end:'bottom top',scrub:true}});
 gsap.from('.reveal',{y:45,opacity:0,stagger:.1,duration:.8,scrollTrigger:{trigger:'.addons',start:'top 80%'}});
 },root);return ()=>ctx.revert()});return ()=>mm.revert()},[]);
 return <div ref={root}><Preloader/><section className="hero-wrap"><div className="sticky-scene hero" onPointerMove={e=>{if(e.pointerType!=="mouse"||matchMedia("(prefers-reduced-motion: reduce)").matches)return;e.currentTarget.style.setProperty("--steam-drift",`${(e.clientX/window.innerWidth-.5)*40}px`)}}><div className="hero-image-layer"><Image className="hero-photo" src="/assets/images/hotpot.jpg" alt="A steaming bowl of broth with noodles, greens and delicious toppings" fill loading="eager" fetchPriority="high" sizes="100vw"/></div><div className="hero-shade"/><div className="hero-copy"><span className="eyebrow"><i/> HOME KITCHEN. BIG SOUL. LATE NIGHTS.</span><h1>SIMMERED IN<br/><span>TRADITION.</span><br/>MADE FOR<br/><em>MIDNIGHT.</em></h1><p>Small-batch artisanal hotpot & handcrafted momos.<br/>From our home kitchen to your midnight cravings.</p><div className="actions"><ActionLink href="/menu">Feed your cravings <span>↗</span></ActionLink><Link className="text-link" href="/craft">A taste of our story <span>↗</span></Link></div></div><div className="hero-bottom"><span>SCROLL TO FEEL THE HEAT <b>↓</b></span><span>FRESHLY MADE · 6 PM — 2 AM</span><span className="hero-seal">好吃<br/><small>WARM & FRESH</small></span></div><div className="steam" aria-hidden="true">{[0,1,2,3].map(i=><i key={i} style={{animationDelay:`${i*1.3}s`}}/>)}</div></div></section>
 <div className="ticker" aria-hidden="true"><span>SLOW SIMMERED</span>✳<span>HAND PLEATED</span>✳<span>SOUL WARMING</span>✳<span>MIDNIGHT APPROVED</span>✳</div>
 <section className="anatomy-wrap"><div className="sticky-scene anatomy"><div className="section-heading"><span className="eyebrow">01 / THE ANATOMY OF A HAOCHI BOWL</span><h2>A little of everything.<br/><em>A whole lot of soul.</em></h2></div><div className="bowl-composition"><div className="bowl-ring"><BowlLayers/></div>{['Silky noodles','Plump dumplings','Smoked sausages','Crisp greens','House chilli oil'].map((name,i)=><div className={`ingredient ingredient-${i}`} key={name}><span>0{i+1}</span><b>{name}</b><i>✳</i></div>)}</div><p className="scene-note">Five good things. One unforgettable bowl.<br/><Link href="/menu" className="text-link">Make it yours ↗</Link></p></div></section>
 <SpiceLab/>
 <section className="momo-wrap"><div className="sticky-scene momo-scene"><div className="section-heading"><span className="eyebrow">03 / LITTLE PARCELS. BIG FEELINGS.</span><h2>Meet your<br/><em>new obsession.</em></h2><span className="momo-count">HANDCRAFTED · 6 PIECES OF JOY</span></div><div className="momo-track">{momos.map((m,i)=><article className={`momo-feature momo-${i}`} key={m.id}><div className="momo-photo"><Image src="/assets/images/momos.jpg" alt="Handcrafted pleated dumplings, illustrative food photography" fill sizes="(max-width:700px) 80vw, 42vw"/><span>0{i+1}</span></div><div className="momo-caption"><div><span>{m.note}</span><h3>{m.name}</h3></div><Link href={`/menu?momo=${m.id}`} aria-label={`Add ${m.name} to your order`}>{money(m.price)} ↗</Link></div></article>)}</div></div></section>
 <section className="addons"><div className="reveal"><span className="eyebrow">04 / A LITTLE EXTRA NEVER HURT</span><h2>Your bowl.<br/><em>Your rules.</em></h2><p>More crunch. More slurp. That extra spoon of fire.<br/>Make a good thing even better.</p></div><div className="addon-cloud">{addons.map((a,i)=><ActionLink key={a.id} href={`/menu?addon=${a.id}`} className={`addon-badge badge-${i}`}><span>{['✹','◒','〰','≋','✳'][i]}</span>{a.name}<small>+ {money(a.price)}</small></ActionLink>)}</div></section>
 <section className="ritual"><div className="ritual-visual"><Image className="ritual-image" src="/assets/images/momos.jpg" alt="Hand-pleated dumplings prepared with care" fill sizes="(max-width:700px) 100vw, 50vw"/></div><div className="ritual-copy"><span className="eyebrow">05 / THE LATE-NIGHT RITUAL</span><h2>From our home.<br/><em>To your happy place.</em></h2><p>No commercial shortcuts. Every broth is slow-simmered for hours at home, packed piping hot, and sent straight to your door between 6 PM and 2 AM.</p><Link href="/craft" className="text-link">Get to know our kitchen ↗</Link><span className="handwritten">Made with a little more love.</span></div></section><Conversion/></div>;
}




