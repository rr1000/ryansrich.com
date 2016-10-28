require 'builder'

Time.zone = "UTC"

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true, :tables => true, :with_toc_data => true, :no_intra_emphasis => true
set :url_root, 'http://ryansrich.com'

activate :syntax, :wrap => true
activate :search_engine_sitemap

configure :development do
  activate :directory_indexes
  activate :livereload
end


configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :directory_indexes
end

page "/sitemap.xml", :layout => false
