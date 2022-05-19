/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7d25b8e8e3435012b9b80fa4b6d87640"],["/about/index.html","9a4c3fd05d8799bf0e8fb88856c33db9"],["/archives/2022/03/index.html","0daec13c3e7146b6fa2c9cc1bfdfec27"],["/archives/2022/04/index.html","8b88a982dba96ff229eb71da63523bd0"],["/archives/2022/05/index.html","e5469719d1402fb442830b8bc218a992"],["/archives/2022/index.html","77c7c43b381d30e6c0f5a8be1839fe1d"],["/archives/2022/page/2/index.html","ca9262b00f1a2056b6e8ecee3bdf88e5"],["/archives/index.html","2213dee8e807e5a08d18888c7bf8cec7"],["/archives/page/2/index.html","c6c6f40e8bb3d43c807f55c40b3baff4"],["/article-1/index.html","d7b1e3070a71e7cde054e2ff1fa64673"],["/article-11/index.html","c6076a6f826f5f5514736020f9879d92"],["/article-12/index.html","168b9d6a2941d6672beef659b0709e8c"],["/article-13/index.html","4506c4dac17faabfecb6f4a32639aad1"],["/article-3/index.html","fb863e0c9ca75bff7ec32c5471e5bb3d"],["/article-4/index.html","9806fc85c5a25d8260f81d63be9ca54a"],["/article-6/index.html","8a034a888d9c4e90d6e8b95aee7efa4a"],["/article-7/index.html","22f20fa38e1c30f7463afa8a88a7b621"],["/article-9/index.html","ec8273a203ebe09d6f925848397987ad"],["/article/index.html","179f7f49253b6c8b5313e0efbcb6232f"],["/artitalk/index.html","928fb3d8181dcf34b5c0bcd07852af93"],["/categories/index.html","96018a38a6665984ac403229dbe027fc"],["/categories/优质教程/index.html","d4d5bcbed7852add25dad4c0adc949d4"],["/categories/学习笔记/index.html","ace2f6f3bd9ebdcfc55a53def13291f6"],["/categories/生活琐事/index.html","5d8b7ae3bb7e4b8bc81102aff51fb841"],["/categories/胡思乱想/index.html","46ecb8897c79bbdb0c5fba44ce6512d2"],["/categories/软件编程/index.html","a2e1bceb34daff096c3c03af6e909c05"],["/categories/魔改教程/index.html","2d65c142198501ff0f057d597243844d"],["/comments/index.html","3bb97d9cb4946644f085079313a42d3c"],["/computer/child.html","483c83c870d4a1b573187e8f26cd1a4d"],["/computer/component/font-awesome-4.7.0/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/computer/component/font-awesome-4.7.0/css/font-awesome.min.css","c97c3824a8d6c5eb936727310d68fe87"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/computer/component/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/computer/component/layer-v3.0.3/layer/layer.full.js","f333443833bacb6000ad15f0f11e05eb"],["/computer/component/layer-v3.0.3/layer/layer.js","7ad843ce166e67d35cea674e4b8859c7"],["/computer/component/layer-v3.0.3/layer/mobile/layer.js","801049ea83ffec688769e2361dc2aba6"],["/computer/component/layer-v3.0.3/layer/mobile/need/layer.css","3e0558d12707baf1e6dc41a4cd87ff01"],["/computer/component/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/computer/component/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/computer/component/layer-v3.0.3/layer/skin/default/layer.css","bfed639b478bd63956bf3e12c45a4061"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/computer/component/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/computer/css/animate.css","a8aa7b964cf99f74b6ad0e053944c0aa"],["/computer/css/default.css","6b5ac81103aebaf0a4f4774c677f74c3"],["/computer/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/computer/img/icon/baidu.png","48870393931a9d1f5716b62c6e00546e"],["/computer/img/icon/blogger.png","68bb71f5b6de2736c69a0ed957662607"],["/computer/img/icon/demo.png","752e8e2e83385a967c834568ac8c947a"],["/computer/img/icon/doc.png","54eb6ec9a704d6b00def42331813f4ac"],["/computer/img/icon/download.png","11a06a92fc4105736d9d9f1ef0cf0177"],["/computer/img/icon/github.png","2ad710564e17dce8c49b98918360d4f6"],["/computer/img/icon/kyzg.png","71a0c315ed0c752d2547d4adef11e248"],["/computer/img/icon/website.png","95df7de88b55801652aaa2e5fb23a206"],["/computer/img/icon/win10.png","8a5f042d9002cde1260127c8e024abe4"],["/computer/img/presentation/1.png","ac37ffe195b3fa3b24e25b43fb7a453e"],["/computer/img/presentation/bluescreen.jpg","d35cd9da8476edf52178b4b9086c5941"],["/computer/img/presentation/donation.jpg","f7bd1c1015cbfa723fe6ffb4334c4c09"],["/computer/img/presentation/wangyiyun.gif","bc10e68873938904501c3797f1c2ea15"],["/computer/img/wallpapers/login.jpg","7064f8c781133bc03a5543654b474ec0"],["/computer/index.html","f8a37b2029414c8ca47a659091fdc8b7"],["/computer/js/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/computer/js/win10.child.js","e40fdb95b2da864488bb59711389fc98"],["/computer/js/win10.js","b04a3cf7ad2b27be8e68b2fd786eb3ea"],["/computer/login.html","07af0df39d360b0103b02856478d2ce5"],["/css/coin.css","56819f59c63710e7e2600ac177cb07cc"],["/css/common.css","129cf9361f67624aed75b33dc1bb4448"],["/css/happyking/cao.css","85ba95fd8302b0fff9663de56596031d"],["/css/happyking/custom.css","f906194281bbd1805c7a06c8e82a1788"],["/css/hbe.style.css","0e364acc009058cdc3674b3f6c7e89e5"],["/css/index.css","c3965a6cbfee40c55002220350caddf4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dong-tai-peng-you-quan/index.html","1305dae3b4d565a473cb904dba3d0009"],["/egg.html","826959bf4199636ac0fd599832ae7d13"],["/fcircle/index.html","75f7d973685e2c166b5c6e69748e1887"],["/gallery/gallery1/index.html","c66794009b64c21b5f979c291fa5904f"],["/gallery/gallery2/index.html","332232ca68e1ea711a480168caf9181b"],["/gallery/index.html","091ba20858cc18bd266a9c1a017cdb5e"],["/images/loading.gif","0bd6449f2ebd67cc017335a4e7e3021e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.gif","dd3eb481ee13312e7285bcecee5420b9"],["/img/favicon.png","570a4d904bbf558efa6fefa0e6a8b20e"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e12e4d11cb8349b116e75f0d6f71f36e"],["/js/coin.js","ece0c034a5406dcd817ad1e86bdca892"],["/js/main.js","07b03d38dfd3e4c06df78447056180f8"],["/js/search/algolia.js","6e26d60a32e953e23fd1b220d60b9b01"],["/js/search/local-search.js","5d38410e7689042636f48646428c50fc"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/lib/hbe.js","86e3420d3c285d0931fca4a0c90a182d"],["/link/index.html","e2cc4a12869e6a6b1618070087ae2452"],["/more/index.html","053baf2319e37563d3bfbf60f1acb5dc"],["/music/index.html","5104593416551305cafbd64815789df2"],["/page/2/index.html","37b446f65589a87fac653c4e31e885fa"],["/random/index.html","4eac7c0521b190cf5d4e006359b170a4"],["/sw-register.js","ebf4eb48b91917599bcb999ef5858079"],["/tags/Cx-taiko✨/index.html","a6032d088bd231ed0ab42129141267fa"],["/tags/JavaScript👓/index.html","98ae4070a552e1bfdd0f988bec3b5e88"],["/tags/butterfly🎨/index.html","11b43dd25f6894c4d2081680d7f9593b"],["/tags/hexo🎠/index.html","30161a492f0283e93fa70c0d1583bd7d"],["/tags/index.html","20075e791820e42dfd8842d79d0cd088"],["/tags/npm插件⛳/index.html","43961cbf0cd98043c3c1592bc41c6bc3"],["/tags/vue-js📊/index.html","258f29b7ef6848bc6524293ccd9ff5c3"],["/tags/人生哲理🧬/index.html","436dc5065d924deb29270fd0e740ec79"],["/tags/学习📝/index.html","318199bff595a5d7d549e80ff34a653c"],["/tags/教程🎩/index.html","62dd6c77e12eb57efa618c5fde9d1557"],["/tags/数学函数📈/index.html","81aeaacfd24d435dad6dd89c01590522"],["/tags/整活🎈/index.html","831bb9b061e7a49b0bd7d23267b336dd"],["/tags/流水账🛀/index.html","93cb7aa3a95a0b3880cb4e2f91ed20b5"],["/tags/生活🧤/index.html","644cd82042697529e29e386ee62b097e"],["/tags/编程💻/index.html","02d1c781db042666587ab82a403f14f1"],["/tags/自建图床🎫/index.html","21fcdcb23fcbca6d96f29e16254f7e21"],["/tags/随想🎭/index.html","6c8998da3a1daa6452999f18e1303f36"],["/xiao-wang-de-za-xiang/index.html","7acb64863e8cc2c9ae684b63f8915934"],["/zi-jian-tu-chuang-wang-zhan/index.html","0dc534129dbca9dd6ec1c2b8f817b004"]];
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
