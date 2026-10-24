// Public browser configuration only. The publishable key is not a secret;
// database RLS and server-side RPC checks must protect all data and actions.
// A deploy owner may fill these two fields before uploading the build ZIP.
window.SUNEO_PUBLIC_CONFIG = Object.freeze({
  enableAccounts: false,
  supabaseUrl: '',
  publishableKey: ''
});
