'use strict';

var React = require('react');
var core = require('@web3modal/core');

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function Web3Button(props) {
  return /* @__PURE__ */ React.createElement("w3m-core-button", __spreadValues$5({}, props));
}

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function Modal(props) {
  return /* @__PURE__ */ React.createElement("w3m-modal", __spreadValues$4({}, props));
}

var __defProp$3 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function CreateWeb3Modal(_a) {
  var _b = _a, { ethereumClient } = _b, config = __objRest(_b, ["ethereumClient"]);
  const onConfigure = React.useCallback(async () => {
    core.ThemeCtrl.setThemeConfig(config);
    if (ethereumClient) {
      core.ClientCtrl.setEthereumClient(ethereumClient);
    }
    core.ConfigCtrl.setConfig(__spreadProps(__spreadValues$3({}, config), { walletConnectVersion: ethereumClient == null ? void 0 : ethereumClient.walletConnectVersion }));
    await import('@web3modal/ui');
    core.OptionsCtrl.setIsUiLoaded(true);
  }, [ethereumClient, config]);
  React.useEffect(() => {
    onConfigure();
  }, [onConfigure]);
  return /* @__PURE__ */ React.createElement(Modal, null);
}
const Web3Modal = React.memo(CreateWeb3Modal);

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
function Web3NetworkSwitch(props) {
  return /* @__PURE__ */ React.createElement("w3m-network-switch", __spreadValues$2({}, props));
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function W3mQrCode(props) {
  const { size } = props;
  return /* @__PURE__ */ React.createElement("div", { style: { width: size, height: size } }, /* @__PURE__ */ React.createElement("w3m-qrcode", __spreadValues$1({}, props)));
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useWeb3Modal() {
  const [modal, setModal] = React.useState(core.ModalCtrl.state);
  React.useEffect(() => {
    const unsubscribe = core.ModalCtrl.subscribe((newModal) => setModal(__spreadValues({}, newModal)));
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    isOpen: modal.open,
    open: core.ModalCtrl.open,
    close: core.ModalCtrl.close,
    setDefaultChain: core.OptionsCtrl.setSelectedChain
  };
}

function useWeb3ModalTheme() {
  const [config, setConfig] = React.useState({
    themeMode: core.ThemeCtrl.state.themeMode,
    themeVariables: core.ThemeCtrl.state.themeVariables
  });
  React.useEffect(() => {
    const unsubscribe = core.ThemeCtrl.subscribe(
      (newTheme) => setConfig({
        themeMode: newTheme.themeMode,
        themeVariables: newTheme.themeVariables
      })
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    theme: config,
    setTheme: core.ThemeCtrl.setThemeConfig
  };
}

exports.W3mQrCode = W3mQrCode;
exports.Web3Button = Web3Button;
exports.Web3Modal = Web3Modal;
exports.Web3NetworkSwitch = Web3NetworkSwitch;
exports.useWeb3Modal = useWeb3Modal;
exports.useWeb3ModalTheme = useWeb3ModalTheme;
//# sourceMappingURL=index.js.map
