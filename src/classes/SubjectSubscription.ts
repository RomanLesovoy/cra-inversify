import {injectable} from "inversify";

@injectable()
export class SubjectSubscription {
  subjects: { [subjectName: string]: any } = {}
  subjectNext (subject: string, value: any) {
    this.subjects[subject] = value;
    this.broadcast(subject, value);
  }
  subscribers: Array<any> = []
  subscribeSubject(subject: string, callback: Function, context: any = null) {
    this.subscribers.push({ subject, callback, context });
  }
  broadcast(subject: string, value: any) {
    this.subscribers
      .filter((subscriber) => subscriber.subject === subject)
      .forEach((subscriber) => {
        if (subscriber.context) {
          subscriber.callback.call(subscriber.context, ({ [subscriber.subject]: value }))
        } else {
          subscriber.callback(value);
        }
      })
  }
}