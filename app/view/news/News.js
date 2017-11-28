Ext.define('openFlair.view.news.News', {
    extend: 'Ext.Panel',
    xtype: 'news',
    controller: 'news',
    scrollable: true,
    layout: {
        type: 'vbox',
        align: 'start'
    },
    listeners: {
        initialize: 'onBeforeshow'
    },
});