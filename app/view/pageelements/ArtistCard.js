Ext.define('openFlair.view.pageelements.ArtistCard', {
    extend: 'Ext.Container',
    xtype: 'artistCard',
    controller: 'artistCard',
    //TODO: Add Dependencies for this: https://github.com/google/material-design-icons/tree/master/sprites
    style: 'background-color: #fbfbfb; border: 1px solid #f2f2f2',    
    width: 300,
    height: 350,
    margin: '5',
    padding: '10 15',
    constructor: function(config){
        var me = this;
        if(config){
            me.items = [
                // Ext.create('openFlair.view.pageelements.ImageWithCenterTitle', {
                //     image: config.artist.image_attachment_urls_large,
                //     title: config.artist.name
                // }),
                {
                    xtype: 'label',
                    html: config.artist.description
                }
            ]
            // console.log(config.artist);

        }
    },
    // items: [{
    //     xtype: 'imageWithCenterTitle',
    //    // image : this.artist.image,
    //    // title : this.artist.name
    // }, {
    //     xtype: 'label',
    //   //  html: this.artist.description
    //     // html: '{description}'
    // // }, {
    // //     xtype: 'container',
    // //     layout: 'hbox',
    // //     items: [{
    // //         xtype: 'button',
    // //         margin: '5 0',
    // //         // iconCls: 'x-mi mi-favorite-outline',
    // //         iconCls: 'x-mi mi-favorite mdc-text-red',
    // //         handler: 'onFavorite',
    // //     }]
    // }]
    listeners: {
        initialize: 'onBeforeshow'
    },
});