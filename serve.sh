#!/usr/bin/env bash
cd $(dirname $0)
bundler exec jekyll serve --livereload
