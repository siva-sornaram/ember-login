import Controller from '@ember/controller';
import Ember from 'ember';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;

  @service router;

  errormsg = "Invalid Username or password";
  err = false;

  validate_user = () => {
    var uname = this.username;
    var pass = this.password;

    console.log(uname, password);

    var result = $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/loginbackend/login',
      data: {
        uname: uname,
        pass: pass,
      },
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    const rsObj = JSON.parse(result);

    console.log(typeof rsObj, rsObj);

    

    if (rsObj.isValidated) {
        console.log('assigning values');
        this.session.setUserName(rsObj.userName);
        this.session.setIsValidated(rsObj.isValidated);
        this.router.transitionTo('welcome-page');
    } else {
        this.set('err', true);
    }

    console.log(this.session.getUserName());
    console.log(this.session.getIsValidated());
  };
}
