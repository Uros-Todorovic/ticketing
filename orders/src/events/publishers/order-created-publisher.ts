import { Publisher, OrderCreatedEvent, Subjects } from '@tuticketsorg/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}