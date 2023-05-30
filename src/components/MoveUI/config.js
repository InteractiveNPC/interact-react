import woodcutterLocs from "./woodcutter";
import twosistersLocs from "./twosisters";

export const locationNames = [
  ["수사실", "나무꾼의 집", "나무꾼의 방", "연못", "천계"],
  ["수사실", "장화홍련의 집", "연못", "관아 밖", "관아 안"],
];

export const locations = [
  woodcutterLocs.map((Loc) => <Loc />),
  twosistersLocs.map((Loc) => <Loc />),
];
