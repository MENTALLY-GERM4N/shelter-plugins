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
  var masks = {
    STATUS_ONLINE: Masks.STATUS_ONLINE,
    STATUS_IDLE: Masks.STATUS_IDLE,
    STATUS_DND: Masks.STATUS_DND,
    STATUS_OFFLINE: Masks.STATUS_OFFLINE,
    STATUS_STREAMING: Masks.STATUS_STREAMING,
    STATUS_ONLINE_MOBILE: Masks.STATUS_ONLINE_MOBILE,
    AVATAR_STATUS_ROUND_16: Masks.AVATAR_STATUS_ROUND_16,
    AVATAR_STATUS_ROUND_20: Masks.AVATAR_STATUS_ROUND_20,
    AVATAR_STATUS_ROUND_24: Masks.AVATAR_STATUS_ROUND_24,
    AVATAR_STATUS_ROUND_32: Masks.AVATAR_STATUS_ROUND_32,
    AVATAR_STATUS_ROUND_40: Masks.AVATAR_STATUS_ROUND_40,
    AVATAR_STATUS_ROUND_48: Masks.AVATAR_STATUS_ROUND_48,
    AVATAR_STATUS_ROUND_56: Masks.AVATAR_STATUS_ROUND_56,
    AVATAR_STATUS_ROUND_80: Masks.AVATAR_STATUS_ROUND_80,
    AVATAR_STATUS_ROUND_100: Masks.AVATAR_STATUS_ROUND_100,
    AVATAR_STATUS_ROUND_120: Masks.AVATAR_STATUS_ROUND_120,
    AVATAR_STATUS_MOBILE_16: Masks.AVATAR_STATUS_MOBILE_16,
    AVATAR_STATUS_MOBILE_20: Masks.AVATAR_STATUS_MOBILE_20,
    AVATAR_STATUS_MOBILE_24: Masks.AVATAR_STATUS_MOBILE_24,
    AVATAR_STATUS_MOBILE_32: Masks.AVATAR_STATUS_MOBILE_32,
    AVATAR_STATUS_MOBILE_40: Masks.AVATAR_STATUS_MOBILE_40,
    AVATAR_STATUS_MOBILE_48: Masks.AVATAR_STATUS_MOBILE_48,
    AVATAR_STATUS_MOBILE_56: Masks.AVATAR_STATUS_MOBILE_56,
    AVATAR_STATUS_MOBILE_80: Masks.AVATAR_STATUS_MOBILE_80,
    AVATAR_STATUS_MOBILE_100: Masks.AVATAR_STATUS_MOBILE_100,
    AVATAR_STATUS_MOBILE_120: Masks.AVATAR_STATUS_MOBILE_120
  };
  var style = document.createElement("style");
  style.id = "__eurotilities-moduleStyle_color-sighted";
  style.textContent = `[mask="url(#svg-mask-status-online)"] { width: 10px; height: 10px; x: 22px; y: 22px; }`;
  var colorSighted_default = {
    title: "Color Sighted",
    content: "Remove the colorblind-friendly icons from statuses.",
    //url(#svg-mask-avatar-status-mobile-32)
    start: () => {
      document.head.appendChild(style);
      Masks.STATUS_DND = masks.STATUS_ONLINE;
      Masks.STATUS_IDLE = masks.STATUS_ONLINE;
      Masks.STATUS_OFFLINE = masks.STATUS_ONLINE;
      Masks.STATUS_STREAMING = masks.STATUS_ONLINE;
      Masks.STATUS_ONLINE_MOBILE = masks.STATUS_ONLINE;
      Masks.AVATAR_STATUS_MOBILE_16 = masks.AVATAR_STATUS_ROUND_16;
      Masks.AVATAR_STATUS_MOBILE_20 = masks.AVATAR_STATUS_ROUND_20;
      Masks.AVATAR_STATUS_MOBILE_24 = masks.AVATAR_STATUS_ROUND_24;
      Masks.AVATAR_STATUS_MOBILE_32 = masks.AVATAR_STATUS_ROUND_32;
      Masks.AVATAR_STATUS_MOBILE_40 = masks.AVATAR_STATUS_ROUND_40;
      Masks.AVATAR_STATUS_MOBILE_48 = masks.AVATAR_STATUS_ROUND_48;
      Masks.AVATAR_STATUS_MOBILE_56 = masks.AVATAR_STATUS_ROUND_56;
      Masks.AVATAR_STATUS_MOBILE_80 = masks.AVATAR_STATUS_ROUND_80;
      Masks.AVATAR_STATUS_MOBILE_100 = masks.AVATAR_STATUS_ROUND_100;
      Masks.AVATAR_STATUS_MOBILE_120 = masks.AVATAR_STATUS_ROUND_120;
      return true;
    },
    stop: () => {
      document.head.removeChild(style);
      Masks.STATUS_DND = masks.STATUS_DND;
      Masks.STATUS_IDLE = masks.STATUS_IDLE;
      Masks.STATUS_OFFLINE = masks.STATUS_OFFLINE;
      Masks.STATUS_STREAMING = masks.STATUS_STREAMING;
      Masks.STATUS_ONLINE_MOBILE = masks.STATUS_ONLINE_MOBILE;
      Masks.AVATAR_STATUS_MOBILE_16 = masks.AVATAR_STATUS_MOBILE_16;
      Masks.AVATAR_STATUS_MOBILE_20 = masks.AVATAR_STATUS_MOBILE_20;
      Masks.AVATAR_STATUS_MOBILE_24 = masks.AVATAR_STATUS_MOBILE_24;
      Masks.AVATAR_STATUS_MOBILE_32 = masks.AVATAR_STATUS_MOBILE_32;
      Masks.AVATAR_STATUS_MOBILE_40 = masks.AVATAR_STATUS_MOBILE_40;
      Masks.AVATAR_STATUS_MOBILE_48 = masks.AVATAR_STATUS_MOBILE_48;
      Masks.AVATAR_STATUS_MOBILE_56 = masks.AVATAR_STATUS_MOBILE_56;
      Masks.AVATAR_STATUS_MOBILE_80 = masks.AVATAR_STATUS_MOBILE_80;
      Masks.AVATAR_STATUS_MOBILE_100 = masks.AVATAR_STATUS_MOBILE_100;
      Masks.AVATAR_STATUS_MOBILE_120 = masks.AVATAR_STATUS_MOBILE_120;
      return true;
    }
  };

  // plugins/eurotilities/modules/noNitroUpsell.ts
  var { flux } = shelter;
  var { awaitStore } = flux;
  var noNitroUpsell_default = {
    title: "No Nitro Upsell",
    content: "Remove ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.",
    start: () => {
      awaitStore("UserStore", true).then((UserStore) => {
        const { getCurrentUser } = UserStore;
        getCurrentUser()._eurotilities__premiumType = getCurrentUser().premiumType;
        getCurrentUser().premiumType = 2;
      });
      return true;
    },
    stop: () => {
      awaitStore("UserStore", true).then((UserStore) => {
        const { getCurrentUser } = UserStore;
        getCurrentUser().premiumType = getCurrentUser()._eurotilities__premiumType;
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
      return true;
    },
    stop: () => false
  };

  // plugins/eurotilities/modules/steamStatusSync.ts
  var { flux: flux2 } = shelter;
  var { dispatcher } = flux2;
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
      dispatcher.subscribe("USER_SETTINGS_PROTO_UPDATE", listener);
      return true;
    },
    stop: () => {
      dispatcher.unsubscribe("USER_SETTINGS_PROTO_UPDATE", listener);
      return true;
    }
  };

  // plugins/eurotilities/helpers/modules.ts
  var modules_default = {
    colorSighted: colorSighted_default,
    noNitroUpsell: noNitroUpsell_default,
    noTypingAnimation: noTypingAnimation_default,
    steamStatusSync: steamStatusSync_default
  };

  // plugins/eurotilities/components/settings.tsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div></div>`, 2);
  var {
    plugin: {
      store
    },
    ui: {
      SwitchItem,
      tooltip
    },
    React
  } = shelter;
  var handleSettingChange = (key, value) => {
    store[key] = value;
  };
  var settings = () => {
    return [(() => {
      const _el$ = _tmpl$.cloneNode(true);
      (0, import_web4.use)(tooltip, _el$, () => "Remove the colorblind-friendly icons from statuses.");
      (0, import_web2.insert)(_el$, (0, import_web3.createComponent)(SwitchItem, {
        get value() {
          return store.colorSighted;
        },
        onChange: (v) => handleSettingChange("colorSighted", v),
        hideBorder: true,
        children: "Color Sighted"
      }));
      return _el$;
    })(), (() => {
      const _el$2 = _tmpl$.cloneNode(true);
      (0, import_web4.use)(tooltip, _el$2, () => "Remove ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.");
      (0, import_web2.insert)(_el$2, (0, import_web3.createComponent)(SwitchItem, {
        get value() {
          return store.noNitroUpsell;
        },
        onChange: (v) => handleSettingChange("noNitroUpsell", v),
        hideBorder: true,
        children: "No Nitro Upsell"
      }));
      return _el$2;
    })(), (() => {
      const _el$3 = _tmpl$.cloneNode(true);
      (0, import_web4.use)(tooltip, _el$3, () => "Disable the CPU-intensive typing dots animation.");
      (0, import_web2.insert)(_el$3, (0, import_web3.createComponent)(SwitchItem, {
        get value() {
          return store.noTypingAnimation;
        },
        onChange: (v) => handleSettingChange("noTypingAnimation", v),
        hideBorder: true,
        children: "No Typing Animation"
      }));
      return _el$3;
    })(), (() => {
      const _el$4 = _tmpl$.cloneNode(true);
      (0, import_web4.use)(tooltip, _el$4, () => "Sync your Steam Status to your Discord Status.");
      (0, import_web2.insert)(_el$4, (0, import_web3.createComponent)(SwitchItem, {
        get value() {
          return store.steamStatusSync;
        },
        onChange: (v) => handleSettingChange("steamStatusSync", v),
        hideBorder: true,
        children: "Steam Status Sync"
      }));
      return _el$4;
    })()];
  };

  // plugins/eurotilities/index.ts
  var {
    plugin: { store: store2 },
    ui: { showToast }
  } = shelter;
  function onLoad() {
    for (const module of Object.keys(store2)) {
      if (store2[module]) {
        if (modules_default[module].start()) {
          showToast({
            ...modules_default[module],
            title: `${modules_default[module].title} - Enabled`,
            content: null,
            duration: 0
          });
        }
      }
    }
  }
  function onUnload() {
    for (const module of Object.keys(store2)) {
      if (store2[module]) {
        if (modules_default[module].stop()) {
          showToast({
            ...modules_default[module],
            title: `${modules_default[module].title} - Disabled`,
            content: null
          });
        } else {
          showToast({
            ...modules_default[module],
            title: `${modules_default[module].title} - Not Disabled`,
            content: `${modules_default[module].title} requires a restart to disable.`,
            onClick() {
              location.reload();
            },
            duration: Number.POSITIVE_INFINITY
          });
        }
      }
    }
  }
  return __toCommonJS(eurotilities_exports);
})();
