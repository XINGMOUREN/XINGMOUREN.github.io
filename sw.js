/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d4ed144e6456b03beeff308efa4e79e2"],["/about/index.html","0ae26f74cc82a3903fb6af2b79becb1c"],["/archives/2022/03/index.html","057b2127cbbaf51cddb56189609244bb"],["/archives/2022/04/index.html","468baad43945e98a99eb74ce20403401"],["/archives/2022/05/index.html","549eeba1899d5a0cd8aaf499bbc78aa4"],["/archives/2022/index.html","ce38a359d83394ab73a414b929c8df1e"],["/archives/2022/page/2/index.html","55011a50ab28b9102477d3ac7cf81949"],["/archives/index.html","621dd4c6194985c8f87e3bf28927d1ca"],["/archives/page/2/index.html","a4f7ff0bdee4976e4931e71ed6dc4927"],["/article-1/index.html","e5f4ac0d8295e20afb08a43ddc5a3339"],["/article-11/index.html","02af6e2b6459b05990ba954466f42fe5"],["/article-12/index.html","735de8d5aa729c1d342e17ca9b17d3f9"],["/article-13/index.html","0193f150e58af3adcd1c82c9b1d68ee0"],["/article-3/index.html","3e828d21c6672b09f5fe6fa97516c8a8"],["/article-4/index.html","08829af99666b0d3684aba476ec8bd85"],["/article-6/index.html","7c57d4c9980fd7d6c9e68be44f4ce0e7"],["/article-7/index.html","4429d26d4aa1a3c36abad57fba1788ef"],["/article-9/index.html","92660fec98ef1ac7f8678e4df0cd0caf"],["/article/index.html","24aaf8118cf10d9ed9975cc48c75795b"],["/artitalk/index.html","9dc00bab6802774a28e9b41d1f9f52b4"],["/categories/index.html","c8a831f2aa38248705fa28d2b1246486"],["/categories/优质教程/index.html","47a9b951b3d194cd162094627495c242"],["/categories/学习笔记/index.html","6d068e2d9d9b648ead98c236a742273b"],["/categories/生活琐事/index.html","4a6b5463554f0987d5adf6498918ef89"],["/categories/胡思乱想/index.html","e76a86464076e09942d4c2373792efdc"],["/categories/软件编程/index.html","489f76be9a483cf133855aadac60ef35"],["/categories/魔改教程/index.html","6b56aeb80a62bf255173fab8b8f57be0"],["/comments/index.html","13f1ec29dd46ae4de831bc39cb407a54"],["/computer/child.html","bc869c0629f35ffe2165181c3c5876ec"],["/computer/component/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/computer/component/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/computer/component/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/computer/component/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/computer/component/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/computer/component/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/computer/component/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/computer/component/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/computer/component/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/computer/css/animate.css","07f146141537e04ee282a965d8053198"],["/computer/css/default.css","cfaeef1381921034481ee034f1106d46"],["/computer/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/computer/img/icon/baidu.png","48870393931a9d1f5716b62c6e00546e"],["/computer/img/icon/blogger.png","68bb71f5b6de2736c69a0ed957662607"],["/computer/img/icon/demo.png","752e8e2e83385a967c834568ac8c947a"],["/computer/img/icon/doc.png","54eb6ec9a704d6b00def42331813f4ac"],["/computer/img/icon/download.png","11a06a92fc4105736d9d9f1ef0cf0177"],["/computer/img/icon/github.png","2ad710564e17dce8c49b98918360d4f6"],["/computer/img/icon/kyzg.png","71a0c315ed0c752d2547d4adef11e248"],["/computer/img/icon/website.png","95df7de88b55801652aaa2e5fb23a206"],["/computer/img/icon/win10.png","8a5f042d9002cde1260127c8e024abe4"],["/computer/img/presentation/1.png","ac37ffe195b3fa3b24e25b43fb7a453e"],["/computer/img/presentation/bluescreen.jpg","d35cd9da8476edf52178b4b9086c5941"],["/computer/img/presentation/donation.jpg","f7bd1c1015cbfa723fe6ffb4334c4c09"],["/computer/img/presentation/wangyiyun.gif","bc10e68873938904501c3797f1c2ea15"],["/computer/img/wallpapers/login.jpg","7064f8c781133bc03a5543654b474ec0"],["/computer/index.html","65e4f5d63ef5cfea29646605a2618b30"],["/computer/js/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/computer/js/win10.child.js","7718414f57b537181a3dcfdcca3e78ec"],["/computer/js/win10.js","57571bdbd48bef76d60f6bd31186da6a"],["/computer/login.html","3f90058138da0d6b74fd992b160f9963"],["/css/coin.css","8c4ccd7e92fd2f3cc26822c55bbb1be3"],["/css/common.css","d0a36a61cbb6383ebfa1416ae882f370"],["/css/happyking/cao.css","ac528bc8073a242bd5af0c1509430f37"],["/css/happyking/custom.css","3b3d666f4fd0fcb31740596297051c10"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","4b2fe4ebadf44e0eb984f870d141208e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dong-tai-peng-you-quan/index.html","4f3f163eab47dc7a26bc3877fad72be5"],["/fcircle/index.html","55817da2dcd58ee92cf0613098894765"],["/gallery/gallery1/index.html","f9c4539f74262d0f841ff292c07bedfd"],["/gallery/gallery2/index.html","3aa3e2bac955099f21d93aeab7eb257c"],["/gallery/index.html","d49c8512efbe8da975f74cf8e0e85fe0"],["/images/loading.gif","0bd6449f2ebd67cc017335a4e7e3021e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.gif","dd3eb481ee13312e7285bcecee5420b9"],["/img/favicon.png","570a4d904bbf558efa6fefa0e6a8b20e"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6f79c90bf45a0397a43bb5abd4350059"],["/js/coin.js","16be4711da8cbe57c0be5a9c107b237c"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","36be4ee1fde876a41054a208732eef64"],["/more/index.html","62c0403974b648f1d5d079184382f26f"],["/music/index.html","9fd84abc6ffd0a8a63505d8e44681f64"],["/page/2/index.html","c681fe4aec45871969c6a557275c4b28"],["/random/index.html","58ccdbf1fbd301be2dae1d67c8a230d0"],["/si-fei-zi-xing-che-gai-zao/index.html","745e615607f9f4eed11f525ddf50cc6a"],["/sw-register.js","0d1f0b19dd9f9bb35579fb860ae1cfcf"],["/tags/Cx-taiko✨/index.html","5661b288f6507ebde2b96e5b3ba06fb5"],["/tags/JavaScript👓/index.html","fad2a9e6385490d0c410c55c10f22c42"],["/tags/butterfly🎨/index.html","8780943a0b9d659b785c78f15975e3b3"],["/tags/hexo🎠/index.html","6934a27567aaa995b9e853c02738eb44"],["/tags/index.html","3550c639f8d65c261742eaaa08d1a564"],["/tags/npm插件⛳/index.html","895f70759142e1c884afec9268ea806b"],["/tags/vue-js📊/index.html","35a66693452446d70b945e035fb3b419"],["/tags/人物志🛴/index.html","f8d54e6ede700b303855fb5dda49b485"],["/tags/人生哲理🧬/index.html","94c1b5cc8adf5ca01c70246468befaad"],["/tags/学习📝/index.html","2baef757731e19ea2b0e144140d299f9"],["/tags/我的世界🧨/index.html","9d2fa84aa0e794c151320016282e0a98"],["/tags/教程🎩/index.html","a5196dcfeb1e262eda3557e4b2d06109"],["/tags/数学函数📈/index.html","a981fdc3e9ae32bc11cd127fd3bf770f"],["/tags/整活🎈/index.html","13bbeb51c1586eb0bdc324c09657b770"],["/tags/死飞🥇/index.html","1b7c0983c31bb7cc776f7f98f67ce4d4"],["/tags/流水账🛀/index.html","93bbd5b2b6ceaf08d6f5593c755d825b"],["/tags/游戏🎮/index.html","e224e38d19f7d8f79b04e7740b860af8"],["/tags/生活🧤/index.html","9d4f9629e87fe760ba95471be4117076"],["/tags/编程💻/index.html","32c5637e6e9eb8ecad99bd29d6542877"],["/tags/自建图床🎫/index.html","6d37b7d17856190991318810aaf157ff"],["/tags/自行车🚲/index.html","4f204aa12865c4707bfc1ceb17ec2957"],["/tags/随想🎭/index.html","e5ce9189092c0aa76c857d65a05da06a"],["/team/index.html","45eba43d8ce3e2f78e4198c18f936402"],["/wo-de-shi-jie-jiao-cheng/index.html","47a180106e486fe6320221853af2c42a"],["/xiao-wang-de-za-xiang/index.html","8a5558d007fcfb6830ec7af04fd442c9"],["/xiao-wang-ren-wu-zhi/index.html","a8df3b458c2d78d5adc95886e4ba1487"],["/zi-jian-tu-chuang-wang-zhan/index.html","3aeaf66116dc5d78f78266a14017b78e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
