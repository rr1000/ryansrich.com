page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

config[:css_dir] = 'assets/scss'
config[:js_dir] = 'assets/js'
config[:images_dir] = 'assets/img'

activate :external_pipeline,
    name: :gulp,
    command: build? ? 'yarn run production' : 'yarn run gulp',
    source: '.Temp',
    latency: 1

activate :minify_html do |html|
    html.remove_quotes = false
    html.remove_intertag_spaces = true
    html.remove_http_protocol = true
end
