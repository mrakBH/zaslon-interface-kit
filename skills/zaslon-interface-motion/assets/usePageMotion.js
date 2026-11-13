import { useEffect } from 'react';
import gsap from 'gsap';

// One owner per route. SSR is visible; motion only enhances mounted content.
export function usePageMotion(root, path, enabled) {
 useEffect(() => {
  if (!enabled || !root.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const el=root.current;
  let observer;
  const ctx=gsap.context(() => {
   const hero=el.querySelector('h1');
   if(hero) gsap.from(hero,{y:28,opacity:.4,duration:.85,ease:'power3.out',clearProps:'transform,opacity'});
   const seen=new WeakSet();
   observer=new IntersectionObserver(entries=>{
    for(const entry of entries){
     if(!entry.isIntersecting||seen.has(entry.target)) continue;
     seen.add(entry.target); observer.unobserve(entry.target);
     ctx.add(()=>gsap.from(entry.target,{y:24,opacity:.45,duration:.7,ease:'power3.out',clearProps:'transform,opacity'}));
    }
   },{threshold:.08});
   el.querySelectorAll('.reveal,.cb-section,.course-section,.library-card,.blog-card,.content-heading,.content-crosslink').forEach(node=>{
    if(node.getBoundingClientRect().top>innerHeight*.8) observer.observe(node);
   });
  },el);
  return ()=>{observer?.disconnect();ctx.revert();};
 },[root,path,enabled]);
}
