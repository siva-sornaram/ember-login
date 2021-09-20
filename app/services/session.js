import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
    @tracked user = {
        userId: 0,
        userName: "",
        isValidated: false
    }

    getUserName() {
        return this.userName;
    }
    setUserName(newName) {
        this.userName = newName;
    }

    getIsValidated() {
        return this.isValidated;
    }
    setIsValidated(newValidate) {
        this.isValidated = newValidate;
    }

}
