<template>
	<div class="login">
		<h3> Google Sign In </h3>
		
<!-- 		<button id="firebaseui-auth-container"> </button>
 -->
		<div id="firebaseui-auth-container">
		</div>		

		<div id="loader">Loading...</div>


	</div>	

</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import {config} from './helpers/firebaseConfig';

export default {
	name: "login",
	data () {
		return {
			text: " "
		}
	},
	mounted() {
	    // var uiConfig = {
	    //   signInSuccessUrl: '/home',
	    //   signInOptions: [
	    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	    //     // firebase.auth.EmailAuthProvider.PROVIDER_ID
	    //     ]
	    //   }; 
	    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
	    // ui.start('#firebaseui-auth-container', uiConfig);
	    // FirebaseUI config.
      var uiConfig = {
        callbacks: {
          signInSuccess: function(currentUser, credential, redirectUrl) {
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          signInFailure: function(error) {
            // Some unrecoverable error occurred during sign-in.
            // Return a promise when error handling is completed and FirebaseUI
            // will reset, clearing any UI. This commonly occurs for error code
            // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
            // occurs. Check below for more details on this.
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

<style scoped>

</style> 

</style>
