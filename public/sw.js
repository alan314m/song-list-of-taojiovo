if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let _={};const r=e=>a(e,c),o={module:{uri:c},exports:_,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),_)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/100sc.png",revision:"6ade4bbababbe5926a9bba66d73c05c4"},{url:"/_next/static/XrbgqTikfiYQKAkliUvxz/_buildManifest.js",revision:"6551119ea6ab6b7b86c12f37f746f821"},{url:"/_next/static/XrbgqTikfiYQKAkliUvxz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/121-be955cdd4e4b46d9.js",revision:"be955cdd4e4b46d9"},{url:"/_next/static/chunks/675-1870c4dee1e05e2f.js",revision:"1870c4dee1e05e2f"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-5edd4042dc54e877.js",revision:"5edd4042dc54e877"},{url:"/_next/static/chunks/pages/404-9283f6c630e779c8.js",revision:"9283f6c630e779c8"},{url:"/_next/static/chunks/pages/_app-7840ea31b4cfd0bd.js",revision:"7840ea31b4cfd0bd"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-7e1293e3052fdc37.js",revision:"7e1293e3052fdc37"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/afcb56876f48fa7d.css",revision:"afcb56876f48fa7d"},{url:"/_next/static/css/ca90ac484f328130.css",revision:"ca90ac484f328130"},{url:"/_next/static/css/d2d199aefbdadb8b.css",revision:"d2d199aefbdadb8b"},{url:"/a2hs/android-icon-144x144.png",revision:"4f534514afa54026c0cf4dd2fc839fba"},{url:"/a2hs/android-icon-192x192.png",revision:"3b00a345cb5436c2d225c9c22ddbd965"},{url:"/a2hs/android-icon-36x36.png",revision:"26879f402b07abde2815cd32bae07088"},{url:"/a2hs/android-icon-48x48.png",revision:"e27d1f8a5b39913e80be8ad8ae0a6643"},{url:"/a2hs/android-icon-72x72.png",revision:"1a4d5c442c00c96bc3987f4f2b2fdf77"},{url:"/a2hs/android-icon-96x96.png",revision:"983abc977df76390f76ba6aa9b1b93e4"},{url:"/a2hs/apple-icon-114x114.png",revision:"fb0cd2b2c6f854e9d479aaed0de3fd6a"},{url:"/a2hs/apple-icon-120x120.png",revision:"125f71abb74a24649f73a53604602d56"},{url:"/a2hs/apple-icon-144x144.png",revision:"4f534514afa54026c0cf4dd2fc839fba"},{url:"/a2hs/apple-icon-152x152.png",revision:"31eaf3e6a6e61077fea3f25ba17d3dca"},{url:"/a2hs/apple-icon-180x180.png",revision:"da3cb69730a138630a0460e3068504a5"},{url:"/a2hs/apple-icon-57x57.png",revision:"24287285a3919778ecce90210cb742f3"},{url:"/a2hs/apple-icon-60x60.png",revision:"6a61c9e103d4e71a9baa8c75f4b6452a"},{url:"/a2hs/apple-icon-72x72.png",revision:"1a4d5c442c00c96bc3987f4f2b2fdf77"},{url:"/a2hs/apple-icon-76x76.png",revision:"b8123e8be8082f6d38cddb564ce7ac0d"},{url:"/a2hs/apple-icon-precomposed.png",revision:"3b00a345cb5436c2d225c9c22ddbd965"},{url:"/a2hs/apple-icon.png",revision:"3b00a345cb5436c2d225c9c22ddbd965"},{url:"/a2hs/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/a2hs/favicon-16x16.png",revision:"508ae79fea1eb98bc8567a3589e253ea"},{url:"/a2hs/favicon-32x32.png",revision:"05511736ae341d867948b0cc09390b1c"},{url:"/a2hs/favicon-96x96.png",revision:"983abc977df76390f76ba6aa9b1b93e4"},{url:"/a2hs/favicon.ico",revision:"d2c924efae15dcc67c902dc6e80d4ba5"},{url:"/a2hs/manifest.json",revision:"9005dd3c1f620591f0a9a479e037ae88"},{url:"/a2hs/ms-icon-144x144.png",revision:"4f534514afa54026c0cf4dd2fc839fba"},{url:"/a2hs/ms-icon-150x150.png",revision:"c70e31442255c64ae3004bcd72be1fee"},{url:"/a2hs/ms-icon-310x310.png",revision:"05d76db25cb67648f2ad0ddd67d00419"},{url:"/a2hs/ms-icon-70x70.png",revision:"79a21f762765785f447fe17df70cbb3c"},{url:"/added_songs.json",revision:"94ddee7b8fee4b4db814a993efdd5dce"},{url:"/bilibili_logo_padded.png",revision:"1fb5797471c24751f9539885b31f516d"},{url:"/copyright_lock.png",revision:"194bfd00d80f9de0e5ab58da11ade2c3"},{url:"/favicon.ico",revision:"d2c924efae15dcc67c902dc6e80d4ba5"},{url:"/music_list_taoji.json",revision:"b7fbe1ebb8ee0656dd1b384e156f1267"},{url:"/new_icon.png",revision:"7b29091a2cafcdd8bcfa3ecf1e161e82"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"46479655927578e5c66d242edb21c778"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"c805c23a79da2477cf0d0220f65c41eb"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"58be96dd08dacaa237b287e122dbb6ec"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"9a5c18c003a17c06ec78baf335e193c4"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"b867579d5e95ddb7eb80f0045c0280d1"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"cb65afa040f628b037618584bcc903eb"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"a2b724aa4493ab4b7b1586ac0c9ab2f6"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"32a9e18d34afec79c177d744a8a0934e"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"453ce5b3fdb9e1f23d1d6a4f1cca0a1f"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"a522bb42591ab0854f5a39fdc315c98a"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"451353493b6f763fc642647510eb0d75"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"62a5ac347ce2e345826f59c74813d26c"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"75120cec9e1f67bf86a418ae7a830818"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"330eb512722191975fde9a435bea043a"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"febc3c5c9a1842b430388b663c5b853f"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"88ed757f5e39543e8c639f4505ca63ad"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"46961182b1342293e791c2c8982e911a"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"0ced23e0dcdb9f13950a310be66ebe2e"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"42ede69a5fc34be69c4acc5e74ed4f57"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"a77dae93d369634841b780526d4b9f9c"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"52976f6719c52af842b60c8ea2263133"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"054fe59b86ef083ca784f81a37333f7d"},{url:"/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"576e8b286db87662d202861b475270af"},{url:"/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"fcc6f3861081bbbe6cef321d96973fb9"},{url:"/splash_screens/iPhone_14_Pro_landscape.png",revision:"91b5f140c8545a8ec03eea925400d881"},{url:"/splash_screens/iPhone_14_Pro_portrait.png",revision:"7fe4965ecac97e919d3e71b16f8b30ea"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"5641c30bbbfd25609209966d60af82d8"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"c30407e779d0413fa048029e10b98aed"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"241d651a9b88d6922f5ab1938a3dbac2"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"4505362290b85816c0227f7fbe00b915"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"15eb9af2002401510e40098936bb0718"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"ba96da9734d99a643baf0630f15f3e89"},{url:"/splash_screens/icon.png",revision:"7493138acbf9f1d08a5115aa79deec40"},{url:"/taoji_background_loosy.webp",revision:"240dc6aa4960ed3fb554f57d7f24525b"},{url:"/taoji_fist_fight.webp",revision:"79c7712b2ba2b3064ef158e901946126"},{url:"/taojiovo.webp",revision:"4501991e6b5bd273fd312d5938c2f3ee"},{url:"/tapechat.png",revision:"f1a5a7ad596d1579f7c45349dcf679d8"},{url:"/tiny_taojiovo.webp",revision:"8565f3564f49b138c0c9eb8df36ae61a"},{url:"/up_arrow.png",revision:"22bf7959f03d33ae00f7fa11d738cbc2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
