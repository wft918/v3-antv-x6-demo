export const $ = (name:string):HTMLElement => document.querySelector(name) as HTMLElement

export const getContainerSize = (dom: HTMLElement): { width: number, height: number } => ({ width: dom.getBoundingClientRect().width, height: dom.getBoundingClientRect().height })

export const getImageUrl = (name:string) => new URL(`../assets/${name}`, import.meta.url).href