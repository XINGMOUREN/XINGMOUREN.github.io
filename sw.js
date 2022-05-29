/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dce2a3424093f11a863c8afbaf6ef591"],["/about/index.html","24e36c15571b2267a5de3d8efdc0d00d"],["/archives/2022/03/index.html","bcc456f085b5bb09f8e1e7391553475c"],["/archives/2022/04/index.html","9e7de29c66888421a277d1071cc87303"],["/archives/2022/05/index.html","e7bbce43ef131a45c4f39c6b78c70985"],["/archives/2022/index.html","65682c1c5625d3b2ecaab1311f063695"],["/archives/2022/page/2/index.html","a98c3e3d56d9221aa2a9446eb2e741cd"],["/archives/index.html","a94a35f77c6ecc15de6ffcaf65247015"],["/archives/page/2/index.html","f04725c6de5b43aec8e5846cb1aca49b"],["/article-1/index.html","a82ded1c49b9318a0568424ff31ddd01"],["/article-11/index.html","ba83125162ba4c5f35e4e3d4938da2b2"],["/article-12/index.html","47679bd294a6a5cd21b09a54812da62c"],["/article-13/index.html","7baadf17c7718516418d97216402984f"],["/article-3/index.html","c32030014ce8158e5b6ecb9fdfcccace"],["/article-4/index.html","1838995201f3634d1e12d5a688a995f5"],["/article-6/index.html","808d5bfb93983ee0931c32df110ed81e"],["/article-7/index.html","a26bef1fb228dc324a1b7334fddac657"],["/article-9/index.html","5dd7831228699a87cca8883f93e242e5"],["/article/index.html","a0c3fea71a08af58366fab942ffd03a8"],["/artitalk/index.html","11a0fb01c98f951b72247e95ceee574c"],["/categories/index.html","f7abfe738b2f63a4052b96b45cac14b6"],["/categories/优质教程/index.html","7cf63e6f9a2f333064f32c4369790d5a"],["/categories/学习笔记/index.html","cf889311251b5d4bf01ee83facfc4a73"],["/categories/生活琐事/index.html","0b5c6c6d7858b6c70a260c22ffa35216"],["/categories/胡思乱想/index.html","16b7432c660afce91fb173392c97c745"],["/categories/软件编程/index.html","3100eefc0ac8dc893866ba4608d89fc2"],["/categories/魔改教程/index.html","11192ccc5ad57d3020a36e52d1094f76"],["/comments/index.html","940e997db2e6b74c0f49b143e8571169"],["/computer/child.html","bc869c0629f35ffe2165181c3c5876ec"],["/computer/component/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/computer/component/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/computer/component/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/computer/component/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/computer/component/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/computer/component/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/computer/component/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/computer/component/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/computer/component/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/computer/css/animate.css","07f146141537e04ee282a965d8053198"],["/computer/css/default.css","cfaeef1381921034481ee034f1106d46"],["/computer/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/computer/img/icon/baidu.png","48870393931a9d1f5716b62c6e00546e"],["/computer/img/icon/blogger.png","68bb71f5b6de2736c69a0ed957662607"],["/computer/img/icon/demo.png","752e8e2e83385a967c834568ac8c947a"],["/computer/img/icon/doc.png","54eb6ec9a704d6b00def42331813f4ac"],["/computer/img/icon/download.png","11a06a92fc4105736d9d9f1ef0cf0177"],["/computer/img/icon/github.png","2ad710564e17dce8c49b98918360d4f6"],["/computer/img/icon/kyzg.png","71a0c315ed0c752d2547d4adef11e248"],["/computer/img/icon/website.png","95df7de88b55801652aaa2e5fb23a206"],["/computer/img/icon/win10.png","8a5f042d9002cde1260127c8e024abe4"],["/computer/img/presentation/1.png","ac37ffe195b3fa3b24e25b43fb7a453e"],["/computer/img/presentation/bluescreen.jpg","d35cd9da8476edf52178b4b9086c5941"],["/computer/img/presentation/donation.jpg","f7bd1c1015cbfa723fe6ffb4334c4c09"],["/computer/img/presentation/wangyiyun.gif","bc10e68873938904501c3797f1c2ea15"],["/computer/img/wallpapers/login.jpg","7064f8c781133bc03a5543654b474ec0"],["/computer/index.html","65e4f5d63ef5cfea29646605a2618b30"],["/computer/js/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/computer/js/win10.child.js","7718414f57b537181a3dcfdcca3e78ec"],["/computer/js/win10.js","57571bdbd48bef76d60f6bd31186da6a"],["/computer/login.html","3f90058138da0d6b74fd992b160f9963"],["/css/coin.css","8c4ccd7e92fd2f3cc26822c55bbb1be3"],["/css/common.css","d0a36a61cbb6383ebfa1416ae882f370"],["/css/happyking/cao.css","ac528bc8073a242bd5af0c1509430f37"],["/css/happyking/custom.css","3b3d666f4fd0fcb31740596297051c10"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","4b2fe4ebadf44e0eb984f870d141208e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dong-tai-peng-you-quan/index.html","7a6e3ad844e507690d60f82470a0ff6a"],["/fcircle/index.html","1edba9cf823a237def7e6e6be2ee3b23"],["/gallery/gallery1/index.html","116e7e48949a0aa835a01ef831cc4eab"],["/gallery/gallery2/index.html","e7119f559f24a03988569b722654baf9"],["/gallery/index.html","a7180e1d10f9bb50686c3855c7a673a5"],["/images/loading.gif","0bd6449f2ebd67cc017335a4e7e3021e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.gif","dd3eb481ee13312e7285bcecee5420b9"],["/img/favicon.png","570a4d904bbf558efa6fefa0e6a8b20e"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0c2403d13054c8d87ef71fec5ed00596"],["/js/coin.js","16be4711da8cbe57c0be5a9c107b237c"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f5c1b281c856d3d480bcb256e4b455c9"],["/more/index.html","d726e894e98aeee5153f8b647af953b7"],["/music/index.html","9b10c4337842097c07532182318c3031"],["/page/2/index.html","1aa9102afbff824e6f7463ad7f3e32ce"],["/random/index.html","58ccdbf1fbd301be2dae1d67c8a230d0"],["/si-fei-zi-xing-che-gai-zao/index.html","931775e042051d800936286f2355ddef"],["/sw-register.js","f448ec947de08607f35ce106f58b553e"],["/tags/Cx-taiko✨/index.html","e340e22b33af8bea8942e3a64d1aa8a1"],["/tags/JavaScript👓/index.html","ae8d5016d2a5249088fc5c1139948f94"],["/tags/butterfly🎨/index.html","a915b90002bd55b1ec7293c46c529770"],["/tags/hexo🎠/index.html","7b915c49547940f9d2e92d2cf2010f21"],["/tags/index.html","1590ea156be1f5ce7df4cfd84c966b94"],["/tags/npm插件⛳/index.html","7002291d279e4b39da45f635323bfeee"],["/tags/vue-js📊/index.html","793fd062f15f5cfd4a6a5c6fc5275c12"],["/tags/人物志🛴/index.html","bfc42b750679afec9ca55e12cc324361"],["/tags/人生哲理🧬/index.html","8c166f883b297e879b5661ed9ab3ddde"],["/tags/学习📝/index.html","a5f11d5aaf89be29f914498ab36cec82"],["/tags/我的世界🧨/index.html","b4ec721f86bdf04e6af7ff2ca7871421"],["/tags/教程🎩/index.html","aae7f1602774719ac48cce228ada23c0"],["/tags/数学函数📈/index.html","29a2e078d091206cd114813c8be4f7fd"],["/tags/整活🎈/index.html","1e412fef1ba1b3f2d861e88c3fd49ead"],["/tags/死飞🥇/index.html","ed0f5056bb7a1261fb2b7f6c2a9107ec"],["/tags/流水账🛀/index.html","2c9b3862aa3e04541a1b0c8789693566"],["/tags/游戏🎮/index.html","b8353b91b92d4d7f0d066bede3244029"],["/tags/生活🧤/index.html","07825ce343463754040550f86b0b03c7"],["/tags/编程💻/index.html","fdc35eee2247f472fb69eed17403c854"],["/tags/自建图床🎫/index.html","b6558e386780d8d98bf553ca88357fde"],["/tags/自行车🚲/index.html","9aeb2c73b479668557917a3acc958ae0"],["/tags/随想🎭/index.html","2a38f4552966a5db0ea979451dfbc54d"],["/team/index.html","579e7b1a9a962d3ed49d7473c1cb44de"],["/wo-de-shi-jie-jiao-cheng/index.html","990455eda8e989af9873035665ab9153"],["/xiao-wang-de-za-xiang/index.html","d48c0d629930780b7b9e67381130cdd5"],["/xiao-wang-ren-wu-zhi/index.html","0c5f2d9deb8d58ad725b6d2f2426d0b4"],["/zi-jian-tu-chuang-wang-zhan/index.html","6c8035d1fdd84cec78385e39d136801d"]];
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
