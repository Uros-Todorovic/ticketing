import { Publisher, Subjects, TicketUpdatedEvent } from '@tuticketsorg/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated= Subjects.TicketUpdated;
};

