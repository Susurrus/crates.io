import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    downloads: DS.attr('number'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date'),
    max_version: DS.attr('string'),

    description: DS.attr('string'),
    homepage: DS.attr('string'),
    wiki: DS.attr('string'),
    mailing_list: DS.attr('string'),
    issues: DS.attr('string'),
    documentation: DS.attr('string'),

    versions: DS.hasMany('versions', { async: true }),
    dependencies: DS.hasMany('dependencies', { async: true }),
});
