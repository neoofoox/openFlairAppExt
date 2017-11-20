Ext.define('openFlair.model.Faq', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        convert: function(value, record){
            return record.data.faq.id;
        }
    }, {
        name: 'question',
        convert: function(value, record){
            return record.data.faq.question;
        }
    }, {
        name: 'answer',
        convert: function(value, record){
            return record.data.faq.answer;
        }
    }]
});