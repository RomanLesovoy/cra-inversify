import {injectable} from "inversify";
import {SubjectSubscription} from "../classes/SubjectSubscription";
import {getUser, getUsers} from "./mockResponses";

export interface IUserService {
  subjects: any,
  updateUser(value: any): any,
  updateUsers(value: Array<any>): any,
  subscribeSubject(name: string, callback: Function, context?: any): void,
}

export const userSubjects = {
  user: 'user',
  users: 'users',
}

@injectable()
export class UserService extends SubjectSubscription implements IUserService {
  subjects = {
    [userSubjects.user]:  { name: '...' },
    [userSubjects.users]:  [],
  }
  constructor() {
    super();
    (async () => {
      const data = await Promise.all([getUsers(), getUser()]);
      this.updateUsers(data[0]);
      this.updateUser(data[1]);
    })();
  }
  updateUser = (value: any) => this.subjectNext(userSubjects.user, value)
  updateUsers = (value: Array<any>) => this.subjectNext(userSubjects.users, value)
}