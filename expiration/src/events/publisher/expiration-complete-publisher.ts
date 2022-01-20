import { Subjects, Publisher, ExpirationCompletedEvent } from '@tuticketsorg/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompletedEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
};