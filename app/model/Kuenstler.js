Ext.define('openFlair.model.Kuenstler', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'rating',
        convert: function(value, record){
            return record.data.act.rating;
        }
    }, {
        name: 'permalink',
        convert: function(value, record){
            return record.data.act.permalink;
        }
    }, {
        name: 'name',
        convert: function(value, record){
            return record.data.act.name;
        }
    }, {
        name: 'created_at',
        convert: function(value, record){
            return record.data.act.created_at;
        }
    }, {
        name: 'category',
        convert: function(value, record){
            return record.data.act.category;
        }
    }, {
        name: 'festival_id',
        convert: function(value, record){
            return record.data.act.festival_id;
        }
    }, {
        name: 'updated_at',
        convert: function(value, record){
            return record.data.act.updated_at;
        }
    }, {
        name: 'published',
        convert: function(value, record){
            return record.data.act.published;
        }
    }, {
        name: 'id',
        convert: function(value, record){
            return record.data.act.id;
        }
    }, {
        name: 'gigs',
        convert: function(value, record){
            //TODO: alle anderen auch auflisten.
            return record.data.act.gigs[0];
        }
    }, {
        name: 'image_attachment_urls_tiny',
        convert: function(value, record){
            return record.data.act.image_attachment_urls[0].tiny;
        }
    }, {
        name: 'image_attachment_urls_original',
        convert: function(value, record){
            return record.data.act.image_attachment_urls[0].original;
        }
    }, {
        name: 'image_attachment_urls_thumb',
        convert: function(value, record){
            return record.data.act.image_attachment_urls[0].thumb;
        }
    }, {
        name: 'image_attachment_urls_medium',
        convert: function(value, record){
            return record.data.act.image_attachment_urls[0].medium;
        }
    }, {
        name: 'image_attachment_urls_large',
        convert: function(value, record){
            return record.data.act.image_attachment_urls[0].large;
        }
    }, {
        name: 'homepage',
        convert: function(value, record){
            return record.data.act.homepage;
        }
    }, {
        name: 'description',
        convert: function(value, record){
            return record.data.act.description;
        }
    }]
});