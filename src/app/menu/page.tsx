import type { Metadata } from 'next';
import { BowlBuilder } from '@/components/bowl-builder';
export const metadata:Metadata={title:'The Menu & Bowl Builder'};
export default function MenuPage(){return <BowlBuilder/>}
