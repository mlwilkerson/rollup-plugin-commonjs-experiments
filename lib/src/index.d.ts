interface Thing {
  num: number;
  name: string;
}
interface ThingSet {
  [key: string]: Thing
}
export const alpha: Thing;
export const beta: Thing;
export const gamma: Thing;
declare const thingSet: ThingSet;
export default thingSet;
