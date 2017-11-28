Ext.define('openFlair.view.kuenstler.Kuenstler', {
    extend: 'Ext.Container',
    xtype: 'kuenstler',
    controller: 'kuenstler',

    listeners: {
        initialize: 'onBeforeshow'
    },
});