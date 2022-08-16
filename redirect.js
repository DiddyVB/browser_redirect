var url = new URL(location.href),

// INSTANCES //
invidious = 'tube.pathague.com',
libreddit = 'reddit.invak.id',
nitter = 'nitter.snopyta.org',

// YouTube | Invidious //
if(location.host.indexOf('youtube.com') != -1){
    location.replace('https://' + invidious + location.pathname + location.search)
}

// Reddit | Libreddit //
if(location.host.indexOf('reddit.com') != -1){
    location.replace('https://' + libreddit + location.pathname + location.search)
}

// Twitter | Nitter //
if(location.host.indexOf('twitter.com') != -1){
    location.replace('https://' + nitter + location.pathname + location.search)
}
