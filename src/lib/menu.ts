export const servings = [{ id: 'single', name: 'Single Serving', price: 550 }, { id: 'sharing', name: 'Sharing Bowl', price: 1100 }];
export const spices = ['Mild', 'Medium', 'Hot'] as const;
export const momos = [{ id: 'steamed', name: 'Steamed Momos', price: 450, note: 'Delicate & juicy' }, { id: 'panfried', name: 'Pan-Fried Momos', price: 450, note: 'Golden crispy bottoms' }, { id: 'alfredo', name: 'Alfredo Momos', price: 600, note: 'Velvety rich fusion' }];
export const addons = [{ id: 'oil', name: 'Chilli Oil', price: 150 }, { id: 'dumplings', name: 'Dumplings', price: 150 }, { id: 'sausages', name: 'Sausages', price: 150 }, { id: 'noodles', name: 'Noodles', price: 100 }, { id: 'vegetables', name: 'Vegetables', price: 100 }];
export const money = (n: number) => `RS ${n.toLocaleString('en-PK')}`;
export const whatsapp = (text = "Hi Haochi! I'd like to order for tonight. Could you help me choose?") => `https://wa.me/923394012251?text=${encodeURIComponent(text)}`;
export const instagram = 'https://www.instagram.com/haochi_hotpot/';
export function kitchenOpen(date: Date) { const hour = Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', hourCycle: 'h23' }).format(date)); return hour >= 18 || hour < 2; }
