Ext.define('openFlair.view.kuenstler.Kuenstler', {
    extend: 'Ext.Container',
    xtype: 'kuenstler',
    controller: 'kuenstler',
    scrollable: true,
    layout: {
        type: 'float'
    },
    // items: [{
    //     xtype: 'searchfield',
    //     label: 'suche',
    //     name: 'artistSearch'
    // }, {
    //     xtype: 'panel',
    //     name: 'kuenstlerListe',
    //     layout: {
    //         type: 'float'
    //     }, 
    //     listeners: {
    //         initialize: 'onBeforeshow'
    //     },
    // }],
    listeners: {
        initialize: 'onBeforeshow'
    },
});