Ext.define('openFlair.view.programm.Programm', {
    extend: 'Ext.Container',
    xtype: 'programm',
    controller: 'programm',

    listeners: {
        initialize: 'onBeforeshow'
    },
});