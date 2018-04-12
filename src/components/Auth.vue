<template>
	<div class="login">
    <img id="s2-logo" src="../assets/images/s-2-logo.png" alt="Sinnerschrader Logo">
    <img id="move-logo" src="../assets/images/move-logo.png" alt="Sinnerschrader Logo">
		<h1 class="login__headline"> Login via Google </h1>
    <p class="login__text">Are you looking for a colleague, meeting room or space for a new team at SinnerSchrader?</p>
    <div id="loader">Loading...</div>
		<div id="firebaseui-auth-container"></div>
    <h1 class="button__text">Let's go!</h1>
    <br>
    
		
	</div>	

</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { config } from '../../helpers/firebaseconfig';

export default {
	name: "appAuth",
	data () {
		return {
			text: " "
		}
	},
	mounted() {
      var uiConfig = {
        callbacks: {
          signInSuccess: function(currentUser, credential, redirectUrl) {
            // Return type determines whether we continue the redirect automatically or whether we leave that to developer to handle.
            var user = signInSucces.currentUser;
            console.log("Successfully logged in.", user)
            return true;
            // console.log("Hello", currentUser.email)
          },
          signInFailure: function(error) {
            // Some unrecoverable error occurred during sign-in.
            // Return a promise when error handling is completed and FirebaseUI
            return handleUIError(error);
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          	}
          },
	      credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
	        // Query parameter name for mode.
	      queryParameterForWidgetMode: 'mode',
	        // Query parameter name for sign in success url.
	      queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
	        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	      signInFlow: 'popup',
	      signInSuccessUrl: 'home',
	      signInOptions: [
	          // Leave the lines as is for the providers you want to offer your users.
	         firebase.auth.GoogleAuthProvider.PROVIDER_ID
	      ]
      	  };

          let ui = firebaseui.auth.AuthUI.getInstance();
      	  if (!ui) {
	      	ui = new firebaseui.auth.AuthUI(firebase.auth());
	      	}
	      ui.start('#firebaseui-auth-container', uiConfig);
	}
}

</script>

<style lang="css">

@import "../../styles/css/auth.component.css"

</style>

