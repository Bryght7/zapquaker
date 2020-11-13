export type Building = {
  id: string;
  name: string;
  hp: number[];
};

export type Spell = {
  id: string;
  damage: number[];
};

// prettier-ignore
export const DATA_BUILDINGS: Building[] = [
  { id: "19", name: "Clan castle", hp: [1000,1400,2000,2600,3000,3400,4000,4400,4800] },
  { id: "18", name: "Cannon", hp: [420,470,520,570,620,670,730,800,880,960,1060,1160,1260,1380,1500,1620,1740,1870,2000] },
  { id: "16", name: "Archer tower", hp: [380,420,460,500,540,580,630,690,750,810,890,970,1050,1130,1230,1330,1410,1510,1600] },
  { id: "23", name: "Mortar", hp: [400,450,500,550,600,650,700,750,800,850,900,980,1100] },
  { id: "14", name: "Air defense", hp: [800,850,900,950,1000,1050,1100,1210,1300,1400,1500] },
  { id: "24", name: "Wizard tower", hp: [620,650,680,730,840,960,1200,1440,1680,2000,2240,2480,2700] },
  { id: "15", name: "Air sweeper", hp: [750,800,850,900,950,1000,1050] },
  { id: "21", name: "Hidden tesla", hp: [600,630,660,690,730,770,810,850,900,980,1100,1200] },
  { id: "17", name: "Bomb tower", hp: [650,700,750,850,1050,1300,1600,1900] },
  { id: "25", name: "X-Bow", hp: [1500,1900,2300,2700,3100,3500,3900] },
  { id: "22", name: "Inferno tower", hp :[1500,1800,2100,2400,2700,3000,3300] },
  { id: "20", name: "Eagle artillery", hp: [4000,4400,4800,5200] },
  { id: "119", name: "Scattershot", hp: [3000,3500] },
];

// prettier-ignore
export const DATA_SPELLS: Spell[] = [
  { id: "earthquake", damage: [14.5,17,21,25,29] },
  { id: "lightning", damage: [150,180,210,240,270,320,400,480,560] },
];
