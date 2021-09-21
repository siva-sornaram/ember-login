import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class WelcomePageController extends Controller {
    @service session;

    invalidate = () => {
        this.session.setIsValidated(false);
        this.session.setUserName("");
        console.log(this.session.getIsValidated());
        console.log(this.session.getUserName());
        this.transitionToRoute('login');
    }

}
