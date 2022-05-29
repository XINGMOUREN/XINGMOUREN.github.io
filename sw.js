/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a5cecb4364c52561bdcb3c5410133dd9"],["/about/index.html","7304bde1b59eb63e1f88593170e42b55"],["/archives/2022/03/index.html","4118cb8785312ad1cccfaf0b4d53a5fe"],["/archives/2022/04/index.html","f354f7e3a5196ee34b966a9568c94a89"],["/archives/2022/05/index.html","d8443930e4748b3ae8359c32fe5fd60f"],["/archives/2022/index.html","be00279e4675f969fe2d5177c95c3270"],["/archives/2022/page/2/index.html","33dc3e81ccd59e4bf1f16c1a7e3882bb"],["/archives/index.html","a780d53b454048340f709e3b0299d1df"],["/archives/page/2/index.html","763ce7b7bfe17e527219e1fde10699eb"],["/article-1/index.html","504a9d32e239c4da2a0eb1c6fd824e8f"],["/article-11/index.html","d02d7fc8dec4868fc973959bfdbf16af"],["/article-12/index.html","7727a42e4134e10ccc6675931c49572c"],["/article-13/index.html","6343bd04fc6e8c85385bd3ef0223b9b7"],["/article-3/index.html","3ecad84554fcf884b902a2845930ca67"],["/article-4/index.html","881cadc017b5f513e9b137a8cf9e92b1"],["/article-6/index.html","171cef0548362d71581dbf8eeb05dd03"],["/article-7/index.html","f6d895e4fb42e79c5d4e14607c6b44e5"],["/article-9/index.html","7aaca6aa323111e1cf016f22749afbe9"],["/article/index.html","136a0983feb7ee5185034429729a2f4f"],["/artitalk/index.html","ff0cb6e8eb3281fa6134dc7f9d3da44a"],["/categories/index.html","b3749ae6c9ac005d0afd069362a4e4ee"],["/categories/优质教程/index.html","dae625fc6fcc9569669ff27d2a24ba15"],["/categories/学习笔记/index.html","fb6aeb1fa88db03fdd458ed160a36c9a"],["/categories/生活琐事/index.html","3a7abc92d5043dc67f2db35c457d558e"],["/categories/胡思乱想/index.html","1c99bdc31ea0305b621d4582879cf91b"],["/categories/软件编程/index.html","4ea576a0dcfe5ce24c990e4574fc6060"],["/categories/魔改教程/index.html","f3d0bef2c09cf514d6381c346f5d5ea1"],["/comments/index.html","7c893828c4a5b2bb6c4b3c8b61834758"],["/computer/child.html","bc869c0629f35ffe2165181c3c5876ec"],["/computer/component/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/computer/component/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/computer/component/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/computer/component/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/computer/component/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/computer/component/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/computer/component/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/computer/component/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/computer/component/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/computer/css/animate.css","07f146141537e04ee282a965d8053198"],["/computer/css/default.css","cfaeef1381921034481ee034f1106d46"],["/computer/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/computer/img/icon/baidu.png","48870393931a9d1f5716b62c6e00546e"],["/computer/img/icon/blogger.png","68bb71f5b6de2736c69a0ed957662607"],["/computer/img/icon/demo.png","752e8e2e83385a967c834568ac8c947a"],["/computer/img/icon/doc.png","54eb6ec9a704d6b00def42331813f4ac"],["/computer/img/icon/download.png","11a06a92fc4105736d9d9f1ef0cf0177"],["/computer/img/icon/github.png","2ad710564e17dce8c49b98918360d4f6"],["/computer/img/icon/kyzg.png","71a0c315ed0c752d2547d4adef11e248"],["/computer/img/icon/website.png","95df7de88b55801652aaa2e5fb23a206"],["/computer/img/icon/win10.png","8a5f042d9002cde1260127c8e024abe4"],["/computer/img/presentation/1.png","ac37ffe195b3fa3b24e25b43fb7a453e"],["/computer/img/presentation/bluescreen.jpg","d35cd9da8476edf52178b4b9086c5941"],["/computer/img/presentation/donation.jpg","f7bd1c1015cbfa723fe6ffb4334c4c09"],["/computer/img/presentation/wangyiyun.gif","bc10e68873938904501c3797f1c2ea15"],["/computer/img/wallpapers/login.jpg","7064f8c781133bc03a5543654b474ec0"],["/computer/index.html","65e4f5d63ef5cfea29646605a2618b30"],["/computer/js/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/computer/js/win10.child.js","7718414f57b537181a3dcfdcca3e78ec"],["/computer/js/win10.js","57571bdbd48bef76d60f6bd31186da6a"],["/computer/login.html","3f90058138da0d6b74fd992b160f9963"],["/css/coin.css","8c4ccd7e92fd2f3cc26822c55bbb1be3"],["/css/common.css","d0a36a61cbb6383ebfa1416ae882f370"],["/css/happyking/cao.css","ac528bc8073a242bd5af0c1509430f37"],["/css/happyking/custom.css","3b3d666f4fd0fcb31740596297051c10"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","4b2fe4ebadf44e0eb984f870d141208e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dong-tai-peng-you-quan/index.html","845fc01e36634fa8a0e81b22d4675eb3"],["/fcircle/index.html","5302b32840ee7eba4cb6059a6f921178"],["/gallery/gallery1/index.html","b7ad3a095f0a569f08ac84f8af04c5cc"],["/gallery/gallery2/index.html","30ca0b426c694115f6eeea335bab9119"],["/gallery/index.html","398a5cb50aa3775cd08289e9894c3110"],["/images/loading.gif","0bd6449f2ebd67cc017335a4e7e3021e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.gif","dd3eb481ee13312e7285bcecee5420b9"],["/img/favicon.png","570a4d904bbf558efa6fefa0e6a8b20e"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","937c83cf36f28059383ab528b99e0965"],["/js/coin.js","16be4711da8cbe57c0be5a9c107b237c"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","453bddfcb0675b96031dddd6e1eed4fe"],["/more/index.html","2d1844d6d782302c4fa8fb2957d50a0d"],["/music/index.html","434f7289c0fb001c14db128f699dbd9e"],["/page/2/index.html","40b49a31a7782960051e59fe43070d38"],["/random/index.html","58ccdbf1fbd301be2dae1d67c8a230d0"],["/si-fei-zi-xing-che-gai-zao/index.html","ff2550160eb42742ccc678e65dc6c548"],["/sw-register.js","f76510576432af36ab908f6bfb406880"],["/tags/Cx-taiko✨/index.html","a5ecce91c382ab3ece28c465f513aea9"],["/tags/JavaScript👓/index.html","d469039403e5f7c17d4db3056413288a"],["/tags/butterfly🎨/index.html","f73d45dd20d922d8c9bc3babf4bcd899"],["/tags/hexo🎠/index.html","7716e9b5edd35a1aefd1e3abc575214a"],["/tags/index.html","2e87fefe014271348842da1be5793b60"],["/tags/npm插件⛳/index.html","380ce64e691b749e17c2343df70e4fe3"],["/tags/vue-js📊/index.html","e0035c9da92565a0ce574ed18ac5ca01"],["/tags/人物志🛴/index.html","bc5afa2b916e76defbc7d964143d69ed"],["/tags/人生哲理🧬/index.html","94c517f03762ea3b2e0f7e6e4b0c0ba6"],["/tags/学习📝/index.html","42abefa295d8f76c64652d51b8107b83"],["/tags/我的世界🧨/index.html","2572e6f26a410303c727c7da3fa29b34"],["/tags/教程🎩/index.html","0e8b3723b49a04832b525140e2a0fc6b"],["/tags/数学函数📈/index.html","583f544de7c9bcd9092e595990abb9bd"],["/tags/整活🎈/index.html","1afa158bc99de5ec90a9daf1927ca2f4"],["/tags/死飞🥇/index.html","e47dfd6ad486fee65c51fefba2fec82a"],["/tags/流水账🛀/index.html","0f8470cb7aa37e0fd72467b0e14025c6"],["/tags/游戏🎮/index.html","1ee9112742f4370437ddeb5881dadd31"],["/tags/生活🧤/index.html","3df6f7ca51dd4dd926a12a3b0b10fd82"],["/tags/编程💻/index.html","eff273ae998f30905df2333179c25cd5"],["/tags/自建图床🎫/index.html","ab02582c224e16a31a0873d3219e1ed6"],["/tags/自行车🚲/index.html","862a95f80c4f1d58633a8315bbbfc090"],["/tags/随想🎭/index.html","113612d5fa9ddb01b592ef72742eac86"],["/team/index.html","58e516232229e7237f52ea7a5a7aabf7"],["/wo-de-shi-jie-jiao-cheng/index.html","bf9b8b52643e80da17ef066836c8d7f4"],["/xiao-wang-de-za-xiang/index.html","9b20e5a47e8f0221c543761d399b6154"],["/xiao-wang-ren-wu-zhi/index.html","c78c30d98ed169308c087457b31286a4"],["/zi-jian-tu-chuang-wang-zhan/index.html","7c76bf347294d52ba9c684e636c5b2db"]];
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
