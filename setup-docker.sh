#!/bin/bash
docker-compose build
docker-compose run web sh -c 'bundle install --path vendor/bundle'
docker-compose run web sh -c 'bundle exec rake app:update:bin'
docker-compose up
