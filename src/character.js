import curveball from './images/svg/curveball.svg';
import hot_hands from './images/svg/hot_hands.svg';
import blaze from './images/svg/blaze.svg';
import run_it_back from './images/svg/run_it_back.svg';
import updraft from './images/svg/updraft.svg';
import tailwind from './images/svg/tailwind.svg';
import cloudburst from './images/svg/cloudburst.svg';
import blade_storm from './images/svg/blade_storm.svg';
import shock_bolt from './images/svg/shock_bolt.svg';
import recon_bolt from './images/svg/recon_bolt.svg';
import owl_drone from './images/svg/owl_drone.svg';
import hunter_s_fury from './images/svg/hunter_s_fury.svg';
import slow_orb from './images/svg/slow_orb.svg';
import healing_orb from './images/svg/healing_orb.svg';
import baririer_orb from './images/svg/baririer_orb.svg';
import resurrection from './images/svg/resurrection.svg';

export const characters = [
  {
    id: 1,
    name: 'PHOENIX',
    country: 'United Kingdom',
    image: require('./images/png/phoenix.png'),
    role: 'DUELIST',
    abilities: [
      {
        ability_name: 'curveball',
        ability_icon: curveball,
        ability_description:
          'FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
      },
      {
        ability_name: 'hot-hands',
        ability_icon: hot_hands,
        ability_description:
          'FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
      },
      {
        ability_name: 'blaze',
        ability_icon: blaze,
        ability_description:
          'FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshai.',
      },
      {
        ability_name: 'run it back',
        ability_icon: run_it_back,
        ability_description:
          'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.',
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
        ability_name: 'updraft',
        ability_icon: updraft,
        ability_description: 'INSTANTLY propel Jett high into the air.',
      },
      {
        ability_name: 'tailwind',
        ability_icon: tailwind,
        ability_description:
          'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.',
      },
      {
        ability_name: 'cloudburst',
        ability_icon: cloudburst,
        ability_description:
          'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
      },
      {
        ability_name: 'blade storm',
        ability_icon: blade_storm,
        ability_description:
          'EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
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
        ability_name: 'shock bolt',
        ability_icon: shock_bolt,
        ability_description:
          'EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
      },
      {
        ability_name: 'recon bolt',
        ability_icon: recon_bolt,
        ability_description:
          'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
      },
      {
        ability_name: 'owl drone',
        ability_icon: owl_drone,
        ability_description:
          'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
      },
      {
        ability_name: 'hunters fury',
        ability_icon: hunter_s_fury,
        ability_description:
          'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
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
        ability_name: 'slow orb',
        ability_icon: slow_orb,
        ability_description:
          'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
      },
      {
        ability_name: 'healing orb',
        ability_icon: healing_orb,
        ability_description:
          'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.',
      },
      {
        ability_name: 'baririer orb',
        ability_icon: baririer_orb,
        ability_description:
          'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.',
      },
      {
        ability_name: 'resurrection',
        ability_icon: resurrection,
        ability_description:
          'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
      },
    ],
  },
];
