/**
 *
 *-------------------------------------------------------------------------------
                                                      initial setup
  --------------------------------------------------------------------------------
 * step -1      : visit >> console.firebase.google.com
 * step -2      : create projects (skip google analytics)
 * step -3      : register app (create config)
 * step -4      :  install firbase : npm install firebase
 * step -5      : add config file to your projects
 * stpe -6      : DANGET >> do not published or make firebase config to public by phusing those to github
 *
 * ______________________________________________________________________________________________
 *                                             Intigration
 * -------------------------------------------------------------------------------------------------
 * step -7      :  visite : Go to docs << build <<  Authentication  << web << get started
 * step -8      : Export app from the firebase.config.js file : Export default app
 * step -9      : login.js > import getAuth from firebase/auth
 * step -10    : cearte const auth = getAuth (app)
 *-----------------------------------------------------------------------------------------------------
                                                           provider setup
   -----------------------------------------------------------------------------------------------------
 * step -11    : import GoogleAuthProvider and create a new provider
 * step -12    : use SingInWithPopup and pass auth and provider
 * step -13    : activate sign in method (google, facebook, github etc)
 * step -14    : [vite] : change 127.0.0.1 to localHost
 *
 * ------------------------------------------------------------------
 *                                 more auth provider
 * -----------------------------------------------------------------
 * 1. activate the auth provider (create app ,provide redirect url, client id , client secrect)
 */
