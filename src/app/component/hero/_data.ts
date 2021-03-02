import { relicView } from '../../data/_var_hero';

let relics_warrior: relicView[] = [
  {
    curr_level: 3,
    id: 0,
    logo: 'hero/warrior/berserk.png',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 1,
    logo: 'hero/warrior/acid_jar.png',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 2,
    logo: 'hero/warrior/fortitude.png',
    type: {
      r: 30,
      levels: 10,
    },
  },

  {
    curr_level: 4,
    id: 3,
    logo: 'hero/warrior/health.png',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 11,
    id: 4,
    logo: 'hero/warrior/arena_flag.png',
    type: {
      r: 35,
      levels: 11,
    },
  },

  {
    curr_level: 3,
    id: 5,
    logo: 'hero/warrior/crit.png',
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 5,
    id: 6,
    logo: 'hero/warrior/ankh.png',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 7,
    logo: 'hero/warrior/ph_armor.png',
    type: {
      r: 30,
      levels: 14,
    },
  },
  /*  */
  {
    curr_level: 3,
    id: 8,
    logo: 'hero/warrior/vampirism.png',
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 9,
    logo: 'hero/warrior/arena_banner.png',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 5,
    id: 10,
    logo: 'hero/warrior/shackles.png',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 11,
    logo: 'hero/warrior/reflect.png',
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
    type: {
      r: 30,
      levels: 14,
    },
  },
  {
    curr_level: 5,
    id: 13,
    logo: 'hero/warrior/helmet.png',
    type: {
      r: 40,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 14,
    logo: 'hero/warrior/m_armor.png',
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
    type: {
      r: 30,
      levels: 10,
    },
  },
  {
    curr_level: 5,
    id: 16,
    logo: 'hero/warrior/hamster.png',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 5,
    id: 17,
    logo: 'hero/warrior/belt.png',
    type: {
      r: 35,
      levels: 11,
    },
  },
  {
    curr_level: 4,
    id: 18,
    logo: 'hero/warrior/astral.png',
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
    type: {
      r: 40,
      levels: 11,
    },
  },

  {
    curr_level: 4,
    id: 20,
    logo: 'hero/warrior/w_totem.png',
    type: {
      r: 35,
      levels: 11,
    },
  },

  {
    curr_level: 4,
    id: 21,
    logo: 'hero/warrior/regeneration.png',
    type: {
      r: 30,
      levels: 10,
    },
  },


  {
    curr_level: 4,
    id: 22,
    logo: 'hero/warrior/w_glove.png',
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
    type: {
      r: 40,
      levels: 11,
    },
  },


  {
    curr_level: 4,
    id: 24,
    logo: 'hero/warrior/bay_flag.png',
    type: {
      r: 35,
      levels: 11,
    },
  },


  {
    curr_level: 4,
    id: 25,
    logo: 'hero/warrior/counterattack.png',
    type: {
      r: 30,
      levels: 10,
    },
  },


  {
    curr_level: 4,
    id: 26,
    logo: 'hero/warrior/shields.png',
    type: {
      r: 35,
      levels: 11,
    },
  },

];


let mock_levels = new Array<number>(27)
mock_levels = [0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0]
relics_warrior.forEach((elem, index) => elem.curr_level = mock_levels[index])

let relics_archer = [];
let relics_mage = [];


export const relics = [
  { data: relics_warrior, name: "Воины" },
  { data: relics_archer, name: "Луки" },
  { data: relics_mage, name: "Маги" }
]