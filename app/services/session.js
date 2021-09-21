import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @tracked user = {
    userId: 0,
    userName: '',
    isValidated: false,
  };

  getUserName() {
    return this.user.userName;
  }
  setUserName(newName) {
    this.user.userName = newName;
  }

  getIsValidated() {
    return this.user.isValidated;
  }
  setIsValidated(newValidate) {
    this.user.isValidated = newValidate;
  }
}
