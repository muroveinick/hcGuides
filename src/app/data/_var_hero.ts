interface A {
  r: 40,
  levels: 11,
};
interface P {
  r: 35,
  levels: 11,
};
interface T10 {
  r: 30,
  levels: 10,
};
interface T14 {
  r: 30,
  levels: 14,
}
interface Star {
  r: 50,
  levels: 100,
}

interface relicView {
  id: number,
  logo: string,
  curr_level: number,
  description: string,
  variables: number[][] | string[][],
  type: A | P | T10 | T14 | Star
}



export { relicView, A, P, T10, T14 }