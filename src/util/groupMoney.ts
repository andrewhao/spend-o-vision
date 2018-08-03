import { IAmazonOrderItemGroup, IAmazonOrderItem } from "../types/data";

export default function groupMoney(group: IAmazonOrderItemGroup): number {
  const totalCents = group.items.reduce(
    (acc: number, item: IAmazonOrderItem): number => {
      return acc + item.price_cents;
    },
    0
  );
  return totalCents / 100;
}
