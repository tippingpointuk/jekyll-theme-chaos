# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-chaos"
  spec.version       = "0.1.0"
  spec.authors       = ["joe-irving"]
  spec.email         = ["joe@irving.me.uk"]

  spec.summary       = "A day of action website theme, designed for use with Forestry.io and Airtable."
  spec.homepage      = "https://tippingpointuk.github.io/jekyll-chaos"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml|_templates|_plugins)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-liquify", "~> 0.0.2"
  spec.add_runtime_dependency "airtable", "~> 0.0.9"
end
