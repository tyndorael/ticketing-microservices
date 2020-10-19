import { OrderCreatedEvent, Publisher, Subjects } from "@tynsoft/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
