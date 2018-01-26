Ext.define('openFlair.view.pageelements.ArtistCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.artistCard',

    onFavorite: function(artistId){
        //TODO: save in local
    },

    onBeforeshow: function(container){
       console.log(container);
    }
});