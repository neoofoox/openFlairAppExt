Ext.define('openFlair.view.pageelements.ArtistCard', {
    extend: 'Ext.Container',
    xtype: 'artistCard',
    controller: 'artistCard',

    items: [{
        xtype: 'imageWithCenterTitle',
        data: {
            image: '{image}',
            title: '{title}'
        }  
    }, {
        xtype: 'label',
        html: '{description}'
    }, {
        xtype: 'container',
        layout: 'hbox',
        items: [{
            xtype: 'button',
            iconCls: 'hearth',
            text: 'Favorite',
            handler: 'onFavorite',
        }]
    }]
});