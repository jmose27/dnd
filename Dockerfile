FROM ruby:2.5-alpine3.8

RUN apk add --update-cache postgresql-client nodejs \
    libffi-dev readline sqlite build-base postgresql-dev \
    libc-dev linux-headers libxml2-dev libxslt-dev readline-dev gcc libc-dev \
    sqlite-dev \
  && rm -rf /var/cache/apk/*

RUN gem install bundler -v 2.0.1
COPY . /tmp
WORKDIR /tmp
RUN bundle install
RUN mkdir -p /srv/dnd
RUN rm -rf /tmp/*
WORKDIR /srv/dnd
