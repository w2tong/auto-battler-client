import fighterIconUrl from '@assets/icons/classes/fighter.svg';
import priestIconUrl from '@assets/icons/classes/priest.svg';
import rangerIconUrl from '@assets/icons/classes/ranger.svg';
import rogueIconUrl from '@assets/icons/classes/rogue.svg';
import wizardIconUrl from '@assets/icons/classes/wizard.svg';


import bleedingIconUrl from '@assets/icons/status-effects/bleeding.svg';
import blessedIconUrl from '@assets/icons/status-effects/blessed.svg';
import burningIconUrl from '@assets/icons/status-effects/burning.svg';
import frozenIconUrl from '@assets/icons/status-effects/frozen.svg';
import invisibleIconUrl from '@assets/icons/status-effects/invisible.svg';
import poisonedIconUrl from '@assets/icons/status-effects/poisoned.svg';
import envemomWeaponIconUrl from '@assets/icons/status-effects/envenom-weapon.svg';
import shieldWallIconUrl from '@assets/icons/status-effects/shield-wall.svg';
import stunnedIconUrl from '@assets/icons/status-effects/stunned.svg';
import smoteIconUrl from '@assets/icons/status-effects/smote.svg';


import robeArmourIconUrl from '@assets/icons/items/armour/robe.svg';
import leatherArmourIconUrl from '@assets/icons/items/armour/leather.svg';
import chainmailArmourIconUrl from '@assets/icons/items/armour/chainmail.svg';
import plateArmourIconUrl from '@assets/icons/items/armour/plate.svg';

import hoodIconUrl from '@assets/icons/items/heads/hood.svg';
import plateHelmentIconUrl from '@assets/icons/items/heads/plate-helmet.svg';

// Neck
import blackNecklaceIconUrl from '@assets/icons/items/neck/black-necklace.svg';
import blueNecklaceIconUrl from '@assets/icons/items/neck/blue-necklace.svg';
import greenNecklaceIconUrl from '@assets/icons/items/neck/green-necklace.svg';
import orangeNecklaceIconUrl from '@assets/icons/items/neck/orange-necklace.svg';
import purpleNecklaceIconUrl from '@assets/icons/items/neck/purple-necklace.svg';
import redNecklaceIconUrl from '@assets/icons/items/neck/red-necklace.svg';

import blueRingIconUrl from '@assets/icons/items/ring/blue-ring.svg';
import greenRingIconUrl from '@assets/icons/items/ring/green-ring.svg';
import greyRingIconUrl from '@assets/icons/items/ring/grey-ring.svg';
import orangeRingIconUrl from '@assets/icons/items/ring/orange-ring.svg';
import purpleRingIconUrl from '@assets/icons/items/ring/purple-ring.svg';
import redRingIconUrl from '@assets/icons/items/ring/red-ring.svg';
import tealRingIconUrl from '@assets/icons/items/ring/teal-ring.svg';
import thornsRingIconUrl from '@assets/icons/items/ring/thorns-ring.svg';
import yellowRingIconUrl from '@assets/icons/items/ring/yellow-ring.svg';

import roundShieldIconUrl from '@assets/icons/items/shields/round-shield.svg';
import spikedShieldIconUrl from '@assets/icons/items/shields/spiked-shield.svg';

import biteIconUrl from '@assets/icons/items/weapons/bite.svg';
import daggerIconUrl from '@assets/icons/items/weapons/dagger.svg';
import fistIconUrl from '@assets/icons/items/weapons/fist.svg';
import greatswordIconUrl from '@assets/icons/items/weapons/greatsword.svg';
import longbowIconUrl from '@assets/icons/items/weapons/longbow.svg';
import maceIconUrl from '@assets/icons/items/weapons/mace.svg';
import poisonBiteIconUrl from '@assets/icons/items/weapons/poison-bite.svg';
import wandIconUrl from '@assets/icons/items/weapons/wand.svg';
import quarterstaffIconUrl from '@assets/icons/items/weapons/quarterstaff.svg';


import goblinIconUrl from '@assets/icons/npcs/goblin.svg';
import ogreIconUrl from '@assets/icons/npcs/ogre.svg';
import orcIconUrl from '@assets/icons/npcs/orc.svg';
import ratIconUrl from '@assets/icons/npcs/rat.svg';
import wolfIconUrl from '@assets/icons/npcs/wolf.svg';
import zombieIconUrl from '@assets/icons/npcs/zombie.svg';

