Bokeh.Collections.register_models({
  {% for name, impl in custom_models.items() -%}
    "{{ name }}": {{ impl }},
  {%- endfor %}
});
var docs_json = {{ docs_json }};
var docs = {};
for (key in docs_json) {
  docs[key] = Bokeh.Document.from_json(docs_json[key]);
}
var render_items = {{ render_items }};
for (idx in render_items) {
  var item = render_items[idx];
  if ('modelid' in item) {
     add_model_static($('#' + item['elementid']), item['modelid'], docs[item['docid']]);
  } else {
     add_document_static($('#' + item['elementid']), docs[item['docid']]);
  }
}
