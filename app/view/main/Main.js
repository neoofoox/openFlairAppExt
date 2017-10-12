Ext.define('openFlair.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'openFlair.view.main.MainController', 
    ],
    items: [{
        title: 'Home',
    }, {
        title: 'News',
    }, {
        title: 'Artists'
    }, {
        title: 'Programm'
    }, {
        title: 'FAQ'
    }]
});