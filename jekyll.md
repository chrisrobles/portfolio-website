# Github Pages

1. Create repository
2. Name it `username.github.io`
3. Click `Settings`
4. Code and automation -> Build and deployment -> Branch dropdown -> select publishing source

# Jekyll

Page
- standalone content w/o date
- ex. about.md `SITE-URL/about`

Post
- content w/ date
- put in `_posts` directory

## Templates

Can use pages and posts as a template for creating new pages

## Change title and description

Edit `_config.yaml` front matter
```yaml
theme: jekyll-theme-minimal
title: Octocat's homepage
description: Bookmark this to keep an eye on my project update
```

Edit page/post [front matter](https://jekyllrb.com/docs/front-matter/)
```yaml
---
title: This page's title
---
```

## Create a page

1. Create `PAGE-NAME.md` in root
2. Add frontmatter
    ```yaml
    ---
    layout: page
    title: "PAGE-TITLE"
    permalink: /URL-PATH
    ---
    ```
3. Add content of the page

## Create a post

1. Go to `_posts` directory
2. Create post file in the format: `YYYY-MM-DD-NAME-OF-POST.md`
3. Add yaml frontmatter
    ```yaml
    layout: post
    title: "POST-TITLE"
    date: YYYY-MM-DD hh:mm:ss -0000
    categories: CATEGORY-1 CATEGORY-2
    ```
4. Add content of the post
5. Load page `https://octocat.github.io/YYYY/MM/DD/TITLE.htm`

## Setup Local Server

1. Install [Jekyll](https://jekyllrb.com/docs/installation/)
2. Clone server onto local computer
3. Go into project directory
4. Install [Bundler](https://bundler.io/)
5. Specify in a gemfile in project's root
    ```terminal
    source 'https://rubygems.org'
    gem "jekyll"
    gem "webrick"
    gem "jekyll-sitemap", "~> 1.4.0"
    gem "jekyll-gist", "~> 1.5.0"
    gem 'jekyll-mentions', "~> 1.6.0"
    gem 'jekyll-feed', "~> 0.15.1"
    gem "github-pages", "~> 228"
    gem "jekyll-avatar", "~> 0.7.0"
    gem 'nokogiri'
    gem 'rack', '~> 2.2.4'
    gem 'rspec'
    ```
6. `bundle install`
7. Start server
   - `bundle exec jekyll serve`
8. Make sure `gem 'github-pages'` is up to date
   - `bundle update github-pages`
