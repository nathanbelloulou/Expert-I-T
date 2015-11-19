


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>angular-bootstrap-colorpicker/bootstrap-colorpicker-module.js at master · buberdds/angular-bootstrap-colorpicker</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="buberdds/angular-bootstrap-colorpicker" name="twitter:title" /><meta content="angular-bootstrap-colorpicker - Native AngularJS colorpicker directive. No dependency on jQuery or jQuery plugin is required." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/891392?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/891392?v=3&amp;s=400" property="og:image" /><meta content="buberdds/angular-bootstrap-colorpicker" property="og:title" /><meta content="https://github.com/buberdds/angular-bootstrap-colorpicker" property="og:url" /><meta content="angular-bootstrap-colorpicker - Native AngularJS colorpicker directive. No dependency on jQuery or jQuery plugin is required." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/ODIxODIxODpmMDg3YzA0ZTA0MzVmODNiMzhkMzFmZTQzYzA1ZDc5ZTo0MDQxYjE3NDMzYjFjMjI2MjUwNDlmOTkzNDNjZTdjMzVjMDE5ZTYwY2IxN2EwYzFjN2I2MzIyOGMxN2Q2Yzhj--2467ce5ffef1e74c0d3546143272d0a977e8d9fc">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5D19BB65:496A:2A2567:55DE2485" name="octolytics-dimension-request_id" /><meta content="8218218" name="octolytics-actor-id" /><meta content="nathanbelloulou" name="octolytics-actor-login" /><meta content="de04d78ff662bbd11d2682b299f3181855fbbfe7f05ac5f52f7e2edc91741ce7" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="nathanbelloulou">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="FmK0vnjL8iEQR4fRz63D96eZRyKpW7yOESomg5waPk6MZlgE4sAdJsJiQX+5I/LNpItL1NE4XSJyTb0HpzrQrg==" name="csrf-token" />
    <meta content="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-7495fc30c25b4614e5b716b1b1c299552a734828f0861876cab9ea0760d9b933.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-de9dd93e7c36ce2877b3d2d4bcf214eeb57f2f1b8c541702c1cfcb3836285a82.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="3d193688b1f4b0ddcc5fb23f19a537f0">

      
  <meta name="description" content="angular-bootstrap-colorpicker - Native AngularJS colorpicker directive. No dependency on jQuery or jQuery plugin is required.">
  <meta name="go-import" content="github.com/buberdds/angular-bootstrap-colorpicker git https://github.com/buberdds/angular-bootstrap-colorpicker.git">

  <meta content="891392" name="octolytics-dimension-user_id" /><meta content="buberdds" name="octolytics-dimension-user_login" /><meta content="9713816" name="octolytics-dimension-repository_id" /><meta content="buberdds/angular-bootstrap-colorpicker" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="9713816" name="octolytics-dimension-repository_network_root_id" /><meta content="buberdds/angular-bootstrap-colorpicker" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/buberdds/angular-bootstrap-colorpicker/commits/master.atom" rel="alternate" title="Recent Commits to angular-bootstrap-colorpicker:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/buberdds/angular-bootstrap-colorpicker/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/buberdds/angular-bootstrap-colorpicker/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:nathanbelloulou"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="buberdds/angular-bootstrap-colorpicker">This repository</span>
  </div>
    <a class="dropdown-item" href="/buberdds/angular-bootstrap-colorpicker/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/nathanbelloulou"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@nathanbelloulou" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/8218218?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">nathanbelloulou</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/nathanbelloulou" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OUE/bOrWlBv/MDmAOPLTn91QzVDajqbr15VmHtP+rbi8cpcgK9rLA4ekqhl+oFmZh+BzhOiVcvcgv0N4ssR3TQ==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        
<div class="flash-global js-notice flash-warn">
<div class="container">
      <h2>
        You don’t have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
      </h2>
      <p>
        Email verification helps our support team verify ownership if you lose account access
        and allows you to receive all the notifications you ask for.
      </p>

















</div>
</div>


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4pXCanoIgcHhWCzce4ai0y3M8MfyIOM7/OwcryIZZiMRaBRK8ObV0iiO3tHSgbWxzGKUZfWa247sH1F5E2f6xw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="9713816" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/buberdds/angular-bootstrap-colorpicker/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/buberdds/angular-bootstrap-colorpicker/watchers">
          15
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/buberdds/angular-bootstrap-colorpicker/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4VX6dCSC2iNfBZlQsnbsnN7ZPnJ7rNtc6O/AqYh9WOFMuRqTviE97IGnK6n6KigqFP9c8dSzATEK2dJSdo83vQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar buberdds/angular-bootstrap-colorpicker"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/buberdds/angular-bootstrap-colorpicker/stargazers">
          248
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/buberdds/angular-bootstrap-colorpicker/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IUQn9SWNYQcLk02kqAW55t7VPuw24MH8f26wVrL9h74DzTVYRfuL35YwPrqocgtli+08NSdbgh3uWQVUSjdhEg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star buberdds/angular-bootstrap-colorpicker"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/buberdds/angular-bootstrap-colorpicker/stargazers">
          248
        </a>
</form>  </div>

  </li>

        <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/buberdds/angular-bootstrap-colorpicker/fork" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="q7DHx+Pw4hfU0xou/QO1tayAoE6CscsgrWDngTX00CTpoDOCDkN8oo/W2QF/EaZzs1Mz6ZvONC0pR//iixKS/w==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of buberdds/angular-bootstrap-colorpicker to your account"
                aria-label="Fork your own copy of buberdds/angular-bootstrap-colorpicker to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/buberdds/angular-bootstrap-colorpicker/network" class="social-count">151</a>
