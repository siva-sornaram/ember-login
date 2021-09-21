import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WelcomePageRoute extends Route {
  @service session;

  isvalidated = this.session.getIsValidated();
  uname = this.session.getUserName();

  beforeModel() {
    if (!this.session.getIsValidated()) {
      console.log(this.session.getUserName());
      console.log(this.session.getIsValidated());
      this.transitionTo('login');
    }
  }
}