import mainHandIconUrl from '@assets/icons/items/slots/main-hand.png';
import offHandIconUrl from '@assets/icons/items/slots/off-hand.png';
import headIconUrl from '@assets/icons/items/slots/head.png';
import amrourIconUrl from '@assets/icons/items/slots/armour.png';
import handsIconUrl from '@assets/icons/items/slots/hands.png';
import ringIconUrl from '@assets/icons/items/slots/ring.png';
import potionIconUrl from '@assets/icons/items/slots/potion.png';
import waistIconUrl from '@assets/icons/items/slots/waist.png';
import neckIconUrl from '@assets/icons/items/slots/neck.png';
import inventoryIconUrl from '@assets/icons/items/slots/inventory.png';
import trashCanIconUrl from '@assets/icons/items/slots/trash-can.png';


import questionMarkIconUrl from '@assets/icons/gui/question-mark.svg';
import equipmentIconUrl from '@assets/icons/gui/equipment.svg';

type CreditProps = {
    src: string,
    alt: string,
    imgName: string,
    imgLink: string,
    artist: Artist,
    license: License,
};

type License = { name: string, link: string; };
const licenses: Record<string, License> = {
    CCBY30: {
        name: 'CC BY 3.0',
        link: 'https://creativecommons.org/licenses/by/3.0/'
    }
};

type Artist = { name: string, link: string; };
type ArtistId = 'Lorc' | 'Delapouite' | 'CarlOlsen' | 'Willdabeast' | 'JohnRedman' | 'HeavenlyDog' | 'Lucas' | 'sbed' | 'CaroAsercion' | 'Skoll';
const artists: Record<ArtistId, Artist> = {
    Lorc: {
        name: 'Lorc',
        link: 'https://lorcblog.blogspot.com/'
    },
    Delapouite: {
        name: 'Delapouite',
        link: 'https://delapouite.com/'
    },
    CarlOlsen: {
        name: 'Carl Olsen',
        link: 'https://x.com/unstoppableCarl'
    },
    Willdabeast: {
        name: 'Willdabeast',
        link: 'https://wjbstories.blogspot.com/'
    },
    JohnRedman: {
        name: 'John Redman',
        link: 'http://www.uniquedicetowers.com/'
    },
    HeavenlyDog: {
        name: 'HeavenlyDog',
        link: 'https://gnomosygoblins.blogspot.com/'
    },
    Lucas: {
        name: 'Lucas',
        link: 'https://game-icons.net/'
    },
    sbed: {
        name: 'sbed',
        link: 'http://opengameart.org/content/95-game-icons'
    },
    CaroAsercion: {
        name: 'Caro Asercion',
        link: 'https://game-icons.net/'
    },
    Skoll: {
        name: 'Skoll',
        link: 'https://game-icons.net/'
    }
} as const;

