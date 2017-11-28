Ext.define('openFlair.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'openFlair.view.main.MainController', 'openFlair.view.news.News', 
        'openFlair.view.kuenstler.Kuenstler', 'openFlair.view.faq.Faq', 
    ],
    tabBarPosition: 'left',
    items: [{
        title: 'News',
        xtype: 'news'
    }, {
        title: 'Artists',
        xtype: 'kuenstler'
    }, {
        title: 'Programm'
    }, {
        title: 'FAQ',
        xtype: 'faq'
    }]
});