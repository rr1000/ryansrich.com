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

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, disable_indented_code_blocks: true, strikethrough: true, smartypants: true, with_toc_data: true

activate :syntax
activate :directory_indexes

activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "{title}.html"
  blog.summary_separator = /\(READMORE\)/
  blog.layout = "layouts/layout-blog"
end