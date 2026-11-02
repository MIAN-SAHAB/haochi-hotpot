import type { Metadata } from 'next';
import { OrderHub } from '@/components/order-hub';
export const metadata:Metadata={title:'Order & Late-Night Delivery'};
export default function OrderPage(){return <OrderHub/>}
