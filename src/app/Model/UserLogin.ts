export class UserLogin {
  constructor() {
  }
  public id;
  public name: string;
  public password: string;
  public ConnectionID: string;
  public isConnect: string;

}
export class Messages {
  constructor() {}
  public id;
  public sender: string;
  public recevier: string;
  public message: string;
  public time: Date;
}
