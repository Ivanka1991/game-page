export const characters = [
  {
    id: 1,
    name: 'PHOENIX',
    country: 'United Kingdom',
    image: require('./images/png/phoenix.png'),
    role: 'DUELIST',
    abilities: [
      {
        curveball: {
          svg: 'https://drive.google.com/file/d/1i7mszt3950XdwkbEpOKyB8-ue_kIzUQ0/view?usp=share_link',
          description:
            'FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
        },
        'hot hands': {
          svg: 'https://drive.google.com/file/d/1i7mszt3950XdwkbEpOKyB8-ue_kIzUQ0/view?usp=share_link',
          description:
            'FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
        },
        blaze: {
          svg: 'https://drive.google.com/file/d/1747nRtXzLBfRcuX4-iBqeyh34IfPXb9W/view?usp=share_link',
          description:
            'FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshai.',
        },
        'run it back': {
          svg: 'https://drive.google.com/file/d/1TwWFnQ2CaSKRN80t_Zjjk1CU-xu_quQd/view?usp=share_link',
          description:
            'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'JETT',
    country: 'South Korea',
    image: require('./images/png/jett.png'),
    role: 'DUELIST',
    abilities: [
      {
        updraft: {
          svg: 'https://drive.google.com/file/d/1xqaoqbIynt7u8VUSsjmU-ZNkmF5VgIYV/view?usp=share_link',
          description: 'INSTANTLY propel Jett high into the air.',
        },
        tailwind: {
          svg: 'https://drive.google.com/file/d/1-oroTrEALvwns9a3gykAV5NLOnEr99ce/view?usp=share_link',
          description:
            'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.',
        },
        cloudburst: {
          svg: 'https://drive.google.com/file/d/1aM0ewB9y8Jsrnv8C7I8XBx2yZuOH_LbN/view?usp=share_link',
          description:
            'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
        },
        'blade storm': {
          svg: 'https://drive.google.com/file/d/1_FjBHGJHoTrG9_eb5Mk2zYckbKfb0pVX/view?usp=share_link',
          description:
            'EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'SOVA',
    country: 'Russia',
    image: require('./images/png/sova.png'),
    role: 'INITIATOR',
    abilities: [
      {
        'shock bolt': {
          svg: 'https://drive.google.com/file/d/100yehe7Q8obEU3WRK5_tSaZ2CbLaxKRr/view?usp=share_link',
          description:
            'EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
        },
        'recon bolt': {
          svg: 'https://drive.google.com/file/d/1ghqioIHkDoQuqIwYofk8eGqGbdfcNgxp/view?usp=share_link',
          description:
            'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
        },
        'owl drone': {
          svg: 'https://drive.google.com/file/d/1rgPCHm_lVCJkr4x9Yw2ZSVt6KVGkTgEI/view?usp=share_link',
          description:
            'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
        },
        "hunter's fury": {
          svg: 'https://drive.google.com/file/d/1iC33ew1QHBNMH7Yo2JOQGEq904NsfXTa/view?usp=share_link',
          description:
            'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
        },
      },
    ],
  },
  {
    id: 4,
    name: 'SAGE',
    country: 'China',
    image: require('./images/png/sage.png'),
    role: 'SENTINEL',
    abilities: [
      {
        'slow orb': {
          svg: 'https://drive.google.com/file/d/1LT5_UFxF6aBpnA9eWGUmQNACAc6vSWK4/view?usp=share_link',
          description:
            'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
        },
        'healing orb': {
          svg: 'https://drive.google.com/file/d/1b-Vu9BSD0fRhPDNuJutklr-oUemivXqz/view?usp=share_link',
          description:
            'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.',
        },
        'baririer orb': {
          svg: 'https://drive.google.com/file/d/1P3eUJPuJ5VJEix8HI6aOyxdC9RVgAyKb/view?usp=share_link',
          description:
            'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.',
        },
        resurrection: {
          svg: 'https://drive.google.com/file/d/1TwWFnQ2CaSKRN80t_Zjjk1CU-xu_quQd/view?usp=share_link',
          description:
            'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
        },
      },
    ],
  },
];
