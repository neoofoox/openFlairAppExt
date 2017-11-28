Ext.define('openFlair.view.news.News', {
    extend: 'Ext.Panel',
    xtype: 'news',
    controller: 'news',
    scrollable: true,
    layout: {
        type: 'float'
    },
    listeners: {
        initialize: 'onBeforeshow'
    },
});