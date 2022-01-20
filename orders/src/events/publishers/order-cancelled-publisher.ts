import { Publisher, OrderCancelledEvent, Subjects } from '@tuticketsorg/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}