</form>        </li>

</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/buberdds" class="url fn" itemprop="url" rel="author"><span itemprop="title">buberdds</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/buberdds/angular-bootstrap-colorpicker" data-pjax="#js-repo-pjax-container">angular-bootstrap-colorpicker</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>
        
        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/buberdds/angular-bootstrap-colorpicker/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/buberdds/angular-bootstrap-colorpicker" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /buberdds/angular-bootstrap-colorpicker">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/buberdds/angular-bootstrap-colorpicker/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /buberdds/angular-bootstrap-colorpicker/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/buberdds/angular-bootstrap-colorpicker/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /buberdds/angular-bootstrap-colorpicker/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/buberdds/angular-bootstrap-colorpicker/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /buberdds/angular-bootstrap-colorpicker/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/buberdds/angular-bootstrap-colorpicker/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /buberdds/angular-bootstrap-colorpicker/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/buberdds/angular-bootstrap-colorpicker/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /buberdds/angular-bootstrap-colorpicker/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/buberdds/angular-bootstrap-colorpicker.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:buberdds/angular-bootstrap-colorpicker.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/buberdds/angular-bootstrap-colorpicker" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



  <div class="clone-options">You can clone with
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EzaJKE2TCM4DuAYRK9CFwUI0biHZ7eKrCKPqQ/qtkCoVkmaV0WMnKVppUkZ787XACOHcq37MtoOqzkMzjRevpw==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="k11BSedIsBwXnf7fiBIwLkhE8JK21CL3hwT+bZoW1SywBog1ychNqU4y3M13klOWgI7bWTM2L18mgI9mnoLnaw==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mCqkm6zPy1GJyt2qLsKQ35FjFDxvR6U+ZTsn3xGZaZtKpmWgHnpGyzeeVKacywtIWhQzQrkKYle+n0EUezrq+g==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
    <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
      <span class="octicon octicon-question"></span>
    </a>
  </div>
    <a href="github-windows://openRepo/https://github.com/buberdds/angular-bootstrap-colorpicker" class="btn btn-sm sidebar-button" title="Save buberdds/angular-bootstrap-colorpicker to your computer and use it in GitHub Desktop." aria-label="Save buberdds/angular-bootstrap-colorpicker to your computer and use it in GitHub Desktop.">
      <span class="octicon octicon-desktop-download"></span>
      Clone in Desktop
    </a>

              <a href="/buberdds/angular-bootstrap-colorpicker/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of buberdds/angular-bootstrap-colorpicker as a zip file"
                 title="Download the contents of buberdds/angular-bootstrap-colorpicker as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/buberdds/angular-bootstrap-colorpicker/blob/1afcfdbff168ff0c86b20c5ab892bb18514bf226/js/bootstrap-colorpicker-module.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:dce07c6e900875fb5b95397d78d04c7e -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/buberdds/angular-bootstrap-colorpicker/blob/1.0.0/js/bootstrap-colorpicker-module.js"
               data-name="1.0.0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/buberdds/angular-bootstrap-colorpicker/blob/2.0/js/bootstrap-colorpicker-module.js"
               data-name="2.0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.0">
                2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/buberdds/angular-bootstrap-colorpicker/blob/bs-modal/js/bootstrap-colorpicker-module.js"
               data-name="bs-modal"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bs-modal">
                bs-modal
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/buberdds/angular-bootstrap-colorpicker/blob/master/js/bootstrap-colorpicker-module.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/buberdds/angular-bootstrap-colorpicker/blob/resize/js/bootstrap-colorpicker-module.js"
               data-name="resize"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="resize">
                resize
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.18/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.18">v3.0.18</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.17/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.17">v3.0.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.16/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.16">v3.0.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.15/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.15">v3.0.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.14/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.14">v3.0.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.13/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.13">v3.0.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.11/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.11">v3.0.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.10/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.10">v3.0.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.9/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.9">v3.0.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.8/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.8">v3.0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.7/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.7">v3.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.6/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.6">v3.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.5/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.5">v3.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.4/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.4">v3.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.3/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.3">v3.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.2/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.2">v3.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.1/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.1">v3.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v3.0.0/js/bootstrap-colorpicker-module.js"
                 data-name="v3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.0">v3.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v2.0.4/js/bootstrap-colorpicker-module.js"
                 data-name="v2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.4">v2.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v2.0.3/js/bootstrap-colorpicker-module.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v2.0.2/js/bootstrap-colorpicker-module.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v2.0.1/js/bootstrap-colorpicker-module.js"
                 data-name="v2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.1">v2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v2.0.0/js/bootstrap-colorpicker-module.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/v1.0.0/js/bootstrap-colorpicker-module.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/push/js/bootstrap-colorpicker-module.js"
                 data-name="push"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="push">push</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/buberdds/angular-bootstrap-colorpicker/tree/3.0.18/js/bootstrap-colorpicker-module.js"
                 data-name="3.0.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.18">3.0.18</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/buberdds/angular-bootstrap-colorpicker/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/buberdds/angular-bootstrap-colorpicker" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">angular-bootstrap-colorpicker</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/buberdds/angular-bootstrap-colorpicker/tree/master/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">bootstrap-colorpicker-module.js</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@buberdds" class="avatar" height="24" src="https://avatars0.githubusercontent.com/u/891392?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/buberdds" rel="author">buberdds</a></span>
        <time datetime="2015-05-18T20:00:06Z" is="relative-time">May 18, 2015</time>
        <div class="commit-title">
            <a href="/buberdds/angular-bootstrap-colorpicker/commit/3f737b44fb5315d0f8ba216c2888cce2ef2cae9d" class="message" data-pjax="true" title="Issue #93">Issue</a> <a href="https://github.com/buberdds/angular-bootstrap-colorpicker/issues/93" class="issue-link" title="Colorpicker doesn't work in Firefox">#93</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>16</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="buberdds" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=buberdds"><img alt="@buberdds" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/891392?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vedmack" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=vedmack"><img alt="@vedmack" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1679967?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lutangar" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=lutangar"><img alt="@lutangar" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/568769?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jakubsikora" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=jakubsikora"><img alt="@jakubsikora" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3074083?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="steve-obrien" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=steve-obrien"><img alt="@steve-obrien" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/106348?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joscha" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=joscha"><img alt="@joscha" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/188038?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mattlewis92" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=mattlewis92"><img alt="@mattlewis92" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/6425649?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="WilliamRandol" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=WilliamRandol"><img alt="@WilliamRandol" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2567079?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lcanet" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=lcanet"><img alt="@lcanet" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1287953?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="foreachlt" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=foreachlt"><img alt="@foreachlt" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1433383?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="robjames" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=robjames"><img alt="@robjames" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3410264?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sanxac" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=sanxac"><img alt="@sanxac" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/55023?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ste2425" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=ste2425"><img alt="@ste2425" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/8177767?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="00Davo" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=00Davo"><img alt="@00Davo" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/610876?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gauravguptain" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=gauravguptain"><img alt="@gauravguptain" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/88623?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="4kochi" href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js?author=4kochi"><img alt="@4kochi" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1742426?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@buberdds" height="24" src="https://avatars0.githubusercontent.com/u/891392?v=3&amp;s=48" width="24" />
            <a href="/buberdds">buberdds</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vedmack" height="24" src="https://avatars1.githubusercontent.com/u/1679967?v=3&amp;s=48" width="24" />
            <a href="/vedmack">vedmack</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lutangar" height="24" src="https://avatars0.githubusercontent.com/u/568769?v=3&amp;s=48" width="24" />
            <a href="/lutangar">lutangar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jakubsikora" height="24" src="https://avatars3.githubusercontent.com/u/3074083?v=3&amp;s=48" width="24" />
            <a href="/jakubsikora">jakubsikora</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@steve-obrien" height="24" src="https://avatars1.githubusercontent.com/u/106348?v=3&amp;s=48" width="24" />
            <a href="/steve-obrien">steve-obrien</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@joscha" height="24" src="https://avatars0.githubusercontent.com/u/188038?v=3&amp;s=48" width="24" />
            <a href="/joscha">joscha</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mattlewis92" height="24" src="https://avatars0.githubusercontent.com/u/6425649?v=3&amp;s=48" width="24" />
            <a href="/mattlewis92">mattlewis92</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@WilliamRandol" height="24" src="https://avatars2.githubusercontent.com/u/2567079?v=3&amp;s=48" width="24" />
            <a href="/WilliamRandol">WilliamRandol</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lcanet" height="24" src="https://avatars3.githubusercontent.com/u/1287953?v=3&amp;s=48" width="24" />
            <a href="/lcanet">lcanet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@foreachlt" height="24" src="https://avatars0.githubusercontent.com/u/1433383?v=3&amp;s=48" width="24" />
            <a href="/foreachlt">foreachlt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@robjames" height="24" src="https://avatars0.githubusercontent.com/u/3410264?v=3&amp;s=48" width="24" />
            <a href="/robjames">robjames</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sanxac" height="24" src="https://avatars0.githubusercontent.com/u/55023?v=3&amp;s=48" width="24" />
            <a href="/sanxac">sanxac</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ste2425" height="24" src="https://avatars3.githubusercontent.com/u/8177767?v=3&amp;s=48" width="24" />
            <a href="/ste2425">ste2425</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@00Davo" height="24" src="https://avatars0.githubusercontent.com/u/610876?v=3&amp;s=48" width="24" />
            <a href="/00Davo">00Davo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gauravguptain" height="24" src="https://avatars1.githubusercontent.com/u/88623?v=3&amp;s=48" width="24" />
            <a href="/gauravguptain">gauravguptain</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@4kochi" height="24" src="https://avatars3.githubusercontent.com/u/1742426?v=3&amp;s=48" width="24" />
            <a href="/4kochi">4kochi</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/buberdds/angular-bootstrap-colorpicker/raw/master/js/bootstrap-colorpicker-module.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/buberdds/angular-bootstrap-colorpicker/blame/master/js/bootstrap-colorpicker-module.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/buberdds/angular-bootstrap-colorpicker/commits/master/js/bootstrap-colorpicker-module.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/buberdds/angular-bootstrap-colorpicker?branch=master&amp;filepath=js%2Fbootstrap-colorpicker-module.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/buberdds/angular-bootstrap-colorpicker/edit/master/js/bootstrap-colorpicker-module.js" class="inline-form" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="TJASD8p9KhcV04RFZC99vPPL+TeUm+jx7N6EcfRkMAGz3GKMEf4LkTwCfN3ZGZynB5vdWoH2ZBPlGrz66d51gg==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/buberdds/angular-bootstrap-colorpicker/delete/master/js/bootstrap-colorpicker-module.js" class="inline-form" data-form-nonce="5cf4d10bc2005f70f5be0ab7120c155df3a15b52" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6lpLTiRvMNqEcppzE02CAIPkVCZj68HGCbKaXmVzAdAmxvmuNgfGBjgKwnOthmYzvg+eh8NgtBKvqaSa3/o8gQ==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        575 lines (524 sloc)
        <span class="file-info-divider"></span>
      19.707 kB
    </div>
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">angular.<span class="pl-c1">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker.module<span class="pl-pds">&#39;</span></span>, [])</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">    .<span class="pl-c1">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Helper<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">closestSlider</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> matchesSelector <span class="pl-k">=</span> elem.<span class="pl-c1">matches</span> <span class="pl-k">||</span> elem.<span class="pl-c1">webkitMatchesSelector</span> <span class="pl-k">||</span> elem.<span class="pl-c1">mozMatchesSelector</span> <span class="pl-k">||</span> elem.<span class="pl-c1">msMatchesSelector</span>;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (matchesSelector.<span class="pl-c1">bind</span>(elem)(<span class="pl-s"><span class="pl-pds">&#39;</span>I<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> elem.<span class="pl-c1">parentNode</span>;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> elem;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getOffset</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">elem</span>, <span class="pl-smi">fixedPosition</span>) {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">              x <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">              y <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">              scrollX <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">              scrollY <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">while</span> (elem <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(elem.<span class="pl-c1">offsetLeft</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(elem.<span class="pl-c1">offsetTop</span>)) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">            x <span class="pl-k">+=</span> elem.<span class="pl-c1">offsetLeft</span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">            y <span class="pl-k">+=</span> elem.<span class="pl-c1">offsetTop</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>fixedPosition <span class="pl-k">&amp;&amp;</span> elem.<span class="pl-c1">tagName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>BODY<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">              scrollX <span class="pl-k">+=</span> <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-c1">scrollLeft</span> <span class="pl-k">||</span> elem.<span class="pl-c1">scrollLeft</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">              scrollY <span class="pl-k">+=</span> <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-c1">scrollTop</span> <span class="pl-k">||</span> elem.<span class="pl-c1">scrollTop</span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">              scrollX <span class="pl-k">+=</span> elem.<span class="pl-c1">scrollLeft</span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">              scrollY <span class="pl-k">+=</span> elem.<span class="pl-c1">scrollTop</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">            elem <span class="pl-k">=</span> elem.<span class="pl-c1">offsetParent</span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">            top<span class="pl-k">:</span> y,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">            left<span class="pl-k">:</span> x,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">            scrollX<span class="pl-k">:</span> scrollX,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">            scrollY<span class="pl-k">:</span> scrollY</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// a set of RE&#39;s that can match strings and generate color tuples. https://github.com/jquery/jquery-color/</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        stringParsers<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">          {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">            re<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>rgba<span class="pl-k">?</span><span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,3}</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,3}</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,3}</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span>(?:,<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span>)<span class="pl-k">?</span><span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">parse</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">execResult</span>) {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> [</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">                execResult[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">                execResult[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">                execResult[<span class="pl-c1">3</span>],</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">                execResult[<span class="pl-c1">4</span>]</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">              ];</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">          {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">            re<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>rgba<span class="pl-k">?</span><span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-cce">\%</span><span class="pl-c1">\s</span><span class="pl-k">*</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-cce">\%</span><span class="pl-c1">\s</span><span class="pl-k">*</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-cce">\%</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(?:,<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span>)<span class="pl-k">?</span><span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">parse</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">execResult</span>) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> [</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">2.55</span> <span class="pl-k">*</span> execResult[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">2.55</span> <span class="pl-k">*</span> execResult[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">2.55</span> <span class="pl-k">*</span> execResult[<span class="pl-c1">3</span>],</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">                execResult[<span class="pl-c1">4</span>]</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">              ];</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">          {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            re<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>#(<span class="pl-c1">[<span class="pl-c1">a-fA-F0-9</span>]</span><span class="pl-k">{2}</span>)(<span class="pl-c1">[<span class="pl-c1">a-fA-F0-9</span>]</span><span class="pl-k">{2}</span>)(<span class="pl-c1">[<span class="pl-c1">a-fA-F0-9</span>]</span><span class="pl-k">{2}</span>)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">parse</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">execResult</span>) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> [</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">parseInt</span>(execResult[<span class="pl-c1">1</span>], <span class="pl-c1">16</span>),</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">parseInt</span>(execResult[<span class="pl-c1">2</span>], <span class="pl-c1">16</span>),</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">parseInt</span>(execResult[<span class="pl-c1">3</span>], <span class="pl-c1">16</span>)</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">              ];</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">          {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">            re<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>#(<span class="pl-c1">[<span class="pl-c1">a-fA-F0-9</span>]</span>)(<span class="pl-c1">[<span class="pl-c1">a-fA-F0-9</span>]</span>)(<span class="pl-c1">[<span class="pl-c1">a-fA-F0-9</span>]</span>)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">parse</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">execResult</span>) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> [</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">parseInt</span>(execResult[<span class="pl-c1">1</span>] <span class="pl-k">+</span> execResult[<span class="pl-c1">1</span>], <span class="pl-c1">16</span>),</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">parseInt</span>(execResult[<span class="pl-c1">2</span>] <span class="pl-k">+</span> execResult[<span class="pl-c1">2</span>], <span class="pl-c1">16</span>),</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">parseInt</span>(execResult[<span class="pl-c1">3</span>] <span class="pl-k">+</span> execResult[<span class="pl-c1">3</span>], <span class="pl-c1">16</span>)</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">              ];</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        ]</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    .<span class="pl-c1">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Color<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>Helper<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">Helper</span>) {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        value<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">          h<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">          s<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">          b<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">          a<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// translate a format from Color object to a string</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">rgb</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> rgb <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">toRGB</span>();</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">r</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">g</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">b</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">rgba</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> rgb <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">toRGB</span>();</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">r</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">g</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">b</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rgb.<span class="pl-c1">a</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">hex</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>  <span class="pl-v">this</span>.<span class="pl-c1">toHex</span>();</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// HSBtoRGB from RaphaelJS</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RGBtoHSB</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">r</span>, <span class="pl-smi">g</span>, <span class="pl-smi">b</span>, <span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">          r <span class="pl-k">/=</span> <span class="pl-c1">255</span>;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">          g <span class="pl-k">/=</span> <span class="pl-c1">255</span>;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">          b <span class="pl-k">/=</span> <span class="pl-c1">255</span>;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> H, S, V, C;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">          V <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(r, g, b);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">          C <span class="pl-k">=</span> V <span class="pl-k">-</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(r, g, b);</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">          H <span class="pl-k">=</span> (C <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> null <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">              V <span class="pl-k">===</span> r <span class="pl-k">?</span> (g <span class="pl-k">-</span> b) / C <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">                  V <span class="pl-k">===</span> g <span class="pl-k">?</span> (b <span class="pl-k">-</span> r) / C <span class="pl-k">+</span> <span class="pl-c1">2</span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">                      (r <span class="pl-k">-</span> g) / C <span class="pl-k">+</span> <span class="pl-c1">4</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">              );</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">          H <span class="pl-k">=</span> ((H <span class="pl-k">+</span> <span class="pl-c1">360</span>) <span class="pl-k">%</span> <span class="pl-c1">6</span>) <span class="pl-k">*</span> <span class="pl-c1">60</span> / <span class="pl-c1">360</span>;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">          S <span class="pl-k">=</span> C <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> C / V;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> {h<span class="pl-k">:</span> H <span class="pl-k">||</span> <span class="pl-c1">1</span>, s<span class="pl-k">:</span> S, b<span class="pl-k">:</span> V, a<span class="pl-k">:</span> a <span class="pl-k">||</span> <span class="pl-c1">1</span>};</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//parse a string to HSB</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setColor</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">          val <span class="pl-k">=</span> val.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> Helper.<span class="pl-c1">stringParsers</span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (Helper.<span class="pl-c1">stringParsers</span>.<span class="pl-c1">hasOwnProperty</span>(key)) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> parser <span class="pl-k">=</span> Helper.<span class="pl-c1">stringParsers</span>[key];</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> match <span class="pl-k">=</span> parser.<span class="pl-c1">re</span>.<span class="pl-c1">exec</span>(val),</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                  values <span class="pl-k">=</span> match <span class="pl-k">&amp;&amp;</span> parser.<span class="pl-c1">parse</span>(match);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (values) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">                <span class="pl-v">this</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">RGBtoHSB</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, values);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setHue</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">h</span>) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">h</span> <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> h;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setSaturation</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">s</span> <span class="pl-k">=</span> s;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setLightness</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">b</span> <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> b;</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setAlpha</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">a</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>((<span class="pl-c1">1</span> <span class="pl-k">-</span> a) <span class="pl-k">*</span> <span class="pl-c1">100</span>, <span class="pl-c1">10</span>) / <span class="pl-c1">100</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// HSBtoRGB from RaphaelJS</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// https://github.com/DmitryBaranovskiy/raphael/</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">toRGB</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">h</span>, <span class="pl-smi">s</span>, <span class="pl-smi">b</span>, <span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>h) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">            h <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">h</span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">            s <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">s</span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">            b <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">b</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">          h <span class="pl-k">*=</span> <span class="pl-c1">360</span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> R, G, B, X, C;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">          h <span class="pl-k">=</span> (h <span class="pl-k">%</span> <span class="pl-c1">360</span>) / <span class="pl-c1">60</span>;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">          C <span class="pl-k">=</span> b <span class="pl-k">*</span> s;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">          X <span class="pl-k">=</span> C <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>(h <span class="pl-k">%</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">          R <span class="pl-k">=</span> G <span class="pl-k">=</span> B <span class="pl-k">=</span> b <span class="pl-k">-</span> C;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">          h <span class="pl-k">=</span> <span class="pl-k">~~</span>h;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">          R <span class="pl-k">+=</span> [C, X, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, X, C][h];</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">          G <span class="pl-k">+=</span> [X, C, C, X, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>][h];</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">          B <span class="pl-k">+=</span> [<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, X, C, C, X][h];</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">            r<span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(R <span class="pl-k">*</span> <span class="pl-c1">255</span>),</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">            g<span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(G <span class="pl-k">*</span> <span class="pl-c1">255</span>),</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">            b<span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(B <span class="pl-k">*</span> <span class="pl-c1">255</span>),</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">            a<span class="pl-k">:</span> a <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-c1">value</span>.<span class="pl-c1">a</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">toHex</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">h</span>, <span class="pl-smi">s</span>, <span class="pl-smi">b</span>, <span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> rgb <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">toRGB</span>(h, s, b, a);</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ((<span class="pl-c1">1</span> <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">24</span>) | (<span class="pl-c1">parseInt</span>(rgb.<span class="pl-c1">r</span>, <span class="pl-c1">10</span>) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) | (<span class="pl-c1">parseInt</span>(rgb.<span class="pl-c1">g</span>, <span class="pl-c1">10</span>) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">8</span>) | <span class="pl-c1">parseInt</span>(rgb.<span class="pl-c1">b</span>, <span class="pl-c1">10</span>)).<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>).<span class="pl-c1">substr</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">    }])</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    .<span class="pl-c1">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Slider<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>Helper<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">Helper</span>) {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">          slider <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">            maxLeft<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">            maxTop<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">            callLeft<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">            callTop<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">            knob<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">              top<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">              left<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">          pointer <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getSlider</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> slider;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getLeftPosition</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(slider.<span class="pl-c1">maxLeft</span>, slider.<span class="pl-c1">left</span> <span class="pl-k">+</span> ((<span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">||</span> pointer.<span class="pl-c1">left</span>) <span class="pl-k">-</span> pointer.<span class="pl-c1">left</span>)));</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getTopPosition</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(slider.<span class="pl-c1">maxTop</span>, slider.<span class="pl-c1">top</span> <span class="pl-k">+</span> ((<span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">||</span> pointer.<span class="pl-c1">top</span>) <span class="pl-k">-</span> pointer.<span class="pl-c1">top</span>)));</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setSlider</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">event</span>, <span class="pl-smi">fixedPosition</span>) {</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">            target <span class="pl-k">=</span> Helper.<span class="pl-c1">closestSlider</span>(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>),</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">            targetOffset <span class="pl-k">=</span> Helper.<span class="pl-c1">getOffset</span>(target, fixedPosition),</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">            rect <span class="pl-k">=</span> target.<span class="pl-c1">getBoundingClientRect</span>(),</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">            offsetX <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">clientX</span> <span class="pl-k">-</span> rect.<span class="pl-c1">left</span>,</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">            offsetY <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">clientY</span> <span class="pl-k">-</span> rect.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">          slider.<span class="pl-c1">knob</span> <span class="pl-k">=</span> target.<span class="pl-c1">children</span>[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">          slider.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> targetOffset.<span class="pl-c1">left</span> <span class="pl-k">-</span> <span class="pl-c1">window</span>.<span class="pl-c1">pageXOffset</span> <span class="pl-k">+</span> targetOffset.<span class="pl-c1">scrollX</span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">          slider.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">-</span> targetOffset.<span class="pl-c1">top</span> <span class="pl-k">-</span> <span class="pl-c1">window</span>.<span class="pl-c1">pageYOffset</span> <span class="pl-k">+</span> targetOffset.<span class="pl-c1">scrollY</span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">          pointer <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">            left<span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> (offsetX <span class="pl-k">-</span> slider.<span class="pl-c1">left</span>),</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            top<span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">-</span> (offsetY <span class="pl-k">-</span> slider.<span class="pl-c1">top</span>)</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setSaturation</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">fixedPosition</span>) {</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">          slider <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">            maxLeft<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            maxTop<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">            callLeft<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>setSaturation<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">            callTop<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>setLightness<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">setSlider</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setHue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">fixedPosition</span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">          slider <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">            maxLeft<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            maxTop<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">            callLeft<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">            callTop<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>setHue<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">setSlider</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setAlpha</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">fixedPosition</span>) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">          slider <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">            maxLeft<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">            maxTop<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">            callLeft<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">            callTop<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>setAlpha<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>.<span class="pl-c1">setSlider</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setKnob</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">top</span>, <span class="pl-smi">left</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">          slider.<span class="pl-c1">knob</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> top <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">          slider.<span class="pl-c1">knob</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> left <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">    }])</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">    .<span class="pl-c1">directive</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$document<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$compile<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Color<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Slider<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Helper<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">$document</span>, <span class="pl-smi">$compile</span>, <span class="pl-smi">Color</span>, <span class="pl-smi">Slider</span>, <span class="pl-smi">Helper</span>) {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        require<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?ngModel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$scope</span>, <span class="pl-smi">elem</span>, <span class="pl-smi">attrs</span>, <span class="pl-smi">ngModel</span>) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">              thisFormat <span class="pl-k">=</span> attrs.<span class="pl-c1">colorpicker</span> <span class="pl-k">?</span> attrs.<span class="pl-c1">colorpicker</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hex<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">              position <span class="pl-k">=</span> angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerPosition</span>) <span class="pl-k">?</span> attrs.<span class="pl-c1">colorpickerPosition</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">              inline <span class="pl-k">=</span> angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerInline</span>) <span class="pl-k">?</span> attrs.<span class="pl-c1">colorpickerInline</span> <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">              fixedPosition <span class="pl-k">=</span> angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerFixedPosition</span>) <span class="pl-k">?</span> attrs.<span class="pl-c1">colorpickerFixedPosition</span> <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">              target <span class="pl-k">=</span> angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerParent</span>) <span class="pl-k">?</span> elem.<span class="pl-c1">parent</span>() <span class="pl-k">:</span> angular.<span class="pl-c1">element</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>),</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">              withInput <span class="pl-k">=</span> angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerWithInput</span>) <span class="pl-k">?</span> attrs.<span class="pl-c1">colorpickerWithInput</span> <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">              inputTemplate <span class="pl-k">=</span> withInput <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; name=&quot;colorpicker-input&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">              closeButton <span class="pl-k">=</span> <span class="pl-k">!</span>inline <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;button type=&quot;button&quot; class=&quot;close close-colorpicker&quot;&gt;&amp;times;&lt;/button&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">              template <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;colorpicker dropdown&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dropdown-menu&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;colorpicker-saturation&gt;&lt;i&gt;&lt;/i&gt;&lt;/colorpicker-saturation&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;colorpicker-hue&gt;&lt;i&gt;&lt;/i&gt;&lt;/colorpicker-hue&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;colorpicker-alpha&gt;&lt;i&gt;&lt;/i&gt;&lt;/colorpicker-alpha&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;colorpicker-preview&gt;&lt;/colorpicker-preview&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">                      inputTemplate <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                      closeButton <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">              colorpickerTemplate <span class="pl-k">=</span> angular.<span class="pl-c1">element</span>(template),</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">              pickerColor <span class="pl-k">=</span> Color,</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">              sliderAlpha,</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">              sliderHue <span class="pl-k">=</span> colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-hue<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">              sliderSaturation <span class="pl-k">=</span> colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-saturation<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">              colorpickerPreview <span class="pl-k">=</span> colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-preview<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">              pickerColorPointers <span class="pl-k">=</span> colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">          $<span class="pl-c1">compile</span>(colorpickerTemplate)($scope);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (withInput) {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> pickerColorInput <span class="pl-k">=</span> colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">            pickerColorInput</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">event</span>.<span class="pl-c1">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">                })</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> newColor <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">                  elem.<span class="pl-c1">val</span>(newColor);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span>(ngModel) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">                    $scope.$<span class="pl-c1">apply</span>(ngModel.$<span class="pl-c1">setViewValue</span>(newColor));</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">event</span>.<span class="pl-c1">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">event</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">            elem.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">              pickerColorInput.<span class="pl-c1">val</span>(elem.<span class="pl-c1">val</span>());</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">bindMouseEvents</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">            $document.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousemove<span class="pl-pds">&#39;</span></span>, mousemove);</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">            $document.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span>, mouseup);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (thisFormat <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">            colorpickerTemplate.<span class="pl-c1">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alpha<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">            sliderAlpha <span class="pl-k">=</span> colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-alpha<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            sliderAlpha</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">                  Slider.<span class="pl-c1">setAlpha</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">mousemove</span>(<span class="pl-c1">event</span>);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">                })</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">                  Slider.<span class="pl-c1">setAlpha</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">bindMouseEvents</span>();</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">                })</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">emitEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-selected-alpha<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">          sliderHue</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">                Slider.<span class="pl-c1">setHue</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">mousemove</span>(<span class="pl-c1">event</span>);</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">              })</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">                Slider.<span class="pl-c1">setHue</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">bindMouseEvents</span>();</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">              })</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">emitEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-selected-hue<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">          sliderSaturation</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">                Slider.<span class="pl-c1">setSaturation</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">mousemove</span>(<span class="pl-c1">event</span>);</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerCloseOnSelect</span>)) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c1">hideColorpickerTemplate</span>();</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">              })</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">                Slider.<span class="pl-c1">setSaturation</span>(<span class="pl-c1">event</span>, fixedPosition);</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">bindMouseEvents</span>();</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">              })</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">emitEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-selected-saturation<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (fixedPosition) {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">            colorpickerTemplate.<span class="pl-c1">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-fixed-position<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">          colorpickerTemplate.<span class="pl-c1">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-position-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> position);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (inline <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>true<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            colorpickerTemplate.<span class="pl-c1">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-inline<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">          target.<span class="pl-c1">append</span>(colorpickerTemplate);</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(ngModel) {</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">ngModel</span>.<span class="pl-en">$render</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">              elem.<span class="pl-c1">val</span>(ngModel.$viewValue);</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">            $scope.$<span class="pl-c1">watch</span>(attrs.<span class="pl-c1">ngModel</span>, <span class="pl-k">function</span>(<span class="pl-smi">newVal</span>) {</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">              <span class="pl-c1">update</span>();</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (withInput) {</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">                pickerColorInput.<span class="pl-c1">val</span>(newVal);</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">          elem.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$destroy<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">            colorpickerTemplate.<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">previewColor</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">              colorpickerPreview.<span class="pl-c1">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>backgroundColor<span class="pl-pds">&#39;</span></span>, pickerColor[thisFormat]());</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">              colorpickerPreview.<span class="pl-c1">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>backgroundColor<span class="pl-pds">&#39;</span></span>, pickerColor.<span class="pl-c1">toHex</span>());</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">            sliderSaturation.<span class="pl-c1">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>backgroundColor<span class="pl-pds">&#39;</span></span>, pickerColor.<span class="pl-c1">toHex</span>(pickerColor.<span class="pl-c1">value</span>.<span class="pl-c1">h</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (thisFormat <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">              sliderAlpha.<span class="pl-c1">css</span>.<span class="pl-c1">backgroundColor</span> <span class="pl-k">=</span> pickerColor.<span class="pl-c1">toHex</span>();</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">mousemove</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">                left <span class="pl-k">=</span> Slider.<span class="pl-c1">getLeftPosition</span>(<span class="pl-c1">event</span>),</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">                top <span class="pl-k">=</span> Slider.<span class="pl-c1">getTopPosition</span>(<span class="pl-c1">event</span>),</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">                slider <span class="pl-k">=</span> Slider.<span class="pl-c1">getSlider</span>();</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            Slider.<span class="pl-c1">setKnob</span>(top, left);</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (slider.<span class="pl-c1">callLeft</span>) {</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">              pickerColor[slider.<span class="pl-c1">callLeft</span>].<span class="pl-c1">call</span>(pickerColor, left / <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (slider.<span class="pl-c1">callTop</span>) {</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">              pickerColor[slider.<span class="pl-c1">callTop</span>].<span class="pl-c1">call</span>(pickerColor, top / <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">previewColor</span>();</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> newColor <span class="pl-k">=</span> pickerColor[thisFormat]();</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">            elem.<span class="pl-c1">val</span>(newColor);</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(ngModel) {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">              $scope.$<span class="pl-c1">apply</span>(ngModel.$<span class="pl-c1">setViewValue</span>(newColor));</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (withInput) {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">              pickerColorInput.<span class="pl-c1">val</span>(newColor);</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">mouseup</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">emitEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-selected<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">            $document.<span class="pl-c1">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousemove<span class="pl-pds">&#39;</span></span>, mousemove);</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">            $document.<span class="pl-c1">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span>, mouseup);</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">update</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">            pickerColor.<span class="pl-c1">setColor</span>(elem.<span class="pl-c1">val</span>());</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">            pickerColorPointers.<span class="pl-c1">eq</span>(<span class="pl-c1">0</span>).<span class="pl-c1">css</span>({</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">              left<span class="pl-k">:</span> pickerColor.<span class="pl-c1">value</span>.<span class="pl-c1">s</span> <span class="pl-k">*</span> <span class="pl-c1">100</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">              top<span class="pl-k">:</span> <span class="pl-c1">100</span> <span class="pl-k">-</span> pickerColor.<span class="pl-c1">value</span>.<span class="pl-c1">b</span> <span class="pl-k">*</span> <span class="pl-c1">100</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">            pickerColorPointers.<span class="pl-c1">eq</span>(<span class="pl-c1">1</span>).<span class="pl-c1">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">100</span> <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> pickerColor.<span class="pl-c1">value</span>.<span class="pl-c1">h</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">            pickerColorPointers.<span class="pl-c1">eq</span>(<span class="pl-c1">2</span>).<span class="pl-c1">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">100</span> <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> pickerColor.<span class="pl-c1">value</span>.<span class="pl-c1">a</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">previewColor</span>();</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">getColorpickerTemplatePosition</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">                positionValue,</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">                positionOffset <span class="pl-k">=</span> Helper.<span class="pl-c1">getOffset</span>(elem[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(angular.<span class="pl-c1">isDefined</span>(attrs.<span class="pl-c1">colorpickerParent</span>)) {</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">              positionOffset.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">              positionOffset.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (position <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">              positionValue <span class="pl-k">=</span>  {</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">top</span> <span class="pl-k">-</span> <span class="pl-c1">147</span>,</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">left</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (position <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">              positionValue <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">top</span>,</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-c1">126</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (position <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">              positionValue <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">top</span> <span class="pl-k">+</span> elem[<span class="pl-c1">0</span>].<span class="pl-c1">offsetHeight</span> <span class="pl-k">+</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">left</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (position <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">              positionValue <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">top</span>,</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionOffset.<span class="pl-c1">left</span> <span class="pl-k">-</span> <span class="pl-c1">150</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionValue.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> positionValue.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">documentMousedownHandler</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">hideColorpickerTemplate</span>();</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">showColorpickerTemplate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>colorpickerTemplate.<span class="pl-c1">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-visible<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">              <span class="pl-c1">update</span>();</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">              colorpickerTemplate</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-visible<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">css</span>(<span class="pl-c1">getColorpickerTemplatePosition</span>());</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">              <span class="pl-c1">emitEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-shown<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (inline <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// register global mousedown event to hide the colorpicker</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">                $document.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, documentMousedownHandler);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (attrs.<span class="pl-c1">colorpickerIsOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">                $scope[attrs.<span class="pl-c1">colorpickerIsOpen</span>] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>$scope.$$phase) {</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">                  $scope.$<span class="pl-c1">digest</span>(); <span class="pl-c">//trigger the watcher to fire</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(inline <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">            elem.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, showColorpickerTemplate);</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">showColorpickerTemplate</span>();</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">          colorpickerTemplate.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">event</span>.<span class="pl-c1">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">event</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">emitEvent</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(ngModel) {</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">              $scope.$<span class="pl-c1">emit</span>(name, {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">                name<span class="pl-k">:</span> attrs.<span class="pl-c1">ngModel</span>,</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">                value<span class="pl-k">:</span> ngModel.$modelValue</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">hideColorpickerTemplate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (colorpickerTemplate.<span class="pl-c1">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-visible<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">              colorpickerTemplate.<span class="pl-c1">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-visible<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">              <span class="pl-c1">emitEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colorpicker-closed<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// unregister the global mousedown event</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">              $document.<span class="pl-c1">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, documentMousedownHandler);</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (attrs.<span class="pl-c1">colorpickerIsOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">                $scope[attrs.<span class="pl-c1">colorpickerIsOpen</span>] <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>$scope.$$phase) {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">                  $scope.$<span class="pl-c1">digest</span>(); <span class="pl-c">//trigger the watcher to fire</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">          colorpickerTemplate.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>button<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">hideColorpickerTemplate</span>();</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (attrs.<span class="pl-c1">colorpickerIsOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">            $scope.$<span class="pl-c1">watch</span>(attrs.<span class="pl-c1">colorpickerIsOpen</span>, <span class="pl-k">function</span>(<span class="pl-smi">shouldBeOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (shouldBeOpen <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">showColorpickerTemplate</span>();</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">              } <span class="pl-k">else</span> <span class="pl-k">if</span> (shouldBeOpen <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">hideColorpickerTemplate</span>();</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">    }]);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.12529s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" aria-label=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-c8a8198ff49efaf784014a076f734ed15b416115b9e389a7f3aa1f3ec7f457f2.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-deaabc70947e3c9714ca14975e1c081360064b7d2e552a8d9682ef5db97c351c.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

