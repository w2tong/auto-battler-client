
import { TRASH_ID } from "@/utils/constants";
import ItemSlot from "./ItemSlot";

type TrashProps = { itemId: string | null; };
export default function Trash({ itemId }: TrashProps) {
    return (
        <div>
            <h1 className='text-xl sm:text-2xl font-bold pb-2'>Trash</h1>
            <ItemSlot
                id={TRASH_ID}
                itemId={itemId}
                slot={TRASH_ID}
            />
        </div>
    );
}