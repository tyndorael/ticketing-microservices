import { Publisher, Subjects, TicketUpdatedEvent } from "@tynsoft/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
