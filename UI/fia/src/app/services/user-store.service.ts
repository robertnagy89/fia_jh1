import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private name$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  private user$ = new BehaviorSubject<User>({} as User);
  constructor() { }

  public getRoleFromStore() {
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string) {
    this.role$.next(role);
  }

  public getNameFromStore() {
    return this.name$.asObservable();
  }

  public setNameForStore(name: string) {
    this.name$.next(name);
  }

  getUser() {
    return this.user$.asObservable();
  }

  setUser(user: User) {
    this.user$.next(user);
  }
}
