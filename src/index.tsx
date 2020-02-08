import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "../assets/materialize.scss";
import "../assets/global-styles.scss";

import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { tsx } from "springtype/web/vdom";
import tpl from "./index.tpl";
import { FirebaseService } from "./service/firebase";
import { inject } from "springtype/core/di";
import { FIREBASE_CONFIG } from "./config/firebase";

@component({
  tpl
})
export class HomepageComponent extends st.component implements ILifecycle {

  @ref
  sideNav: HTMLElement;

  @inject(FirebaseService, FIREBASE_CONFIG)
  firebaseService: FirebaseService;

  @ref
  contactForm: HTMLFormElement;

  @ref
  firstNameField: HTMLInputElement;

  @ref
  lastNameField: HTMLInputElement;

  @ref
  emailField: HTMLInputElement;

  @ref
  phoneField: HTMLInputElement;

  @ref
  messageField: HTMLTextAreaElement;

  @ref
  validationErrorMessage: HTMLElement;

  thankYouMessageModal: M.Modal;

  onEmailSubmit = () => {

    const emailData = {
      firstName: this.firstNameField.value,
      lastName: this.lastNameField.value,
      email: this.emailField.value,
      phone: this.phoneField.value,
      message: this.messageField.value,
    }

    if (!this.contactForm.checkValidity()) {
      this.validationErrorMessage.innerText = 'Please check your inputs.';
    } else {
      this.validationErrorMessage.innerText = '';

      this.firebaseService.database().ref('emails').push().set(emailData);

      this.thankYouMessageModal.open();
    }
  }

  onAfterInitialRender() {



    // see https://materializecss.com/sidenav.html JavaScript API etc.
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    M.Parallax.init(document.querySelectorAll('.parallax'), {});

    const carousel = M.Carousel.init(document.querySelectorAll('.carousel'), {
      numVisible: 5,
      padding: 100,
      shift: 10,
      dist: -50
    })[0];

    // animated customer logo loop
    setInterval(() => {
      carousel.next();
    }, 1000);

    this.thankYouMessageModal = M.Modal.init(document.querySelectorAll('#thank-you-for-your-message'), {})[0];
  }
}

st.render(<HomepageComponent />);
