# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-chaos"
  spec.version       = "0.1.1"
  spec.authors       = ["joe-irving"]
  spec.email         = ["joe@irving.me.uk"]

  spec.summary       = "A jekyll theme created for the Defund Climate Chaos day of action, designed for use with Forestry.io and Airtable."
  spec.homepage      = "https://tippingpointuk.github.io/jekyll-chaos"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_templates|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-liquify", "~> 0.0.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
end
