import { Publisher, Subjects, TicketCreatedEvent } from '@tuticketsorg/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
};

