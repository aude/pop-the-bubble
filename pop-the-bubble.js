// ==UserScript==
// @name        External Links Finder
// @namespace   https://userscripts.org/users/Aspi
// @author      https://userscripts.org/users/Aspi
// @description News sites are great, but they try too hard to keep you on the site. This script highlights links to external pages in blue, so you can pull them out of articles easier.
// @include     /^https?://(www\.)?phoronix\.com/.*/
// @include     /^https?://(www\.)?lifehacker\.com/.*/
// @include     /^https?://(www\.)?arstechnica\.(com|co\.uk)/.*/
// @include     /^https?://blog\.codinghorror\.com/.*/
// @include     /^https?://(www\.)?tek\.no/.*/
// @domain      phoronix.com
// @domain      lifehacker.com
// @domain      arstechnica.com
// @domain      arstechnica.co.uk
// @domain      blog.codinghorror.com
// @domain      tek.no
// @match       http://phoronix.com/*
// @match       https://phoronix.com/*
// @match       http://lifehacker.com/*
// @match       https://lifehacker.com/*
// @match       http://arstechnica.com/*
// @match       https://arstechnica.com/*
// @match       http://arstechnica.co.uk/*
// @match       https://arstechnica.co.uk/*
// @match       http://blog.codinghorror.com/*
// @match       https://blog.codinghorror.com/*
// @match       http://tek.no/*
// @match       https://tek.no/*
// @grant       none
// @version     150804
// ==/UserScript==

// ==ChangeLog==
// @history        150804 added Ars Technica support
// @history        150718 updated for Phoronix' new theme
// @history        140724 added more general support
// @history             1 initial release
// ==/ChangeLog==

// ==License==
/*
@licstart
Copyright (C) 2014-toyear  Free Software Foundation, Inc
51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You may have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
@licend
*/
// ==/License==

/**
 * built upon Phoronix External Link Finder by samcamwilliams <https://userscripts.org/scripts/show/185250>
**/

(function () {
    var i, j, c, d,
        tmp,
        cids = [
            'phxcms_content_phx'
        ],
        cclasses = [
            'post-wrapper',
            'article',
            'full'
        ],
        ctags = [
            'article'
        ],
        containers = [],
        links = [];

    // ids
    for (i = 0, c = cids.length; i < c; ++i) {
        tmp = document.getElementById(cids[i]);
        if (tmp) {
            containers.push(tmp);
        }
    }
    // classes
    for (i = 0, c = cclasses.length; i < c; ++i) {
        tmp = document.getElementsByClassName(cclasses[i]);
        if (tmp.length) {
            for (j = 0, d = tmp.length; j < d; ++j) {
                containers.push(tmp[j]);
            }
        }
    }
    // tags
    for (i = 0, c = ctags.length; i < c; ++i) {
        tmp = document.getElementsByTagName(ctags[i]);
        if (tmp.length) {
            for (j = 0, d = tmp.length; j < d; ++j) {
                containers.push(tmp[j]);
            }
        }
    }
    
    // get links inside containers
    for (i = 0, c = containers.length; i < c; ++i) {
        tmp = containers[i].getElementsByTagName('a');
        if (tmp.length) {
            for (j = 0, d = tmp.length; j < d; ++j) {
                links.push(tmp[j]);
            }
        }
    }
    
    // process links
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf(window.location.host) === -1) {
            // links[i].style.color = '#006FFF';
            links[i].style.color = '#005FFF';
            // links[i].style.color = 'blue';
        }
    }
}());
