"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(780);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Header.js


// import {Link} from "react-scroll";

function Header() {
    const [isEditPopupOpen, setEditPopupOpen] = external_react_default().useState(false);
    function handlePopupOpenClick() {
        setEditPopupOpen(true);
    }
    function handlePopupCloseClick() {
        setEditPopupOpen(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        id: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "header__logo",
                href: "/#header",
                children: "< MZ/ >"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header__button-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "header__button",
                        href: "/#aboutme",
                        smooth: true,
                        duration: 1000,
                        children: "\u041E\u0431\u043E \u043C\u043D\u0435"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "header__button",
                        href: "/#info",
                        children: "\u041E\u043F\u044B\u0442 \u0432 IT"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "header__button",
                        href: "/#portfolio",
                        children: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "header__button",
                        href: "/#feedback",
                        children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "header__button header__button_type_blue",
                        href: "/#calltoactionbox",
                        children: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "burger-box",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "burger",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "burger-menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: `burger-menu__button ${isEditPopupOpen ? "burger-menu_active" : ""}`,
                                onClick: isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: `burger-menu__nav ${isEditPopupOpen ? "burger-menu__nav_active" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "burger-menu__navbutton",
                                href: "#aboutme",
                                onClick: isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick,
                                children: "\u041E\u0431\u043E \u043C\u043D\u0435"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "burger-menu__navbutton",
                                href: "#info",
                                onClick: isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick,
                                children: "\u041E\u043F\u044B\u0442 \u0432 IT"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "burger-menu__navbutton",
                                href: "#portfolio",
                                onClick: isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick,
                                children: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "burger-menu__navbutton",
                                href: "#feedback",
                                onClick: isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick,
                                children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "burger-menu__navbutton header__button_type_blue",
                                href: "#calltoactionbox",
                                onClick: isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick,
                                children: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Footer.js

function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "footer__title",
                children: "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0417\u0435\u043D\u0438\u043D\u0430 \u041C\u0430\u0442\u0432\u0435\u044F"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer__container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "footer__date",
                        children: "\xa9 2022"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer__items",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer__item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "footer__link",
                                    href: "https://career.habr.com/mattzen",
                                    children: "Habr \u041A\u0430\u0440\u044C\u0435\u0440\u0430"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer__item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "footer__link",
                                    href: "https://github.com/Mattzenn",
                                    children: "Github"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer__item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "footer__link",
                                    href: "https://t.me/matvey_zenin",
                                    children: "Telegram"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layout.js



const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    })
;
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(446);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js
























function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 800
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_parallax_.ParallaxProvider, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charset: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 446:
/***/ ((module) => {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(511)));
module.exports = __webpack_exports__;

})();