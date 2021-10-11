require 'jekyll'

module StartDateParse
  class Generator < ::Jekyll::Generator
    def generate(site)
      site.collections['trainings'].docs.each do |t|
        # t.merge_data!({ 'date' => t.data['start_date'] })
      end
    end
  end
end
