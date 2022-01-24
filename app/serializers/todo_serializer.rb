class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :tag, :deadline, :completed, :slug
end
