
var app_id = '1596587174011007'           // id do app criado no facebook
var pagForShared = 'facebook.com/istvdigital' // pagina que sera compartilhada no perfil do usuario

var userInMk = ''                    // usuario e senha configurado no serviço de hotspot mikrotik
var passInMK = ''

window.fbAsyncInit = function() {
  FB.init({
    appId            : app_id,
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.3'
  });
};

function sharePost(){
  FB.ui(
    {
      method: 'feed',
      app_id: app_id,
      display: 'popup',
      link: pagForShared,
    },
    // callback
    function(response) {
      if (response && !response.error_message) {
        authHotspotMikrotik();
      }
    }
  );
}

function authHotspotMikrotik() {
  document.sendin.username.value = userInMk;
  document.sendin.password.value = passInMK;
  document.sendin.submit();
  return false;
}
