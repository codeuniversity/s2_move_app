<template>
	<div class="login">
		<h3> Sign In </h3>
		<div id="firebaseui-auth-container">
		</div>		
		<div id="loader">Loading...</div>
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
            return true;
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

      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
	}
}

</script>

<style>


span.firebaseui-idp-text.firebaseui-idp-text-short {
	display: none;
}
li.firebaseui-list-item {
	list-style-type: none;
	margin-top: -50px;
}

button.firebaseui-idp-button.mdl-button.mdl-js-button.mdl-button--raised.firebaseui-idp-google.firebaseui-id-idp-button {
	margin:0, auto;
}

ul.firebaseui-idp-list {

}

div#firebaseui-auth-container {
	width: 300px;
	margin-left: 500px;
	margin-top: 100px;
}

h3 {
	width: 300px;
	margin-left: 615px;
	margin-top: 30px;
}
</style> 

