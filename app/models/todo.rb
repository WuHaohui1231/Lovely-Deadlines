class Todo < ApplicationRecord

    before_create :slugify

    def slugify
        self.slug = title.parameterize
    end
end
