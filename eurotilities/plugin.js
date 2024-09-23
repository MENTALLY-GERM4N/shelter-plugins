(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shltr-res-ns:solid-js/web
  var require_web = __commonJS({
    "shltr-res-ns:solid-js/web"(exports, module) {
      module.exports = shelter.solidWeb;
    }
  });

  // plugins/eurotilities/index.ts
  var eurotilities_exports = {};
  __export(eurotilities_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload,
    settings: () => settings
  });

  // plugins/eurotilities/modules/alwaysTrust.ts
  var { flux, patcher } = shelter;
  var { stores } = flux;
  var { instead } = patcher;
  var { MaskedLinkStore } = stores;
  var alwaysTrust_default = {
    title: "Always Trust",
    content: 'Remove the "You are leaving Discord" popup.',
    start: () => {
      instead("isTrustedDomain", MaskedLinkStore, () => true, false);
    }
  };

  // plugins/eurotilities/modules/antiTrack.ts
  var { http } = shelter;
  var { intercept } = http;
  var antiTrack_default = {
    title: "Anti Track",
    content: "Stop some tracking, not all.",
    start: () => {
      try {
        window.__SENTRY__.hub.getClient().getOptions().enabled = false;
        for (const x of Object.keys(console)) {
          console[x] = console[x].__sentry_original__ ?? console[x];
        }
      } catch {
      }
      intercept("post", /^\/science|^\/error-reporting-proxy/, () => {
      });
    }
  };

  // plugins/eurotilities/helpers/webpack.ts
  var wreq;
  var cache;
  window.webpackChunkdiscord_app.push([
    [Symbol()],
    {},
    (x) => {
      wreq = x;
    }
  ]);
  window.webpackChunkdiscord_app.pop();
  cache = wreq.c;
  var filters = {
    byProps: (...props) => (m) => props.every((p) => m[p] !== void 0)
  };
  function handleModuleNotFound(method, ...filter) {
    const errMsg = `webpack.${method} found no module. Filter: ${filter}`;
    console.error(new Error(errMsg));
    return { error: errMsg };
  }
  function find(filter, { isIndirect = false, isWaitFor = false } = {}) {
    if (typeof filter !== "function") {
      return handleModuleNotFound("find", "Invalid filter function");
    }
    for (const key in cache) {
      const mod = cache[key];
      if (!mod.loaded || !mod?.exports)
        continue;
      const exports = mod.exports;
      if (filter(exports))
        return isWaitFor ? [exports, key] : exports;
      if (exports.default && filter(exports.default)) {
        const found = exports.default;
        return isWaitFor ? [found, key] : found;
      }
      if (typeof exports === "object") {
        for (const nestedKey in exports) {
          if (nestedKey.length > 3)
            continue;
          const nested = exports[nestedKey];
          if (nested && filter(nested)) {
            return isWaitFor ? [nested, key] : nested;
          }
        }
      }
    }
    if (!isIndirect) {
      return handleModuleNotFound("find", filter);
    }
    return isWaitFor ? [null, null] : null;
  }
  function findByProps(...props) {
    const result = find(filters.byProps(...props), { isIndirect: true });
    if (!result || result.error) {
      return handleModuleNotFound("findByProps", ...props);
    }
    return result;
  }
  {
    let handleModuleNotFound2 = function(method, ...filter) {
      const errMsg = `webpack.${method} found no module. Filter: ${filter}`;
      console.error(new Error(errMsg));
      return { error: errMsg };
    }, find2 = function(filter, { isIndirect = false, isWaitFor = false } = {}) {
      if (typeof filter !== "function") {
        return handleModuleNotFound2("find", "Invalid filter function");
      }
      for (const key in cache2) {
        const mod = cache2[key];
        if (!mod.loaded || !mod?.exports)
          continue;
        const exports = mod.exports;
        if (filter(exports))
          return isWaitFor ? [exports, key] : exports;
        if (exports.default && filter(exports.default)) {
          const found = exports.default;
          return isWaitFor ? [found, key] : found;
        }
        if (typeof exports === "object") {
          for (const nestedKey in exports) {
            if (nestedKey.length > 3)
              continue;
            const nested = exports[nestedKey];
            if (nested && filter(nested)) {
              return isWaitFor ? [nested, key] : nested;
            }
          }
        }
      }
      if (!isIndirect) {
        return handleModuleNotFound2("find", filter);
      }
      return isWaitFor ? [null, null] : null;
    }, findByProps2 = function(...props) {
      const result = find2(filters2.byProps(...props), { isIndirect: true });
      if (!result || result.error) {
        return handleModuleNotFound2("findByProps", ...props);
      }
      return result;
    };
    let wreq2;
    let cache2;
    window.webpackChunkdiscord_app.push([
      [Symbol()],
      {},
      (x) => {
        wreq2 = x;
      }
    ]);
    window.webpackChunkdiscord_app.pop();
    cache2 = wreq2.c;
    const filters2 = {
      byProps: (...props) => (m) => props.every((p) => m[p] !== void 0)
    };
  }

  // plugins/eurotilities/modules/colorSighted.ts
  var { Masks } = findByProps("Masks");
  var style = document.createElement("style");
  style.id = "__eurotilities-moduleStyle_color-sighted";
  style.textContent = `[mask="url(#svg-mask-status-online)"] { width: 10px; height: 10px; x: 22px; y: 22px; }`;
  var colorSighted_default = {
    title: "Color Sighted",
    content: "Remove the colorblind-friendly icons from statuses.",
    start: () => {
      document.head.appendChild(style);
      Masks.STATUS_DND = Masks.STATUS_ONLINE;
      Masks.STATUS_IDLE = Masks.STATUS_ONLINE;
      Masks.STATUS_OFFLINE = Masks.STATUS_ONLINE;
      Masks.STATUS_STREAMING = Masks.STATUS_ONLINE;
      Masks.STATUS_ONLINE_MOBILE = Masks.STATUS_ONLINE;
      Masks.AVATAR_STATUS_MOBILE_16 = Masks.AVATAR_STATUS_ROUND_16;
      Masks.AVATAR_STATUS_MOBILE_20 = Masks.AVATAR_STATUS_ROUND_20;
      Masks.AVATAR_STATUS_MOBILE_24 = Masks.AVATAR_STATUS_ROUND_24;
      Masks.AVATAR_STATUS_MOBILE_32 = Masks.AVATAR_STATUS_ROUND_32;
      Masks.AVATAR_STATUS_MOBILE_40 = Masks.AVATAR_STATUS_ROUND_40;
      Masks.AVATAR_STATUS_MOBILE_48 = Masks.AVATAR_STATUS_ROUND_48;
      Masks.AVATAR_STATUS_MOBILE_56 = Masks.AVATAR_STATUS_ROUND_56;
      Masks.AVATAR_STATUS_MOBILE_80 = Masks.AVATAR_STATUS_ROUND_80;
      Masks.AVATAR_STATUS_MOBILE_100 = Masks.AVATAR_STATUS_ROUND_100;
      Masks.AVATAR_STATUS_MOBILE_120 = Masks.AVATAR_STATUS_ROUND_120;
    }
  };

  // plugins/eurotilities/modules/muteNewGuild.ts
  var { flux: flux2, http: http2 } = shelter;
  var { dispatcher } = flux2;
  var { patch } = http2;
  var muteNewGuild_default = {
    title: "Mute New Guilds",
    content: "Auto mute guilds on join.",
    start: () => {
      dispatcher.subscribe(
        "INVITE_ACCEPT_SUCCESS",
        ({
          invite: {
            guild: { id }
          }
        }) => {
          if (patch) {
            patch({
              body: {
                muted: true,
                suppress_everyone: true,
                suppress_roles: true
              },
              url: `/users/@me/guilds/${id}/settings`,
              oldFormErrors: false
            });
          }
        }
      );
    }
  };

  // plugins/eurotilities/modules/noCallIdle.ts
  var { flux: flux3 } = shelter;
  var { intercept: intercept2, dispatcher: dispatcher2 } = flux3;
  var dispatchTypes = ["EMBEDDED_ACTIVITY_DISCONNECT", "VOICE_STATE_UPDATES"];
  var noCallIdle_default = {
    title: "No Call Idle",
    content: "Stay in VC forever.",
    start: () => {
      intercept2(({ type }) => {
        if (dispatchTypes.includes(type)) {
          const actionHandlers = dispatcher2._subscriptions[type] ?? [];
          for (const handler of actionHandlers) {
            if (handler.toString().includes("idleTimeout.start")) {
              actionHandlers.delete(handler);
            }
          }
        }
      });
    }
  };

  // plugins/eurotilities/modules/noConsoleSpam.ts
  var originalConsoleMethods = {};
  var noConsoleSpam_default = {
    title: "No Console Spam",
    content: "Filter the console spam.",
    start: () => {
      for (const method of Object.keys(console)) {
        originalConsoleMethods[method] = console[method];
        console[method] = (...args) => {
          const message = args[0];
          if (typeof message === "string" && (message.includes("%c[") || message.toLowerCase().includes("sentry"))) {
            return;
          }
          originalConsoleMethods[method].apply(console, args);
        };
      }
    }
  };

  // plugins/eurotilities/modules/noDevtoolsDetection.ts
  var nativeWindow = window;
  var noDevtoolsDetection_default = {
    title: "No Devtools Detection",
    content: "Prevent annoying devtools detection. (Desktop only)",
    start: () => {
      if (nativeWindow.DiscordNative) {
        nativeWindow.DiscordNative.window.setDevtoolsCallbacks(
          () => {
          },
          () => {
          }
        );
      }
    }
  };

  // plugins/eurotilities/modules/noNitroUpsell.ts
  var { flux: flux4, util } = shelter;
  var { awaitDispatch } = util;
  var { awaitStore } = flux4;
  var getUser = async () => {
    const UserStore = await awaitStore("UserStore", true);
    const { getCurrentUser } = UserStore;
    let user = getCurrentUser();
    if (!user) {
      await awaitDispatch("CONNECTION_OPEN");
      user = getCurrentUser();
    }
    return user;
  };
  var noNitroUpsell_default = {
    title: "No Nitro Upsell",
    content: "Remove ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.",
    start: async () => {
      const user = await getUser();
      user._eurotilities__premiumType = user.premiumType;
      user.premiumType = 2;
    }
  };

  // plugins/eurotilities/modules/noReplyMention.ts
  var { flux: flux5 } = shelter;
  var { intercept: intercept3 } = flux5;
  var unintercept = null;
  var noReplyMention_default = {
    title: "No Reply Mention",
    content: "Disable replies by default.",
    start: () => {
      unintercept = intercept3((dispatch) => {
        if (dispatch.type !== "CREATE_PENDING_REPLY")
          return;
        dispatch.shouldMention = false;
      });
      return true;
    }
  };

  // plugins/eurotilities/modules/noTyping.ts
  var { http: http3 } = shelter;
  var { intercept: intercept4 } = http3;
  var noTyping_default = {
    title: "No Typing",
    content: "Stop Discord from sending your typing status.",
    start: () => {
      intercept4("post", /.*typing$/, () => {
      });
      return true;
    }
  };

  // plugins/eurotilities/modules/noTypingAnimation.ts
  var noTypingAnimation_default = {
    title: "No Typing Animation",
    content: "Disable the CPU-intensive typing dots animation.",
    start: () => {
      document.hasFocus = () => {
        return false;
      };
    }
  };

  // plugins/eurotilities/modules/steamStatusSync.ts
  var { flux: flux6 } = shelter;
  var { dispatcher: dispatcher3 } = flux6;
  var statusMap = {
    online: "online",
    idle: "away",
    dnd: "away",
    invisible: "invisible"
  };
  var listener = ({ settings: settings2 }) => {
    const protoStatus = settings2.proto.status;
    const discordStatus = protoStatus.status.value;
    const showCurrentGame = protoStatus.showCurrentGame.value;
    const steamStatus = statusMap[discordStatus];
    if (!showCurrentGame) {
      return open("steam://friends/status/invisible");
    }
    return open(`steam://friends/status/${steamStatus}`);
  };
  var steamStatusSync_default = {
    title: "Steam Status Sync",
    content: "Sync your Steam Status to your Discord Status.",
    start: () => {
      dispatcher3.subscribe("USER_SETTINGS_PROTO_UPDATE", listener);
    }
  };

  // plugins/eurotilities/modules/timestampedFiles.ts
  var { flux: flux7 } = shelter;
  var { intercept: intercept5 } = flux7;
  var unintercept2 = null;
  var timestampedFiles_default = {
    title: "Timestamped Files",
    content: "Rename uploaded files to the current timestamp.",
    start: () => {
      unintercept2 = intercept5((dispatch) => {
        if (dispatch?.type === "UPLOAD_ATTACHMENT_ADD_FILES") {
          for (const { file } of dispatch?.files ?? []) {
            if (!file?.name)
              continue;
            let newFilename = Date.now().toString();
            if (file.name.includes(".")) {
              newFilename += file.name.slice(file.name.lastIndexOf("."));
            }
            Object.defineProperty(file, "name", {
              value: newFilename
            });
          }
          return dispatch;
        }
      });
      return true;
    }
  };

  // plugins/eurotilities/helpers/modules.ts
  var modules_default = {
    alwaysTrust: alwaysTrust_default,
    antiTrack: antiTrack_default,
    colorSighted: colorSighted_default,
    muteNewGuild: muteNewGuild_default,
    noCallIdle: noCallIdle_default,
    noConsoleSpam: noConsoleSpam_default,
    noDevtoolsDetection: noDevtoolsDetection_default,
    noNitroUpsell: noNitroUpsell_default,
    noReplyMention: noReplyMention_default,
    noTyping: noTyping_default,
    noTypingAnimation: noTypingAnimation_default,
    steamStatusSync: steamStatusSync_default,
    timestampedFiles: timestampedFiles_default
  };

  // plugins/eurotilities/components/settings.tsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var import_web5 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<br>`, 1);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<div></div>`, 2);
  var {
    plugin: {
      store
    },
    ui: {
      Header,
      HeaderTags,
      Divider,
      SwitchItem,
      openModal,
      ModalRoot,
      ModalSizes,
      ModalHeader,
      ModalBody,
      ModalConfirmFooter,
      Button,
      ButtonLooks,
      ButtonColors,
      ButtonSizes
    },
    React
  } = shelter;
  var handleSettingChange = (key, value) => {
    store[key] = value;
  };
  var camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, "");
  };
  var makeModal = () => {
    const remove = openModal(() => (0, import_web5.createComponent)(ModalRoot, {
      get size() {
        return ModalSizes.SMALL;
      },
      get children() {
        return [(0, import_web5.createComponent)(ModalHeader, {
          close: () => {
            remove();
          },
          children: "\u20ACtilities Settings"
        }), (0, import_web5.createComponent)(ModalBody, {
          get children() {
            return [(0, import_web5.createComponent)(Divider, {
              mb: true
            }), (0, import_web4.memo)(() => Object.keys(modules_default).map((module) => {
              const mod = modules_default[module];
              return (() => {
                const _el$ = _tmpl$2.cloneNode(true);
                (0, import_web3.setAttribute)(_el$, "key", module);
                (0, import_web2.insert)(_el$, (0, import_web5.createComponent)(SwitchItem, {
                  get value() {
                    return store[camelize(module)];
                  },
                  onChange: (v) => handleSettingChange(camelize(module), v),
                  hideBorder: true,
                  get children() {
                    return [(0, import_web4.memo)(() => mod.title), _tmpl$.cloneNode(true), (0, import_web4.memo)(() => mod.content)];
                  }
                }), null);
                (0, import_web2.insert)(_el$, (0, import_web5.createComponent)(Divider, {
                  mb: true
                }), null);
                return _el$;
              })();
            }))];
          }
        }), (0, import_web5.createComponent)(ModalConfirmFooter, {
          close: () => {
            remove();
          },
          cancelText: "Close",
          confirmText: "Apply",
          onConfirm: () => {
            location.reload();
          }
        })];
      }
    }));
  };
  var settings = () => {
    return (0, import_web5.createComponent)(Button, {
      get look() {
        return ButtonLooks.FILLED;
      },
      get color() {
        return ButtonColors.BRAND;
      },
      get size() {
        return ButtonSizes.XLARGE;
      },
      onClick: () => {
        document.querySelector('[aria-label="close modal"]')?.click();
        document.querySelector('[class^="_mroot_"]')?.classList.add("_active_1dl10_1");
        makeModal();
      },
      style: {
        width: "100%",
        height: "100%"
      },
      children: "Open Settings"
    });
  };

  // plugins/eurotilities/index.ts
  var {
    plugin: { store: store2, showSettings },
    ui: { showToast }
  } = shelter;
  function onLoad() {
    for (const module of Object.keys(store2)) {
      if (store2[module]) {
        modules_default[module].start();
      }
    }
    showSettings();
  }
  function onUnload() {
    showToast({
      title: "Restart Required",
      content: "\u20ACtilities requires a restart to disable.",
      onClick() {
        location.reload();
      },
      duration: Number.POSITIVE_INFINITY
    });
  }
  return __toCommonJS(eurotilities_exports);
})();