// Classes
const classes: CreditProps[] = [
    {
        src: fighterIconUrl,
        alt: 'Fighter icon',
        imgName: 'Crossed swords',
        imgLink: 'https://game-icons.net/1x1/lorc/crossed-swords.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: priestIconUrl,
        alt: 'Priest icon',
        imgName: 'Caduceus',
        imgLink: 'https://game-icons.net/1x1/delapouite/caduceus.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: rangerIconUrl,
        alt: 'Ranger icon',
        imgName: 'High shot',
        imgLink: '',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: rogueIconUrl,
        alt: 'Rogue icon',
        imgName: 'Daggers',
        imgLink: 'https://game-icons.net/1x1/lorc/daggers.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: wizardIconUrl,
        alt: 'Wizard icon',
        imgName: 'Crystal wand',
        imgLink: 'https://game-icons.net/1x1/lorc/crystal-wand.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
];

// Status Effects
const statusEffects: CreditProps[] = [
    {
        src: bleedingIconUrl,
        alt: 'Bleeding icon',
        imgName: 'Bleeding wound',
        imgLink: 'https://game-icons.net/1x1/lorc/bleeding-wound.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: blessedIconUrl,
        alt: 'Blessed icon',
        imgName: 'Embraced energy',
        imgLink: 'https://game-icons.net/1x1/lorc/embrassed-energy.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: burningIconUrl,
        alt: 'Burning icon',
        imgName: 'Flame',
        imgLink: 'https://game-icons.net/1x1/carl-olsen/flame.html',
        artist: artists.CarlOlsen,
        license: licenses.CCBY30
    },
    {
        src: frozenIconUrl,
        alt: 'Frozen icon',
        imgName: 'Frozen body',
        imgLink: 'https://game-icons.net/1x1/delapouite/frozen-body.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: invisibleIconUrl,
        alt: 'Invisible icon',
        imgName: 'Cloak and Dagger',
        imgLink: 'https://game-icons.net/1x1/lorc/cloak-dagger.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: poisonedIconUrl,
        alt: 'Poisoned icon',
        imgName: 'Poison bottle',
        imgLink: 'https://game-icons.net/1x1/lorc/poison-bottle.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: envemomWeaponIconUrl,
        alt: 'Envenom Weapon icon',
        imgName: 'Machete',
        imgLink: 'https://game-icons.net/1x1/lorc/machete.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: shieldWallIconUrl,
        alt: 'Shield Wall icon',
        imgName: 'Defensive wall',
        imgLink: 'https://game-icons.net/1x1/heavenly-dog/defensive-wall.html',
        artist: artists.HeavenlyDog,
        license: licenses.CCBY30
    },
    {
        src: stunnedIconUrl,
        alt: 'Stunned icon',
        imgName: 'Star swirl',
        imgLink: 'https://game-icons.net/1x1/lorc/star-swirl.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: smoteIconUrl,
        alt: 'Smote icon',
        imgName: 'Thunder struck',
        imgLink: 'https://game-icons.net/1x1/lorc/thunder-struck.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
];

// Items
const armour: CreditProps[] = [
    {
        src: robeArmourIconUrl,
        alt: 'Robe Armour icon',
        imgName: 'Robe',
        imgLink: 'https://game-icons.net/1x1/lorc/robe.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: leatherArmourIconUrl,
        alt: 'Leather Armour icon',
        imgName: 'Leather armor',
        imgLink: 'https://game-icons.net/1x1/delapouite/leather-armor.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: chainmailArmourIconUrl,
        alt: 'Chainmail Armour icon',
        imgName: 'Chain mail',
        imgLink: 'https://game-icons.net/1x1/willdabeast/chain-mail.html',
        artist: artists.Willdabeast,
        license: licenses.CCBY30
    },
    {
        src: plateArmourIconUrl,
        alt: 'Plate Armour icon',
        imgName: 'Breastplate',
        imgLink: 'https://game-icons.net/1x1/lorc/breastplate.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
];
const heads: CreditProps[] = [
    {
        src: hoodIconUrl,
        alt: 'Hood icon',
        imgName: 'Hood',
        imgLink: 'https://game-icons.net/1x1/lorc/hood.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: plateHelmentIconUrl,
        alt: 'Plate Helmet icon',
        imgName: 'Visored helm',
        imgLink: 'https://game-icons.net/1x1/lorc/visored-helm.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
];
const necks: CreditProps[] = [
    {
        src: redNecklaceIconUrl,
        alt: 'Strength Necklace icon',
        imgName: 'Gem pendant',
        imgLink: 'https://game-icons.net/1x1/lorc/gem-pendant.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: greenNecklaceIconUrl,
        alt: 'Dexterity Necklace icon',
        imgName: 'Gem pendant',
        imgLink: 'https://game-icons.net/1x1/lorc/gem-pendant.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: blackNecklaceIconUrl,
        alt: 'Perception Necklace icon',
        imgName: 'Gem pendant',
        imgLink: 'https://game-icons.net/1x1/lorc/gem-pendant.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: orangeNecklaceIconUrl,
        alt: 'Constitution Necklace icon',
        imgName: 'Gem pendant',
        imgLink: 'https://game-icons.net/1x1/lorc/gem-pendant.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: blueNecklaceIconUrl,
        alt: 'Intelligence Necklace icon',
        imgName: 'Gem pendant',
        imgLink: 'https://game-icons.net/1x1/lorc/gem-pendant.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: purpleNecklaceIconUrl,
        alt: 'Wisdom Necklace icon',
        imgName: 'Gem pendant',
        imgLink: 'https://game-icons.net/1x1/lorc/gem-pendant.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },



];
const rings: CreditProps[] = [
    {
        src: blueRingIconUrl,
        alt: 'Mana Regen Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: greenRingIconUrl,
        alt: 'Dodge Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: greyRingIconUrl,
        alt: 'Accuracy Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: orangeRingIconUrl,
        alt: 'Critical Damage Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: purpleRingIconUrl,
        alt: 'Mana Hit Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: redRingIconUrl,
        alt: 'Damage Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: tealRingIconUrl,
        alt: 'Mana Cost Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: thornsRingIconUrl,
        alt: 'Thorns Ring icon',
        imgName: 'Crown of thorns',
        imgLink: 'https://game-icons.net/1x1/lorc/crown-of-thorns.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: tealRingIconUrl,
        alt: 'Mana Cost Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
    {
        src: yellowRingIconUrl,
        alt: 'Critical Chance Ring icon',
        imgName: 'Big diamond ring',
        imgLink: 'https://game-icons.net/1x1/skoll/big-diamond-ring.html',
        artist: artists.Skoll,
        license: licenses.CCBY30
    },
];
const shields: CreditProps[] = [
    {
        src: roundShieldIconUrl,
        alt: 'Round shield icon',
        imgName: 'Round shield',
        imgLink: 'https://game-icons.net/1x1/willdabeast/round-shield.html',
        artist: artists.Willdabeast,
        license: licenses.CCBY30
    },
    {
        src: spikedShieldIconUrl,
        alt: 'Spiked shield icon',
        imgName: 'Spiked shield',
        imgLink: 'https://game-icons.net/1x1/delapouite/spiked-shield.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
];
const weapons: CreditProps[] = [
    {
        src: biteIconUrl,
        alt: 'Bite icon',
        imgName: 'Front teeth',
        imgLink: 'https://game-icons.net/1x1/lorc/front-teeth.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: daggerIconUrl,
        alt: 'Dagger icon',
        imgName: 'Plain dagger',
        imgLink: 'https://game-icons.net/1x1/lorc/plain-dagger.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: fistIconUrl,
        alt: 'Fist icon',
        imgName: 'Rock',
        imgLink: 'https://game-icons.net/1x1/john-redman/rock.html',
        artist: artists.JohnRedman,
        license: licenses.CCBY30
    },
    {
        src: greatswordIconUrl,
        alt: 'Greatsword icon',
        imgName: 'Two handed sword',
        imgLink: 'https://game-icons.net/1x1/delapouite/two-handed-sword.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: longbowIconUrl,
        alt: 'Longbow icon',
        imgName: 'Pocket bow',
        imgLink: 'https://game-icons.net/1x1/lorc/pocket-bow.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: maceIconUrl,
        alt: 'Mace icon',
        imgName: 'Flanged mace',
        imgLink: 'https://game-icons.net/1x1/lorc/plain-dagger.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: poisonBiteIconUrl,
        alt: 'Poison bite icon',
        imgName: 'Front teeth',
        imgLink: 'https://game-icons.net/1x1/lorc/front-teeth.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: wandIconUrl,
        alt: 'Wand icon',
        imgName: 'Orb wand',
        imgLink: 'https://game-icons.net/1x1/willdabeast/orb-wand.html',
        artist: artists.Willdabeast,
        license: licenses.CCBY30
    },
    {
        src: quarterstaffIconUrl,
        alt: 'Quarterstaff icon',
        imgName: 'Bo',
        imgLink: 'https://game-icons.net/1x1/delapouite/bo.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
];

// NPCS
const npcs: CreditProps[] = [
    {
        src: goblinIconUrl,
        alt: 'Goblin icon',
        imgName: 'Goblin head',
        imgLink: 'https://game-icons.net/1x1/delapouite/goblin-head.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: ogreIconUrl,
        alt: 'Ogre icon',
        imgName: 'Ogre',
        imgLink: 'https://game-icons.net/1x1/delapouite/ogre.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: orcIconUrl,
        alt: 'Orc icon',
        imgName: 'Orc head',
        imgLink: 'https://game-icons.net/1x1/delapouite/orc-head.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: ratIconUrl,
        alt: 'Rat icon',
        imgName: 'Rat',
        imgLink: 'https://game-icons.net/1x1/delapouite/rat.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: wolfIconUrl,
        alt: 'Wolf icon',
        imgName: 'Wolf head',
        imgLink: 'https://game-icons.net/1x1/lorc/wolf-head.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: zombieIconUrl,
        alt: 'Zombie icon',
        imgName: 'Shambling zombie',
        imgLink: 'https://game-icons.net/1x1/delapouite/shambling-zombie.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
];

// Item Slots
const itemSlots: CreditProps[] = [
    {
        src: mainHandIconUrl,
        alt: 'Main-hand icon',
        imgName: 'Crossed swords',
        imgLink: 'https://game-icons.net/1x1/lorc/crossed-swords.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: offHandIconUrl,
        alt: 'Off-hand icon',
        imgName: 'Shield',
        imgLink: 'https://game-icons.net/1x1/sbed/shield.html',
        artist: artists.sbed,
        license: licenses.CCBY30
    },
    {
        src: headIconUrl,
        alt: 'Head icon',
        imgName: 'Barbute',
        imgLink: 'https://game-icons.net/1x1/lorc/barbute.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: amrourIconUrl,
        alt: 'Armour icon',
        imgName: 'Chest armor',
        imgLink: 'https://game-icons.net/1x1/delapouite/chest-armor.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: handsIconUrl,
        alt: 'Hands icon',
        imgName: 'Gloves',
        imgLink: 'https://game-icons.net/1x1/delapouite/chest-armor.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: ringIconUrl,
        alt: 'Ring icon',
        imgName: 'Diamond ring',
        imgLink: 'https://game-icons.net/1x1/delapouite/diamond-ring.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: potionIconUrl,
        alt: 'Potion icon',
        imgName: 'Round potion',
        imgLink: 'https://game-icons.net/1x1/caro-asercion/round-potion.html',
        artist: artists.CaroAsercion,
        license: licenses.CCBY30
    },
    {
        src: waistIconUrl,
        alt: 'Waist icon',
        imgName: 'Belt',
        imgLink: 'https://game-icons.net/1x1/lucasms/belt.html',
        artist: artists.Lucas,
        license: licenses.CCBY30
    },
    {
        src: neckIconUrl,
        alt: 'Neck icon',
        imgName: 'Belt',
        imgLink: 'https://game-icons.net/1x1/delapouite/emerald-necklace.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: inventoryIconUrl,
        alt: 'Inventory icon',
        imgName: 'Swap bag',
        imgLink: 'https://game-icons.net/1x1/lorc/swap-bag.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    },
    {
        src: trashCanIconUrl,
        alt: 'Trash can icon',
        imgName: 'Trash can',
        imgLink: 'https://game-icons.net/1x1/delapouite/trash-can.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    }
];

// GUI
const gui: CreditProps[] = [
    {
        src: questionMarkIconUrl,
        alt: 'Question mark icon',
        imgName: 'Uncertainty',
        imgLink: 'https://game-icons.net/1x1/lorc/uncertainty.html',
        artist: artists.Lorc,
        license: licenses.CCBY30
    },
    {
        src: equipmentIconUrl,
        alt: 'Equipment icon',
        imgName: 'Cape armor',
        imgLink: 'https://game-icons.net/1x1/delapouite/cape-armor.html',
        artist: artists.Delapouite,
        license: licenses.CCBY30
    }
];

function Credit({ src, alt, imgName, imgLink, artist, license }: CreditProps) {
    return (
        <div className='flex items-center text-xl'>
            <span>
                <img className='h-12 inline pr-2' src={src} alt={alt} /><a className='font-bold text-tooltip-highlight' href={imgLink}>{imgName}</a> by <a className='font-bold text-tooltip-highlight' href={artist.link}> {artist.name}</a> under <a className='font-bold text-tooltip-highlight' href={license.link}>{license.name}</a>.</span>
        </div>
    );
}

function CreditsGroup({ name, credits }: { name: string, credits: CreditProps[]; }) {
    return (
        <div>
            <h2 className='text-2xl font-bold pb-2'>{name}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                {Object.values(credits).map((props, i) => <Credit key={name + i} {...props} />)}
            </div>
        </div>
    );
}

export default function Credits() {
    return (
        <div className='px-6 py-4 space-y-4'>
            <h1 className='text-3xl font-bold'>Credits</h1>
            <div className='space-y-10'>
                <CreditsGroup name={'Classes'} credits={classes} />
                <CreditsGroup name={'Status Effects'} credits={statusEffects} />
                <CreditsGroup name={'Armour'} credits={armour} />
                <CreditsGroup name={'Heads'} credits={heads} />
                <CreditsGroup name={'Necks'} credits={necks} />
                <CreditsGroup name={'Rings'} credits={rings} />
                <CreditsGroup name={'Shields'} credits={shields} />
                <CreditsGroup name={'Weapons'} credits={weapons} />
                <CreditsGroup name={'NPCs'} credits={npcs} />
                <CreditsGroup name={'Item Slots'} credits={itemSlots} />
                <CreditsGroup name={'GUI'} credits={gui} />
            </div>
        </div>
    );
}
