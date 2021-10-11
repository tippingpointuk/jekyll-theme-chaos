require 'jekyll'

module JsonCollection
  class Generator < ::Jekyll::Generator
    def generate(site)
      collection_name="actions"
      events_collection = Jekyll::Collection.new(site, collection_name)
      site.data["events"]["events"].each_with_index do |event,i|
        slug = event['browser_url'].gsub("https://actionnetwork.org/events/","")
        puts slug
        path = File.join(site.source, "_#{collection_name}", "#{slug}.md")
        doc = Jekyll::Document.new(path, collection: events_collection, site: site)
        event['layout'] = 'an-event'
        event['image'] = event['featured_image_url']
        # puts event['image']

        doc.merge_data!(event)
        doc.content = event["description"]

        events_collection.docs << doc
      end
      site.collections[collection_name] = events_collection
    end
  end
end
