import { relicView } from './_hero_interfaces';

let relics_warrior: relicView[] = [
  {
    curr_level: 3,
    id: 0,
    variables: [[75, 125, 200, 275, 400, 650, 800, 1000, 1300, 1600]],
    logo: 'hero/warrior/berserk.png',
    description: 'warrior.berserk',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 1,
    logo: 'hero/warrior/acid_jar.png',
    variables: [[2, 2.7, 3.4, 4.1, 4.7, 6.1, 7.5, 9, 11, 13.6, 16.2]],
    description: 'warrior.acid_jar',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 2,
    variables: [[15, 30, 45, 60, 90, 120, 180, 250, 350, 450]],
    logo: 'hero/warrior/fortitude.png',
    description: 'warrior.fortitude',
    type: {
      r: 30,
      levels: 10,
    },
  },

  {
    curr_level: 4,
    id: 3,
    logo: 'hero/warrior/health.png',
    variables: [[1500, 3000, 5200, 7500, 10250, 13500, 16750, 20500, 24500, 32000, 40250, 50000, 63000, 76000]],
    description: 'warrior.health',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 11,
    id: 4,
    logo: 'hero/warrior/arena_flag.png',
    variables: [['3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '15%', '18%']],
    description: 'warrior.arena_flag',
    type: {
      r: 35,
      levels: 11,
    },
  },

  {
    curr_level: 3,
    id: 5,
    logo: 'hero/warrior/crit.png',
    variables: [[225, 450, 800, 1200, 1600, 2100, 2600, 3200, 4000, 5000, 6000, 7500, 9500, 11500]],
    description: 'warrior.crit',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 5,
    id: 6,
    logo: 'hero/warrior/ankh.png',
    variables: [['3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4',], ['5%', '7%', '9%', '12%', '12%', '15%', '18%', '21%', '25%', '30%', '35%']],
    description: 'warrior.ankh',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 7,
    logo: 'hero/warrior/ph_armor.png',
    variables: [[150, 300, 550, 800, 1100, 1400, 1800, 2200, 2600, 3250, 4000, 5000, 6300, 7600]],
    description: 'warrior.ph_armor',
    type: {
      r: 30,
      levels: 14,
    },
  },
  /*  */
  {
    curr_level: 3,
    id: 8,
    variables: [['5%', '7.5%', '10%', '15%', '20%', '25%', '30%', '40%', '53%', '66%']],
    logo: 'hero/warrior/vampirism.png',
    description: 'warrior.vampirism',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 9,
    logo: 'hero/warrior/arena_banner.png',
    variables: [['5%', '7%', '9%', '11%', '13%', '15%', '20%', '25%', '30%', '37%', '44%']],
    description: 'warrior.arena_banner',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 5,
    id: 10,
    logo: 'hero/warrior/shackles.png',
    variables: [['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['5%', '7%', '9%', '11%', '13%', '15%', '18%', '21%', '25%', '30%', '35%']],
    description: 'warrior.shackles',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 11,
    logo: 'hero/warrior/reflect.png',
    variables: [[200, 225, 250, 275, 300, 350, 400, 500, 630, 760]],
    description: 'warrior.reflect',
    type: {
      r: 30,
      levels: 10,
    },
  },


  /*************** */

  {
    curr_level: 3,
    id: 12,
    logo: 'hero/warrior/dmg.png',
    variables: [[150, 300, 550, 800, 1100, 1400, 1800, 2200, 2600, 3400, 4200, 5300, 6800, 8300]],
    description: 'warrior.dmg',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 5,
    id: 13,
    logo: 'hero/warrior/helmet.png',
    variables: [['15%', '18%', '21%', '24%', '27%', '30%', '34%', '38%', '45%', '54%', '63%'], ['15%', '18%', '21%', '24%', '27%', '30%', '34%', '38%', '45%', '54%', '63%'], ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'], ['15%', '18%', '21%', '24%', '27%', '30%', '34%', '38%', '45%', '54%', '63%'], ['15%', '18%', '21%', '24%', '27%', '30%', '34%', '38%', '45%', '54%', '63%'], ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4']],
    description: 'warrior.helmet',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 14,
    logo: 'hero/warrior/m_armor.png',
    variables: [[150, 300, 550, 800, 1100, 1400, 1800, 2200, 2600, 3250, 4000, 5000, 6300, 7600]],
    description: 'warrior.m_armor',
    type: {
      r: 30,
      levels: 14,
    },
  },

  /****** */

  {
    curr_level: 3,
    id: 15,
    logo: 'hero/warrior/heal.png',
    variables: [['4%', '6%', '8%', '10%', '12%', '14%', '16%', '18%', '21%', '24%']],
    description: 'warrior.heal',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 16,
    logo: 'hero/warrior/hamster.png',
    variables: [['40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%'], ['8%', '10%', '12%', '14%', '16%', '19%', '22%', '25%', '30%', '37%', '44%'], ['40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%']],
    description: 'warrior.hamster',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 5,
    id: 17,
    logo: 'hero/warrior/belt.png',
    variables: [[1500, 2625, 5125, 6750, 10250, 12250, 16000, 20125, 25000, 31500, 38000]],
    description: 'warrior.belt',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 18,
    logo: 'hero/warrior/astral.png',
    variables: [[0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.6, 1.9, 2.2], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25,]],
    description: 'warrior.astral',
    type: {
      r: 30,
      levels: 10,
    },
  },

  /********** */

  {
    curr_level: 4,
    id: 19,
    logo: 'hero/warrior/totem.png',
    description: 'warrior.totem',
    variables: [[98600, 107640, 116680, 125760, 134840, 143920, 153000, 162080, 178160, 199160, 220160], [2400, 2650, 3000, 3300, 3600, 3950, 4300, 4700, 5250, 6000, 6750]],
    type: {
      r: 40,
      levels: 11,
    },
  },

  {
    curr_level: 4,
    id: 20,
    logo: 'hero/warrior/w_totem.png',
    variables: [['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '100%', '126%', '152%'], ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'], ['15%', '16%', '17%', '18%', '19%', '20%', '21%', '23%', '25%', '28%', '31%'], ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'], ['10%', '11%', '12%', '13%', '14%', '15%', '16%', '18%', '20%', '23%', '26%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],],
    description: 'warrior.w_totem',
    type: {
      r: 35,
      levels: 11,
    },
  },

  {
    curr_level: 4,
    id: 21,
    logo: 'hero/warrior/regeneration.png',
    variables: [[10900, 11500, 12200, 12800, 13400, 14100, 14700, 16000, 17700, 19100], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]],
    description: 'warrior.regeneration',
    type: {
      r: 30,
      levels: 10,
    },
  },


  {
    curr_level: 4,
    id: 22,
    logo: 'hero/warrior/w_glove.png',
    variables: [['25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%'], ["12000", "14000", "16000", "18000", "20000", "22000", "26000", "32000", "40000", "50000", "60000"]],
    description: 'warrior.w_glove',
    type: {
      r: 35,
      levels: 11,
    },
  },

  /************ */

  {
    curr_level: 4,
    id: 23,
    logo: 'hero/warrior/heart.png',
    description: 'warrior.heart',
    variables: [["3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4"], [" 2", " 2", " 2", " 2", " 3", " 3", " 3", " 4", " 4", "4.5", " 5"], ['8%', '10%', '12%', '15%', '18%', '21%', '24%', '28%', '32%', '36%', '40%']],
    type: {
      r: 40,
      levels: 11,
    },
  },


  {
    curr_level: 4,
    id: 24,
    logo: 'hero/warrior/bay_flag.png',
    variables: [['3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '15%', '18%']],
    description: 'warrior.bay_flag',
    type: {
      r: 35,
      levels: 11,
    },
  },


  {
    curr_level: 4,
    id: 25,
    logo: 'hero/warrior/counterattack.png',
    variables: [['30%', '32%', '34%', '36%', '38%', '41%', '43%', '45%', '47%', '50%'], ['50%', '52%', '56%', '60%', '65%', '70%', '76%', '83%', '91%', '100%']],
    description: 'warrior.counterattack',
    type: {
      r: 30,
      levels: 10
    },
  },


  {
    curr_level: 4,
    id: 26,
    logo: 'hero/warrior/shields.png',
    description: 'warrior.shields',
    variables: [['20%', '22%', '24%', '27%', '30%', '33%', '36%', '39%', '42%', '46%', '50%']],
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 0,
    id: 27,
    logo: 'hero/warrior/star2.png',
    description: 'warrior.star2',
    variables: setStarValue([50, 75]),
    type: {
      r: 50,
      levels: 200,
    },
  },
  {
    curr_level: 0,
    id: 28,
    logo: 'hero/warrior/star.png',
    description: 'warrior.star',
    variables: setStarValue([500, 750]),
    type: {
      r: 50,
      levels: 200,
    },
  },
];


/************************* */

let relics_archer: relicView[] = [{
  curr_level: 3,
  id: 0,
  logo: 'hero/archer/precise.png',
  variables: [[250, 275, 300, 325, 350, 400, 450, 600, 800, 1000]],
  description: 'archer.precise',
  type: {
    r: 30,
    levels: 10,
  },
},
{
  curr_level: 5,
  id: 1,
  logo: 'hero/archer/sunbeam.png',
  variables: [[1.8, 2.2, 2.6, 3, 3.4, 4.1, 4.8, 6.1, 7.8, 10, 12.2]],
  description: 'archer.sunbeam',
  type: {
    r: 40,
    levels: 11,
  },
},
{
  curr_level: 4,
  id: 2,
  logo: 'hero/archer/trickster.png',
  variables: [[500, 550, 600, 700, 800, 900, 1000, 1200, 1500, 1800]],
  description: 'archer.trickster',
  type: {
    r: 30,
    levels: 10,
  },
},

{
  curr_level: 4,
  id: 3,
  logo: 'hero/archer/sniper.png',
  variables: [[125, 275, 475, 675, 900, 1200, 1550, 1900, 2250, 3000, 3750, 4500, 5500, 6500]],
  description: 'archer.sniper',
  type: {
    r: 30,
    levels: 14,
  },
},
{
  curr_level: 11,
  id: 4,
  logo: 'hero/archer/cw_flag.png',
  variables: [['3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '15%', '18%']],
  description: 'archer.cw_flag',
  type: {
    r: 35,
    levels: 11,
  },
},

{
  curr_level: 3,
  id: 5,
  logo: 'hero/archer/crit.png',
  variables: [[225, 450, 800, 1200, 1600, 2100, 2600, 3200, 4000, 5000, 6000, 7500, 9500, 11500]],
  description: 'archer.crit',
  type: {
    r: 30,
    levels: 14,
  },
},
{
  curr_level: 5,
  id: 6,
  logo: 'hero/archer/book.png',
  description: 'archer.book',
  variables: [['5%', '6%', '7%', '8%', '10%', '12%', '15%', '18%', '21%', '25%', '29%'], ['25%', '27.5%', '30%', '32.5%', '35%', '40%', '45%', '50%', '55%', '62%', '69%'], ['25%', '27.5%', '30%', '32.5%', '35%', '40%', '45%', '50%', '55%', '62%', '69%'], ['4', '4.2', '4.4', '4.6', '4.8', '5.2', '5.6', '6', '7', '8.3', '9.6']],
  type: {
    r: 40,
    levels: 11,
  },
},
{
  curr_level: 4,
  id: 7,
  logo: 'hero/archer/ph_armor.png',
  variables: [[75, 175, 300, 425, 550, 750, 950, 1200, 1500, 1800, 2300, 3000, 3900, 4800]],
  description: 'archer.ph_armor',
  type: {
    r: 30,
    levels: 14,
  },
},
/*  */
{
  curr_level: 3,
  id: 8,
  logo: 'hero/archer/mage_killer.png',
  description: 'archer.mage_killer',
  variables: [[1700, 1800, 2000, 2300, 3000, 3700, 4500, 6000, 9000, 13000], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]],
  type: {
    r: 30,
    levels: 10,
  },
},
{
  curr_level: 5,
  id: 9,
  logo: 'hero/archer/glory_banner.png',
  variables: [['5%', '7%', '9%', '11%', '13%', '15%', '20%', '25%', '30%', '37%', '44%']],
  description: 'archer.glory_banner',
  type: {
    r: 35,
    levels: 11,
  },
},
{
  curr_level: 5,
  id: 10,
  logo: 'hero/archer/ace.png',
  variables: [['1%', '2%', '3%', '4%', '5%', '6%', '7%', '9%', '12%', '16%', '20%']],
  description: 'archer.ace',
  type: {
    r: 35,
    levels: 11,
  },
},
{
  curr_level: 4,
  id: 11,
  logo: 'hero/archer/retaliatory.png',
  variables: [[2200, 2400, 2700, 3100, 3900, 4900, 6000, 8000, 12000, 16000], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]],
  description: 'archer.retaliatory',
  type: {
    r: 30,
    levels: 10,
  },
},


/*************** */

{
  curr_level: 3,
  id: 12,
  logo: 'hero/archer/health.png',
  variables: [[1100, 2250, 4000, 5500, 7500, 10000, 12500, 15500, 18000, 24000, 30000, 38000, 48000, 58000]],
  description: 'archer.health',
  type: {
    r: 30,
    levels: 14,
  },
},
{
  curr_level: 5,
  id: 13,
  logo: 'hero/archer/glaive.png',
  variables: [['10000', '12000', '14000', '16000', '18000', '22000', '26000', '30000', '35000', '42000', '49000'], ['10%', '10%', '10%', '10%', '15%', '15%', '15%', '15%', '20%', '27%', '34%']],
  description: 'archer.glaive',
  type: {
    r: 40,
    levels: 11,
  },
},
{
  curr_level: 4,
  id: 14,
  logo: 'hero/archer/dodge.png',
  variables: [[225, 450, 800, 1000, 1500, 2000, 2500, 3000, 3750, 4750, 6000, 7500, 9500, 11500]],
  description: 'archer.dodge',
  type: {
    r: 30,
    levels: 14,
  },
},

/****** */

{
  curr_level: 3,
  id: 15,
  logo: 'hero/archer/double_shot.png',
  variables: [['7%', '8%', '9%', '10%', '11%', '12%', '13%', '15%', '18%', '21%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3']],
  description: 'archer.double_shot',
  type: {
    r: 30,
    levels: 10,
  },
},
{
  curr_level: 5,
  id: 16,
  logo: 'hero/archer/r_hood.png',
  variables: [['12%', '14%', '16%', '18%', '21%', '24%', '27%', '30%', '35%', '42%', '49%'], ['60%', '60%', '60%', '60%', '60%', '60%', '60%', '60%', '60%', '60%', '60%']],
  description: 'archer.r_hood',
  type: {
    r: 35,
    levels: 11,
  },
},
{
  curr_level: 5,
  id: 17,
  logo: 'hero/archer/qiuver.png',
  variables: [[200, 300, 500, 700, 1000, 1200, 1600, 2000, 2500, 3150, 3800]],
  description: 'archer.qiuver',
  type: {
    r: 35,
    levels: 11,
  },
},
{
  curr_level: 4,
  id: 18,
  logo: 'hero/archer/vampirism.png',
  variables: [['80%', '80%', '80%', '80%', '80%', '80%', '80%', '80%', '80%', '80%'], ['8%', '11%', '14%', '18%', '22%', '27%', '32%', '37%', '44%', '51%']],
  description: 'archer.vampirism',
  type: {
    r: 30,
    levels: 10,
  },
},

/********** */

{
  curr_level: 4,
  id: 19,
  logo: 'hero/archer/lamp.png',
  variables: [[24500, 25840, 27180, 28560, 29940, 21320, 32700, 34080, 36760, 40160, 43560,], [2000, 2100, 2300, 2400, 2500, 2600, 2800, 2900, 3100, 3400, 3700], [5220, 5800, 6600, 7400, 8400, 9600, 10900, 12000, 16300, 21900, 27500], [2200, 2400, 2700, 3100, 3500, 4000, 4500, 5000, 6800, 9100, 11400,], [1000, 1100, 1200, 1400, 1600, 1800, 2100, 2300, 3100, 4100, 5100], [1000, 1100, 1200, 1300, 1400, 1600, 1800, 1900, 2300, 2800, 3300], [1100, 1200, 1400, 1600, 1800, 2000, 2200, 2600, 3500, 4700, 5900], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [5100, 5500, 5800, 6100, 6400, 6700, 7100, 7400, 8000, 8800, 9600], [4300, 4500, 4800, 5100, 5300, 5600, 5900, 6200, 6700, 7400, 8100], [1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.3, 2.6, 2.9]],
  description: 'archer.lamp',
  type: {
    r: 40,
    levels: 11,
  },
},

{
  curr_level: 4,
  id: 20,
  logo: 'hero/archer/a_totem.png',
  description: 'archer.a_totem',
  variables: [['2', '2.2', '2.4', '2.6', '2.8', '3', '3.2', '3.6', '4', '4.5', '5'], ['1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.8', '2', '2.3', '2.6'], ['20000', '21000', '22000', '23000', '24000', '26000', '28000', '30000', '35000', '42000', '49000'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],],
  type: {
    r: 35,
    levels: 11,
  },
},

{
  curr_level: 4,
  id: 21,
  logo: 'hero/archer/bull_eye.png',
  variables: [[1600, 2900, 4400, 6100, 8000, 10100, 12500, 15500, 19400, 23300]],
  description: 'archer.bull_eye',
  type: {
    r: 30,
    levels: 10,
  },
},


{
  curr_level: 4,
  id: 22,
  logo: 'hero/archer/a_glove.png',
  variables: [['25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%'], ["6000", "7000", "8000", "9000", "10000", "11000", "13000", "16000", "20000", "25000", "30000"]],
  description: 'archer.a_glove',
  type: {
    r: 35,
    levels: 11,
  },
},

/************ */

{
  curr_level: 4,
  id: 23,
  logo: 'hero/archer/hustlejolnir.png',
  variables: [['3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '6'], ['10%', '12%', '14%', '17%', '20%', '23%', '28%', '33%', '38%', '43%', '50%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['10%', '12%', '14%', '17%', '20%', '23%', '28%', '33%', '38%', '43%', '50%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['4%', '5%', '6%', '7%', '8%', '9%', '11%', '13%', '15%', '17%', '20%'], ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'], ['50%', '51%', '52%', '53%', '55%', '57%', '59%', '61%', '64%', '67%', '70%']],
  description: 'archer.hustlejolnir',
  type: {
    r: 40,
    levels: 11,
  },
},


{
  curr_level: 4,
  id: 24,
  logo: 'hero/archer/bay_banner.png',
  variables: [['5%', '7%', '9%', '11%', '13%', '15%', '20%', '25%', '30%', '37%', '44%']],
  description: 'archer.bay_banner',
  type: {
    r: 35,
    levels: 11,
  },
},


{
  curr_level: 4,
  id: 25,
  logo: 'hero/archer/piercing.png',
  variables: [['10%', '11%', '12%', '13%', '15%', '18%', '21%', '24%', '27%', '30%'], ['10%', '11%', '12%', '13%', '15%', '18%', '24%', '29%', '34%', '40%']],
  description: 'archer.piercing',
  type: {
    r: 30,
    levels: 10,
  },
},


{
  curr_level: 4,
  id: 26,
  logo: 'hero/archer/slingshot.png',
  variables: [['20%', '22%', '24%', '27%', '30%', '33%', '36%', '39%', '42%', '46%', '50%'], ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'], ['20%', '22%', '24%', '27%', '30%', '33%', '36%', '39%', '42%', '46%', '50%'], ['15%', '16%', '17%', '18%', '20%', '22%', '24%', '26%', '29%', '32%', '35%']],
  description: 'archer.slingshot',
  type: {
    r: 35,
    levels: 11,
  },
},
{
  curr_level: 0,
  id: 27,
  logo: 'hero/archer/star2.png',
  variables: setStarValue([300, 450]),

  description: 'archer.star2',
  type: {
    r: 50,
    levels: 200,
  },
},
{
  curr_level: 0,
  id: 28,
  logo: 'hero/archer/star.png',
  variables: setStarValue([100, 150]),

  description: 'archer.star',
  type: {
    r: 50,
    levels: 200,
  },
},
];
/******************************************************************** */




let relics_mage: relicView[] = [
  {
    curr_level: 3,
    id: 0,
    logo: 'hero/mage/archimage.png',
    variables: [[100, 150, 200, 250, 350, 450, 600, 1000, 1500, 2000]],
    description: 'mage.archimage',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 1,
    logo: 'hero/mage/mask.png',
    variables: [[2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8.3, 9.6]],
    description: 'mage.mask',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 2,
    logo: 'hero/mage/enchanter.png',
    variables: [[350, 400, 450, 500, 600, 700, 800, 1000, 1300, 1600]],
    description: 'mage.enchanter',
    type: {
      r: 30,
      levels: 10,
    },
  },

  {
    curr_level: 4,
    id: 3,
    logo: 'hero/mage/sage.png',
    variables: [[450, 900, 1700, 2500, 3500, 4500, 5500, 6500, 8000, 10500, 13000, 16000, 20000, 24000]],
    description: 'mage.sage',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 11,
    id: 4,
    logo: 'hero/mage/portal_flag.png',
    variables: [['3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '15%', '18%']],
    description: 'mage.portal_flag',
    type: {
      r: 35,
      levels: 11,
    },
  },

  {
    curr_level: 3,
    id: 5,
    logo: 'hero/mage/charms.png',
    variables: [[150, 300, 550, 800, 1100, 1400, 1800, 2200, 2600, 3250, 4000, 5500, 7500, 9500]],
    description: 'mage.charms',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 5,
    id: 6,
    logo: 'hero/mage/kaboom.png',
    variables: [[7500, 8000, 9000, 10000, 15500, 19000, 22000, 25000, 29000, 33000]],
    description: 'mage.kaboom',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 7,
    logo: 'hero/mage/wild_magic.png',
    variables: [[225, 475, 850, 1250, 1650, 2200, 2750, 3400, 4000, 5300, 6600, 8000, 9800, 11600]],
    description: 'mage.wild_magic',
    type: {
      r: 30,
      levels: 14,
    },
  },
  /*  */
  {
    curr_level: 3,
    id: 8,
    logo: 'hero/mage/reflection.png',
    variables: [['5%', '7%', '9%', '11%', '13%', '15%', '19%', '23%', '28%', '33%'], ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5']],
    description: 'mage.reflection',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 9,
    logo: 'hero/mage/portal_banner.png',
    variables: [['5%', '7%', '9%', '11%', '13%', '15%', '20%', '25%', '30%', '37%', '44%']],
    description: 'mage.portal_banner',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 5,
    id: 10,
    logo: 'hero/mage/ring.png',
    variables: [[100, 200, 400, 800, 1200, 2000, 2800, 3600, 4500, 5700, 6900], [5000, 5500, 6000, 7500, 9000, 10500, 12000, 13500, 16000, 20000, 24000]],

    description: 'mage.ring',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 11,
    logo: 'hero/mage/demolitionist.png',
    variables: [['20%', '25%', '25%', '30%', '30%', '30%', '35%', '35%', '35%', '35%'], ['1000', '1000', '1250', '1500', '2000', '3000', '4000', '5000', '6300', '7600']],
    description: 'mage.demolitionist',
    type: {
      r: 30,
      levels: 10,
    },
  },


  /*************** */

  {
    curr_level: 3,
    id: 12,
    logo: 'hero/mage/health.png',
    variables: [[650, 1350, 2400, 3300, 4500, 6000, 7500, 9500, 11000, 14500, 18000, 23000, 30000, 37000]],
    description: 'mage.health',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 5,
    id: 13,
    logo: 'hero/mage/slab.png',
    variables: [[1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 4, 4.7, 5.4], [48360, 50400, 53480, 56560, 59680, 62800, 64920, 68040, 74160, 82160, 90160], [9600, 10200, 10800, 11400, 12000, 12600, 13200, 13800, 15000, 17000, 19000]],
    description: 'mage.slab',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 14,
    logo: 'hero/mage/off_magic.png',
    variables: [[100, 150, 200, 275, 350, 425, 500, 650, 825, 1000, 1250, 1500, 1850, 2200]],
    description: 'mage.off_magic',
    type: {
      r: 30,
      levels: 14,
    },
  },

  /****** */

  {
    curr_level: 3,
    id: 15,
    logo: 'hero/mage/astral.png',
    variables: [[1.2, 1.3, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3.2]],
    description: 'mage.astral',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 16,
    logo: 'hero/mage/clock.png',
    variables: [['5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%', '15%', '19%', '23%']],
    description: 'mage.clock',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 5,
    id: 17,
    logo: 'hero/mage/hat.png',
    variables: [[1125, 2000, 3750, 5000, 7500, 9000, 12000, 15000, 18500, 23000, 27500], [225, 425, 875, 1125, 1625, 2000, 2625, 3250, 4000, 5000, 6000]],
    description: 'mage.hat',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 18,
    logo: 'hero/mage/d_spell.png',
    variables: [['7%', '8%', '9%', '10%', '11%', '12%', '13%', '15%', '18%', '21%'], ['50%', '50%', '50%', '50%', '50%', '50%', '50%', '50%', '50%', '50%',]],
    description: 'mage.d_spell',
    type: {
      r: 30,
      levels: 10,
    },
  },

  /********** */

  {
    curr_level: 4,
    id: 19,
    logo: 'hero/mage/equilibrium.png',
    variables: [['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['8000', '9000', '10000', '11000', '12000', '14000', '16000', '17000', '20000', '24000', '28000'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['11%', '12%', '14%', '15%', '18%', '20%', '23%', '27%', '32%', '39%', '46%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['10%', '11%', '12%', '13%', '15%', '17%', '19%', '21%', '24%', '28%', '32%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['8000', '9000', '10000', '11000', '12000', '14000', '16000', '17000', '20000', '24000', '28000'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['0.7', '0.8', '0.9', '1', '1.2', '1.4', '1.6', '5', '5', '2.5', '2.9'], ['11%', '12%', '14%', '15%', '18%', '20%', '23%', '27%', '32%', '39%', '46%'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']],
    description: 'mage.equilibrium',
    type: {
      r: 40,
      levels: 11,
    },
  },

  {
    curr_level: 4,
    id: 20,
    logo: 'hero/mage/m_totem.png',
    variables: [['22400', '23800', '25200', '26600', '28000', '29400', '30800', '32200', '35000', '39000', '43000'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['4800', '6000', '7200', '8600', '10000', '11600', '14300', '18400', '25000', '34000', '43000'], ['1.5', '1.6', '1.7', '1.8', '2', '2.2', '2.4', '2.6', '3', '3.5', '4'],],
    description: 'mage.m_totem',
    type: {
      r: 35,
      levels: 11,
    },
  },

  {
    curr_level: 4,
    id: 21,
    logo: 'hero/mage/a_power.png',
    variables: [['7%', '8%', '9%', '10%', '11%', '12%', '13%', '15%', '18%', '21%'], ['1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5',]],
    description: 'mage.a_power',
    type: {
      r: 30,
      levels: 10,
    },
  },


  {
    curr_level: 4,
    id: 22,
    logo: 'hero/mage/m_glove.png',
    variables: [['25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%'], ["4600", "5200", "6000", "6800", "7600", "8200", "9800", "12000", "15000", "19000", "23000"]],
    description: 'mage.m_glove',
    type: {
      r: 35,
      levels: 11,
    },
  },

  /************ */

  {
    curr_level: 4,
    id: 23,
    logo: 'hero/mage/head.png',
    variables: [['3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '6'], ['4%', '5%', '6%', '7%', '8%', '9%', '11%', '13%', '15%', '17%', '20%'], ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'], ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], ['15%', '16%', '17%', '18%', '19%', '20%', '22%', '25%', '28%', '31%', '35%'], ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']],
    description: 'mage.head',
    type: {
      r: 40,
      levels: 11,
    },
  },


  {
    curr_level: 4,
    id: 24,
    logo: 'hero/mage/dungeon_flag.png',
    variables: [['3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '15%', '18%']],
    description: 'mage.dungeon_flag',
    type: {
      r: 35,
      levels: 11,
    },
  },


  {
    curr_level: 4,
    id: 25,
    logo: 'hero/mage/expl_magic.png',
    variables: [['50%', '52%', '54%', '57%', '60%', '63%', '67%', '71%', '75%', '80%'], ['40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%', '40%']],
    description: 'mage.expl_magic',
    type: {
      r: 30,
      levels: 10,
    },
  },


  {
    curr_level: 4,
    id: 26,
    logo: 'hero/mage/shirt.png',
    variables: [['10%', '11%', '12%', '13%', '15%', '17%', '21%', '25%', '29%', '34%', '40%'], ['2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '5'], ['50%', '53%', '56%', '63%', '70%', '79%', '90%', '102%', '117%', '132%', '150%'], ['2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '5']],
    description: 'mage.shirt',
    type: {
      r: 35,
      levels: 11,
    },
  },

  /*star */
  {
    curr_level: 0,
    id: 27,
    logo: 'hero/mage/star2.png',
    variables: setStarValue([175, 255]),
    description: 'mage.star2',
    type: {
      r: 50,
      levels: 200,
    },
  },
  {
    curr_level: 0,
    id: 28,
    logo: 'hero/mage/star.png',
    variables: setStarValue([125, 180]),
    description: 'mage.star',
    type: {
      r: 50,
      levels: 200,
    },
  },
];

let mock = {
  0: [8, 11, 4, 14, 11,/** */  12, 10, 14, 10, 11, 10, 4,/** */  14, 10, 14, 4, 10, 11, 2,/** */  10, 1, 1, 0, /** */ 10, 8, 1, 8, /** */ 13, 83],
  1: [4, 11, 4, 14, 11,/** */  14, 10, 6, 9, 11, 11, 4,/** */  14, 9, 7, 10, 11, 11, 9, /** */ 11, 10, 9, 0,/** */  10, 7, 1, 10, /** */ 61, 44],
  2: [10, 10, 2, 12, 11, /** */ 14, 11, 14, 4, 11, 10, 2,/** */  12, 10, 6, 4, 11, 7, 10, /** */ 10, 2, 8, 0,/** */  8, 11, 10, 8,/** */  10, 45],
}
let tr9 = [4, 4, 4, 6, 4,/** */  6, 4, 6, 4, 4, 4, 4,/** */  6, 4, 6, 4, 4, 4, 4,/** */  0, 0, 0, 0, /** */ 0, 0, 0, 0, /** */ 0, 0]


let tr10 = [8, 9, 8, 12, 9,/** */  12, 9, 12, 8, 9, 9, 8,/** */  12, 9, 12, 8, 9, 9, 8,/** */  9, 9, 8, 9, /** */ 0, 0, 0, 0, /** */ 0, 0]



export function setLevels(desc: 'mock' | 'min' | 'tr9' | 'tr10' | 'max' | string) {
  if (desc === 'mock') {
    relics_warrior.forEach((elem, i) => elem.curr_level = mock['0'][i]);
    relics_mage.forEach((elem, i) => elem.curr_level = mock['1'][i]);
    relics_archer.forEach((elem, i) => elem.curr_level = mock['2'][i])
  }

  if (desc === 'min') {
    relics_warrior.forEach((elem) => elem.curr_level = 0);
    relics_mage.forEach((elem) => elem.curr_level = 0);
    relics_archer.forEach((elem) => elem.curr_level = 0)
  }
  if (desc === 'max') {
    relics_warrior.forEach((elem) => elem.curr_level = elem.type.levels);
    relics_mage.forEach((elem) => elem.curr_level = elem.type.levels);
    relics_archer.forEach((elem) => elem.curr_level = elem.type.levels)
  }

  if (desc === 'tr9') {
    relics_warrior.forEach((elem, i) => elem.curr_level = tr9[i]);
    relics_mage.forEach((elem, i) => elem.curr_level = tr9[i]);
    relics_archer.forEach((elem, i) => elem.curr_level = tr9[i])
  }
  if (desc === 'tr10') {
    relics_warrior.forEach((elem, i) => elem.curr_level = tr10[i]);
    relics_mage.forEach((elem, i) => elem.curr_level = tr10[i]);
    relics_archer.forEach((elem, i) => elem.curr_level = tr10[i])
  }

}

relics_warrior.forEach((elem, i) => elem.curr_level = mock['0'][i]);
relics_mage.forEach((elem, i) => elem.curr_level = mock['1'][i]);
relics_archer.forEach((elem, i) => elem.curr_level = mock['2'][i])


export const relics = [
  { data: relics_warrior, name: "Hero.WarriorsTab" },
  { data: relics_mage, name: "Hero.MagesTab" },
  { data: relics_archer, name: "Hero.ArchersTab" },
]

export const available_hero_settings = [
  { name: 'zzz\'s hero', value: 'mock' },
  { name: 'min', value: 'min' },
  { name: 'tr9', value: 'tr9' },
  { name: 'tr10', value: 'tr10' },
  { name: 'max', value: 'max' },
];

export function setStarValue(data: number[]): number[][] {
  const res = new Array(200);
  for (let index = 1; index < 201; index++) {
    res[index - 1] = index <= 100 ? index * data[0] : 100 * data[0] + (index - 100) * data[1]
  }
  const res2 = [...[...res].splice(1), [...res].splice(-1)]
  return [[...res], res2];
}
