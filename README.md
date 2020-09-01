# README

This is a simple sample Rails 6.0 + React project based on the tutorial
at:

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend.

There are a few changes from the tutorial:

1. I'm using standard Rails routes for the actions, which simplifies the config/routes.rb file.
2. The recipe components are in a subdirectory.
3. The form is extracted into a separate component and is used for both creating and editing.
4. The controller uses standard Rails idioms.
