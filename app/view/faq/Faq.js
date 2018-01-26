Ext.define('openFlair.view.faq.Faq', {
    extend: 'Ext.Panel',
    xtype: 'faq',

    controller: 'faq',
    scrollable: true,
    layout: {
        // type: 'accordion',
        type: 'vbox',
        align: 'start',
        // titleCollapse: false,
        // animate: true,
        // activeOnTop: true
    },
    listeners: {
        initialize: 'onBeforeshow'
        
    },
});