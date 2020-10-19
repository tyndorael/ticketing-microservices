import { OrderCancelledEvent, Publisher, Subjects } from "@tynsoft/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
