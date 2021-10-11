module Jekyll
  class Buttonify < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @input = text.split(",")
      @text = input[0]
      @target = input[1]
    end

    def render(context)
      output="<div class=\"Chaos-Flex-Line\">"
      @input.each do |button|
        button_split = button.split("|")

      end
      output += "</div>"
    end
  end
end

Liquid::Template.register_tag('button', Jekyll::Buttonify)
