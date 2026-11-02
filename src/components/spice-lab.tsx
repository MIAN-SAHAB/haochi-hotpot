"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { spices } from '@/lib/menu';

gsap.registerPlugin(ScrollTrigger);
const profiles = [
  { title: 'Easy does it.', note: 'A warm welcome. A gentle kick. All the soul.', color: '#e9b65a', mood: 'GENTLE & GOLDEN' },
  { title: 'A slow burn.', note: 'A little tingle that keeps you coming back.', color: '#e86f2c', mood: 'THE SWEET SPOT' },
  { title: 'No holding back.', note: 'Bold chilli heat. A finish you’ll remember.', color: '#f04428', mood: 'FOR THE FIRE-HEARTED' },
];

export function SpiceLab() {
  const [heat, setHeat] = useState(50);
  const level = heat < 34 ? 0 : heat < 67 ? 1 : 2;
  const profile = profiles[level];
  const root = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('.heat-copy > *', { y: 45, opacity: 0, stagger: .12, duration: .8, scrollTrigger: { trigger: root.current, start: 'top 65%' } });
        gsap.from('.heat-instrument', { scale: .75, rotation: -35, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 65%' } });
        gsap.to('.heat-orbit', { rotation: 100, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
      }, root);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo('.heat-chilli', { rotation: -18, scale: .75 }, { rotation: 0, scale: 1, duration: .85, ease: 'elastic.out(1,.5)', overwrite: true });
      gsap.fromTo('.heat-profile', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: .4, overwrite: true });
    }, visual);
    return () => context.revert();
  }, [level]);

  return (
    <section id="find-your-fire" className="heat-lab" ref={root} style={{ '--heat-color': profile.color, '--heat-angle': `${-120 + heat * 2.4}deg`, '--heat-fill': `${heat}%`, '--heat-speed': `${5 - heat * .03}s` } as CSSProperties}>
      <div className="heat-scene">
        <div className="heat-copy">
          <span className="eyebrow">02 / THE HAOCHI HEAT LAB</span>
          <h2>A little kick.<br/>Or a little <br/><em>chaos.</em></h2>
          <p>Comfort has a wild side. Turn the heat up and find yours.</p>
          <div className="heat-presets" role="group" aria-label="Choose spice level">
            {spices.map((spice, index) => <button key={spice} aria-pressed={level === index} onClick={() => setHeat([15, 50, 90][index])}><small>0{index + 1}</small>{spice}<span aria-hidden="true">{'·'.repeat(index + 1)}</span></button>)}
          </div>
          <Link className="button heat-order" href={`/menu?spice=${spices[level]}`}>Make mine {spices[level].toLowerCase()} <span>↗</span></Link>
        </div>
        <div className="heat-visual" ref={visual}>
          <div className="heat-instrument">
            <div className="heat-orbit" aria-hidden="true"><span>FRESH BROTH · REAL CHILLI · YOUR RULES</span><i>✳</i></div>
            <div className="heat-aura" aria-hidden="true"/>
            <svg className="heat-ticks" viewBox="0 0 400 400" aria-hidden="true">
              {Array.from({ length: 49 }, (_, i) => <line key={i} x1="200" y1="22" x2="200" y2={i % 4 === 0 ? '39' : '29'} transform={`rotate(${-120 + i * 5} 200 200)`} className={i <= heat * .48 ? 'lit' : ''}/>)}
            </svg>
            <div className="heat-needle" aria-hidden="true"><i/></div>
            <div className="heat-core">
              <svg className="heat-chilli" viewBox="0 0 200 200" aria-hidden="true"><path className="chilli-stem" d="M130 53Q125 25 151 23"/><path className="chilli-body" d="M130 49C172 71 154 119 115 145C84 166 47 172 27 161C68 154 87 127 91 91C93 61 108 43 130 49Z"/><path className="chilli-shine" d="M111 68Q100 82 101 99"/></svg>
              <div className="heat-profile" aria-live="polite"><span>{profile.mood}</span><strong>{spices[level]}</strong><p>{profile.title}</p></div>
            </div>
            <div className="heat-embers" aria-hidden="true" key={level}>{Array.from({length: 12}, (_, i) => <i key={i} style={{ '--ember-angle': `${i * 30}deg`, '--ember-delay': `${i * -.27}s` } as CSSProperties}/>)}</div>
          </div>
          <div className="heat-control"><div><label htmlFor="heat-control">TURN UP THE FEELING</label><span aria-hidden="true">− &nbsp; / &nbsp; +</span></div><input id="heat-control" aria-label="Spice intensity" aria-valuetext={spices[level]} type="range" min="0" max="100" value={heat} onChange={event => setHeat(Number(event.target.value))}/><p>{profile.note}</p></div>
        </div>
      </div>
    </section>
  );
}
