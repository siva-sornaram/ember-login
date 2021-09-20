import Ember from 'ember';
import Component from '@glimmer/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default class LoginControllerComponent extends Component {

  @service session;


    validate_user = () => {
      var uname = this.username;
      var pass = this.password;
      var result = {
        userId: 0,
        userName: "",
        isValidated: false
      }

      console.log(uname, password);

      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/loginbackend/login',
        data: {
          uname: uname,
          pass: pass,
        },
        success: function (dat) {
          if (dat.isValidated) {
            console.log(dat.userName, dat.isValidated);
            result = dat;
            console.log(result);
          } else {
            result = dat;
            console.log(dat);
          }
        },
        error: function (err) {
          console.log(err);
        },
      });

      this.session.setUserName(this.result.userName);
      this.session.setIsValidated(this.result.isValidated);

      console.log(this.session.getUserName());
      console.log(this.session.getIsValidated());

    };

  }