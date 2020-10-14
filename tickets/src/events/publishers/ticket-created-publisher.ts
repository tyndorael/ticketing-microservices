import { Publisher, Subjects, TicketCreatedEvent } from "@tynsoft/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
