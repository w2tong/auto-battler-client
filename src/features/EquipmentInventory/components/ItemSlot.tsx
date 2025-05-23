import Item from './Item';
import { useDroppable } from '@dnd-kit/core';
import { EquipSlot, isValidEquip } from '@wholesome-sisters/auto-battler';
import inventorySlot from '../assets/EquipSlotIcons/inventory.png';

import neck from '../assets/EquipSlotIcons/neck.png';
import armour from '../assets/EquipSlotIcons/armour.png';
import waist from '../assets/EquipSlotIcons/waist.png';
import hands from '../assets/EquipSlotIcons/hands.png';
import head from '../assets/EquipSlotIcons/head.png';
import mainHand from '../assets/EquipSlotIcons/mainhand.png';
import offHand from '../assets/EquipSlotIcons/offHand.png';
import potion from '../assets/EquipSlotIcons/potion.png';
import ring from '../assets/EquipSlotIcons/ring.png';

const icons: { [key in EquipSlot]: string } = {
    [EquipSlot.MainHand]: mainHand,
    [EquipSlot.OffHand]: offHand,
    [EquipSlot.Armour]: armour,
    [EquipSlot.Head]: head,
    [EquipSlot.Hands]: hands,
    [EquipSlot.Ring1]: ring,
    [EquipSlot.Ring2]: ring,
    [EquipSlot.Potion]: potion,
    [EquipSlot.Waist]: waist,
    [EquipSlot.Neck]: neck
};

export default function ItemSlot({ id, itemId, filtered, slot }: { id: string, itemId: string | null, filtered: boolean, slot?: EquipSlot; }) {
    const { isOver, setNodeRef, over, active } = useDroppable({
        id,
        data: { itemId }
    });

    let borderColor = 'border-zinc-700';
    if (isOver && over && active?.data.current?.itemId) {
        const activeItemId = active.data.current.itemId;
        if (isNaN(parseInt(over.id.toString()))) {
            borderColor = isValidEquip(activeItemId, over.id as EquipSlot) ? 'border-green-700' : 'border-red-700';
        }
        else {
            borderColor = 'border-white';
        }
    }

    return (
        <div style={{ backgroundImage: `url(${slot ? icons[slot] : inventorySlot})` }} className={`w-[68px] h-[68px] border-2 rounded-sm bg-center bg-no-repeat ${borderColor}`} ref={setNodeRef}>
            {itemId ? <Item id={id} itemId={itemId} filtered={filtered} /> : null}
        </div>
    );
}