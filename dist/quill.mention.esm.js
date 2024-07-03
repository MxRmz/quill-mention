import Quill from 'quill';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var Keys = {
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  UP: 38,
  DOWN: 40
};

function attachDataValues(element, data, dataAttributes) {
  var mention = element;
  Object.keys(data).forEach(function (key) {
    if (dataAttributes.indexOf(key) > -1) {
      mention.dataset[key] = data[key];
    } else {
      delete mention.dataset[key];
    }
  });
  return mention;
}
function setInnerContent(element, value) {
  if (value === null) return;
  if (_typeof(value) === "object") element.appendChild(value);else element.innerText = value;
}
function getMentionCharIndex(text, mentionDenotationChars, isolateChar, allowInlineMentionChar) {
  return mentionDenotationChars.reduce(function (prev, mentionChar) {
    var mentionCharIndex;
    if (isolateChar && allowInlineMentionChar) {
      var regex = new RegExp("^".concat(mentionChar, "|\\s").concat(mentionChar), "g");
      var lastMatch = (text.match(regex) || []).pop();
      if (!lastMatch) {
        return {
          mentionChar: prev.mentionChar,
          mentionCharIndex: prev.mentionCharIndex
        };
      }
      mentionCharIndex = lastMatch !== mentionChar ? text.lastIndexOf(lastMatch) + lastMatch.length - mentionChar.length : 0;
    } else {
      mentionCharIndex = text.lastIndexOf(mentionChar);
    }
    if (mentionCharIndex > prev.mentionCharIndex) {
      return {
        mentionChar: mentionChar,
        mentionCharIndex: mentionCharIndex
      };
    }
    return {
      mentionChar: prev.mentionChar,
      mentionCharIndex: prev.mentionCharIndex
    };
  }, {
    mentionChar: null,
    mentionCharIndex: -1
  });
}
function hasValidChars(text, allowedChars) {
  return allowedChars.test(text);
}
function hasValidMentionCharIndex(mentionCharIndex, text, isolateChar, textPrefix) {
  if (mentionCharIndex === -1) {
    return false;
  }
  if (!isolateChar) {
    return true;
  }
  var mentionPrefix = mentionCharIndex ? text[mentionCharIndex - 1] : textPrefix;
  return !mentionPrefix || !!mentionPrefix.match(/\s/);
}

var Embed = Quill["import"]("blots/embed");
var MentionBlot = /*#__PURE__*/function (_Embed) {
  function MentionBlot(scroll, node) {
    var _this;
    _classCallCheck(this, MentionBlot);
    _this = _callSuper(this, MentionBlot, [scroll, node]);
    _defineProperty(_this, "hoverHandler", void 0);
    _defineProperty(_this, "hoverHandler", void 0);
    _this.clickHandler = null;
    _this.hoverHandler = null;
    _this.mounted = false;
    return _this;
  }
  _inherits(MentionBlot, _Embed);
  return _createClass(MentionBlot, [{
    key: "update",
    value: function update(mutations, context) {
      var _this2 = this;
      // `childList` mutations are not handled on Quill
      // see `update` implementation on:
      // https://github.com/quilljs/quill/blob/master/blots/embed.js
      // any attempt at modifying the inner content will just remove it
      // (since we cant block any modifiications completely, this is the "lesser evil" / graceful fallback)
      var _iterator = _createForOfIteratorHelper(mutations),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          if (mutation.type === "attributes" && mutation.attributeName === "contenteditable") continue;
          setTimeout(function () {
            return _this2.remove();
          }, 0);
          return;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "attach",
    value: function attach() {
      _get(_getPrototypeOf(MentionBlot.prototype), "attach", this).call(this);
      if (!this.mounted) {
        this.mounted = true;
        this.clickHandler = this.getClickHandler();
        this.hoverHandler = this.getHoverHandler();
        this.domNode.addEventListener("click", this.clickHandler, false);
        this.domNode.addEventListener("mouseenter", this.hoverHandler, false);
      }
    }
  }, {
    key: "detach",
    value: function detach() {
      _get(_getPrototypeOf(MentionBlot.prototype), "detach", this).call(this);
      this.mounted = false;
      if (this.clickHandler) {
        this.domNode.removeEventListener("click", this.clickHandler);
        this.clickHandler = null;
      }
    }
  }, {
    key: "getClickHandler",
    value: function getClickHandler() {
      var _this3 = this;
      return function (e) {
        var event = _this3.buildEvent("mention-clicked", e);
        window.dispatchEvent(event);
        e.preventDefault();
      };
    }
  }, {
    key: "getHoverHandler",
    value: function getHoverHandler() {
      var _this4 = this;
      return function (e) {
        var event = _this4.buildEvent("mention-hovered", e);
        window.dispatchEvent(event);
        e.preventDefault();
      };
    }
  }, {
    key: "buildEvent",
    value: function buildEvent(name, e) {
      var event = new Event(name, {
        bubbles: true,
        cancelable: true
      });
      event.value = _extends({}, this.domNode.dataset);
      event.event = e;
      return event;
    }
  }], [{
    key: "create",
    value: function create(data) {
      var node = _get(_getPrototypeOf(MentionBlot), "create", this).call(this);
      var denotationChar = document.createElement("span");
      denotationChar.className = "ql-mention-denotation-char";
      denotationChar.innerText = data.denotationChar;
      var AndroidBackspaceFix = document.createElement("span");
      AndroidBackspaceFix.innerHTML = "&nbsp;";
      // it needs to be "visible" in order to work - so limit to minimal size.
      AndroidBackspaceFix.setAttribute("style", "display: inline-block; height: 1px; width: 1px; overflow: hidden; ");
      node.appendChild(denotationChar);
      if (typeof this.render === "function") {
        node.appendChild(this.render(data));
      } else {
        node.innerText += data.value;
        node.appendChild(AndroidBackspaceFix);
      }
      return MentionBlot.setDataValues(node, data);
    }
  }, {
    key: "setDataValues",
    value: function setDataValues(element, data) {
      setTimeout(function () {
        element.getElementsByTagName("span")[0].setAttribute("contenteditable", "inherit");
      }, 0);
      var domNode = element;
      Object.keys(data).forEach(function (key) {
        domNode.dataset[key] = data[key];
      });
      return domNode;
    }
  }, {
    key: "value",
    value: function value(domNode) {
      return domNode.dataset;
    }
  }]);
}(Embed);
MentionBlot.blotName = "mention";
MentionBlot.tagName = "span";
MentionBlot.className = "mention";
Quill.register("blots/mention", MentionBlot);

var Mention = /*#__PURE__*/function () {
  function Mention(quill, options) {
    var _this = this;
    _classCallCheck(this, Mention);
    this.isOpen = false;
    this.itemIndex = 0;
    this.mentionCharPos = null;
    this.cursorPos = null;
    this.values = [];
    this.suspendMouseEnter = false;
    //this token is an object that may contains one key "abandoned", set to
    //true when the previous source call should be ignored in favor or a
    //more recent execution.  This token will be null unless a source call
    //is in progress.
    this.existingSourceExecutionToken = null;
    this.quill = quill;
    this.options = {
      source: null,
      renderItem: function renderItem(_ref) {
        var value = _ref.value;
        return "".concat(value);
      },
      renderLoading: function renderLoading() {
        return null;
      },
      onSelect: function onSelect(item, insertItem) {
        insertItem(item);
      },
      mentionDenotationChars: ["@"],
      showDenotationChar: true,
      allowedChars: /^[a-zA-Z0-9_]*$/,
      minChars: 0,
      maxChars: 31,
      offsetTop: 2,
      offsetLeft: 0,
      isolateCharacter: false,
      allowInlineMentionChar: false,
      fixMentionsToQuill: false,
      positioningStrategy: "normal",
      defaultMenuOrientation: "bottom",
      blotName: "mention",
      dataAttributes: ["id", "value", "denotationChar", "link", "target", "disabled"],
      linkTarget: "_blank",
      onOpen: function onOpen() {
        return true;
      },
      onBeforeClose: function onBeforeClose() {
        return true;
      },
      onClose: function onClose() {
        return true;
      },
      // Style options
      listItemClass: "ql-mention-list-item",
      mentionContainerClass: "ql-mention-list-container",
      mentionListClass: "ql-mention-list",
      spaceAfterInsert: true,
      selectKeys: [Keys.ENTER]
    };
    _extends(this.options, options, {
      dataAttributes: Array.isArray(options.dataAttributes) ? this.options.dataAttributes.concat(options.dataAttributes) : this.options.dataAttributes
    });

    //Bind all option-functions so they have a reasonable context
    for (var o in this.options) {
      if (typeof this.options[o] === "function") {
        this.options[o] = this.options[o].bind(this);
      }
    }

    //create mention container
    this.mentionContainer = document.createElement("div");
    this.mentionContainer.className = this.options.mentionContainerClass ? this.options.mentionContainerClass : "";
    this.mentionContainer.style.cssText = "display: none; position: absolute;";
    this.mentionContainer.onmousemove = this.onContainerMouseMove.bind(this);
    if (this.options.fixMentionsToQuill) {
      this.mentionContainer.style.width = "auto";
    }
    this.mentionList = document.createElement("ul");
    this.mentionList.id = "quill-mention-list";
    quill.root.setAttribute("aria-owns", "quill-mention-list");
    this.mentionList.className = this.options.mentionListClass ? this.options.mentionListClass : "";
    this.mentionContainer.appendChild(this.mentionList);
    quill.on("text-change", this.onTextChange.bind(this));
    quill.on("selection-change", this.onSelectionChange.bind(this));

    //Pasting doesn't fire selection-change after the pasted text is
    //inserted, so here we manually trigger one
    quill.container.addEventListener("paste", function () {
      setTimeout(function () {
        var range = quill.getSelection();
        _this.onSelectionChange(range);
      });
    });
    quill.keyboard.addBinding({
      key: Keys.TAB
    }, this.selectHandler.bind(this));
    quill.keyboard.bindings[Keys.TAB].unshift(quill.keyboard.bindings[Keys.TAB].pop());
    var _iterator = _createForOfIteratorHelper(this.options.selectKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var selectKey = _step.value;
        quill.keyboard.addBinding({
          key: selectKey
        }, this.selectHandler.bind(this));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    quill.keyboard.bindings[Keys.ENTER].unshift(quill.keyboard.bindings[Keys.ENTER].pop());
    quill.keyboard.addBinding({
      key: Keys.ESCAPE
    }, this.escapeHandler.bind(this));
    quill.keyboard.addBinding({
      key: Keys.UP
    }, this.upHandler.bind(this));
    quill.keyboard.addBinding({
      key: Keys.DOWN
    }, this.downHandler.bind(this));
  }
  return _createClass(Mention, [{
    key: "selectHandler",
    value: function selectHandler() {
      if (this.isOpen && !this.existingSourceExecutionToken) {
        this.selectItem();
        return false;
      }
      return true;
    }
  }, {
    key: "escapeHandler",
    value: function escapeHandler() {
      if (this.isOpen) {
        if (this.existingSourceExecutionToken) {
          this.existingSourceExecutionToken.abandoned = true;
        }
        this.hideMentionList();
        return false;
      }
      return true;
    }
  }, {
    key: "upHandler",
    value: function upHandler() {
      if (this.isOpen && !this.existingSourceExecutionToken) {
        this.prevItem();
        return false;
      }
      return true;
    }
  }, {
    key: "downHandler",
    value: function downHandler() {
      if (this.isOpen && !this.existingSourceExecutionToken) {
        this.nextItem();
        return false;
      }
      return true;
    }
  }, {
    key: "showMentionList",
    value: function showMentionList() {
      if (this.options.positioningStrategy === "fixed") {
        document.body.appendChild(this.mentionContainer);
      } else {
        this.quill.container.appendChild(this.mentionContainer);
      }
      this.mentionContainer.style.visibility = "hidden";
      this.mentionContainer.style.display = "";
      this.mentionContainer.scrollTop = 0;
      this.setMentionContainerPosition();
      this.setIsOpen(true);
    }
  }, {
    key: "hideMentionList",
    value: function hideMentionList() {
      this.options.onBeforeClose();
      this.mentionContainer.style.display = "none";
      this.mentionContainer.remove();
      this.setIsOpen(false);
      this.quill.root.removeAttribute("aria-activedescendant");
    }
  }, {
    key: "highlightItem",
    value: function highlightItem() {
      var scrollItemInView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      for (var i = 0; i < this.mentionList.childNodes.length; i += 1) {
        this.mentionList.childNodes[i].classList.remove("selected");
      }
      if (this.itemIndex === -1 || this.mentionList.childNodes[this.itemIndex].dataset.disabled === "true") {
        return;
      }
      this.mentionList.childNodes[this.itemIndex].classList.add("selected");
      this.quill.root.setAttribute("aria-activedescendant", this.mentionList.childNodes[this.itemIndex].id);
      if (scrollItemInView) {
        this.mentionList.childNodes[this.itemIndex].scrollIntoView({
          behaviour: "smooth",
          block: "nearest"
        });
      }
    }
  }, {
    key: "onContainerMouseMove",
    value: function onContainerMouseMove() {
      this.suspendMouseEnter = false;
    }
  }, {
    key: "selectItem",
    value: function selectItem() {
      var _this2 = this;
      if (this.itemIndex === -1) {
        return;
      }
      var data = this.mentionList.childNodes[this.itemIndex].dataset;
      if (data.disabled) {
        return;
      }
      this.options.onSelect(data, function (asyncData) {
        var programmaticInsert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var overriddenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return _this2.insertItem(asyncData, programmaticInsert, overriddenOptions);
      });
      this.hideMentionList();
    }
  }, {
    key: "insertItem",
    value: function insertItem(data, programmaticInsert) {
      var overriddenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var render = data;
      if (render === null) {
        return;
      }
      var options = _objectSpread2(_objectSpread2({}, this.options), overriddenOptions);
      if (!options.showDenotationChar) {
        render.denotationChar = "";
      }
      var insertAtPos;
      if (!programmaticInsert) {
        insertAtPos = this.mentionCharPos;
        this.quill.deleteText(this.mentionCharPos, this.cursorPos - this.mentionCharPos, Quill.sources.USER);
      } else {
        insertAtPos = this.cursorPos;
      }
      var delta = this.quill.insertEmbed(insertAtPos, options.blotName, render, Quill.sources.USER);
      if (options.spaceAfterInsert) {
        this.quill.insertText(insertAtPos + 1, " ", Quill.sources.USER);
        // setSelection here sets cursor position
        this.quill.setSelection(insertAtPos + 2, Quill.sources.USER);
      } else {
        this.quill.setSelection(insertAtPos + 1, Quill.sources.USER);
      }
      this.hideMentionList();
      return delta;
    }
  }, {
    key: "onItemMouseEnter",
    value: function onItemMouseEnter(e) {
      if (this.suspendMouseEnter) {
        return;
      }
      var index = Number(e.target.dataset.index);
      if (!Number.isNaN(index) && index !== this.itemIndex) {
        this.itemIndex = index;
        this.highlightItem(false);
      }
    }
  }, {
    key: "onDisabledItemMouseEnter",
    value: function onDisabledItemMouseEnter(e) {
      if (this.suspendMouseEnter) {
        return;
      }
      this.itemIndex = -1;
      this.highlightItem(false);
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e) {
      if (e.button !== 0) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
      this.itemIndex = e.currentTarget.dataset.index;
      this.highlightItem();
      this.selectItem();
    }
  }, {
    key: "onItemMouseDown",
    value: function onItemMouseDown(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      var renderedLoading = this.options.renderLoading();
      if (!renderedLoading) {
        return;
      }
      if (this.mentionContainer.getElementsByClassName("ql-mention-loading").length > 0) {
        this.showMentionList();
        return;
      }
      this.mentionList.innerHTML = "";
      var loadingDiv = document.createElement("div");
      loadingDiv.className = "ql-mention-loading";
      setInnerContent(loadingDiv, this.options.renderLoading());
      this.mentionContainer.append(loadingDiv);
      this.showMentionList();
    }
  }, {
    key: "removeLoading",
    value: function removeLoading() {
      var loadingDiv = this.mentionContainer.getElementsByClassName("ql-mention-loading");
      if (loadingDiv.length > 0) {
        loadingDiv[0].remove();
      }
    }
  }, {
    key: "renderList",
    value: function renderList(mentionChar, data, searchTerm) {
      if (data && data.length > 0) {
        this.removeLoading();
        this.values = data;
        this.mentionList.innerText = "";
        var initialSelection = -1;
        for (var i = 0; i < data.length; i += 1) {
          var li = document.createElement("li");
          li.id = "quill-mention-item-" + i;
          li.className = this.options.listItemClass ? this.options.listItemClass : "";
          if (data[i].disabled) {
            li.className += " disabled";
            li.setAttribute("aria-hidden", "true");
          } else if (initialSelection === -1) {
            initialSelection = i;
          }
          li.dataset.index = i;
          var renderedItem = this.options.renderItem(data[i], searchTerm);
          setInnerContent(li, renderedItem);
          if (!data[i].disabled) {
            li.onmouseenter = this.onItemMouseEnter.bind(this);
            li.onmouseup = this.onItemClick.bind(this);
            li.onmousedown = this.onItemMouseDown.bind(this);
          } else {
            li.onmouseenter = this.onDisabledItemMouseEnter.bind(this);
          }
          li.dataset.denotationChar = mentionChar;
          this.mentionList.appendChild(attachDataValues(li, data[i], this.options.dataAttributes));
        }
        this.itemIndex = initialSelection;
        this.highlightItem();
        this.showMentionList();
      } else {
        this.hideMentionList();
      }
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      var increment = 0;
      var newIndex;
      do {
        increment++;
        newIndex = (this.itemIndex + increment) % this.values.length;
        var disabled = this.mentionList.childNodes[newIndex].dataset.disabled === "true";
        if (increment === this.values.length + 1) {
          //we've wrapped around w/o finding an enabled item
          newIndex = -1;
          break;
        }
      } while (disabled);
      this.itemIndex = newIndex;
      this.suspendMouseEnter = true;
      this.highlightItem();
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var decrement = 0;
      var newIndex;
      do {
        decrement++;
        newIndex = (this.itemIndex + this.values.length - decrement) % this.values.length;
        var disabled = this.mentionList.childNodes[newIndex].dataset.disabled === "true";
        if (decrement === this.values.length + 1) {
          //we've wrapped around w/o finding an enabled item
          newIndex = -1;
          break;
        }
      } while (disabled);
      this.itemIndex = newIndex;
      this.suspendMouseEnter = true;
      this.highlightItem();
    }
  }, {
    key: "containerBottomIsNotVisible",
    value: function containerBottomIsNotVisible(topPos, containerPos) {
      var mentionContainerBottom = topPos + this.mentionContainer.offsetHeight + containerPos.top;
      return mentionContainerBottom > window.pageYOffset + window.innerHeight;
    }
  }, {
    key: "containerRightIsNotVisible",
    value: function containerRightIsNotVisible(leftPos, containerPos) {
      if (this.options.fixMentionsToQuill) {
        return false;
      }
      var rightPos = leftPos + this.mentionContainer.offsetWidth + containerPos.left;
      var browserWidth = window.pageXOffset + document.documentElement.clientWidth;
      return rightPos > browserWidth;
    }
  }, {
    key: "setIsOpen",
    value: function setIsOpen(isOpen) {
      if (this.isOpen !== isOpen) {
        if (isOpen) {
          this.options.onOpen();
        } else {
          this.options.onClose();
        }
        this.isOpen = isOpen;
      }
    }
  }, {
    key: "setMentionContainerPosition",
    value: function setMentionContainerPosition() {
      if (this.options.positioningStrategy === "fixed") {
        this.setMentionContainerPosition_Fixed();
      } else {
        this.setMentionContainerPosition_Normal();
      }
    }
  }, {
    key: "setMentionContainerPosition_Normal",
    value: function setMentionContainerPosition_Normal() {
      var _this3 = this;
      var containerPos = this.quill.container.getBoundingClientRect();
      var mentionCharPos = this.quill.getBounds(this.mentionCharPos);
      var containerHeight = this.mentionContainer.offsetHeight;
      var topPos = this.options.offsetTop;
      var leftPos = this.options.offsetLeft;

      // handle horizontal positioning
      if (this.options.fixMentionsToQuill) {
        var rightPos = 0;
        this.mentionContainer.style.right = "".concat(rightPos, "px");
      } else {
        leftPos += mentionCharPos.left;
      }
      if (this.containerRightIsNotVisible(leftPos, containerPos)) {
        var containerWidth = this.mentionContainer.offsetWidth + this.options.offsetLeft;
        var quillWidth = containerPos.width;
        leftPos = quillWidth - containerWidth;
      }

      // handle vertical positioning
      if (this.options.defaultMenuOrientation === "top") {
        // Attempt to align the mention container with the top of the quill editor
        if (this.options.fixMentionsToQuill) {
          topPos = -1 * (containerHeight + this.options.offsetTop);
        } else {
          topPos = mentionCharPos.top - (containerHeight + this.options.offsetTop);
        }

        // default to bottom if the top is not visible
        if (topPos + containerPos.top <= 0) {
          var overMentionCharPos = this.options.offsetTop;
          if (this.options.fixMentionsToQuill) {
            overMentionCharPos += containerPos.height;
          } else {
            overMentionCharPos += mentionCharPos.bottom;
          }
          topPos = overMentionCharPos;
        }
      } else {
        // Attempt to align the mention container with the bottom of the quill editor
        if (this.options.fixMentionsToQuill) {
          topPos += containerPos.height;
        } else {
          topPos += mentionCharPos.bottom;
        }

        // default to the top if the bottom is not visible
        if (this.containerBottomIsNotVisible(topPos, containerPos)) {
          var _overMentionCharPos = this.options.offsetTop * -1;
          if (!this.options.fixMentionsToQuill) {
            _overMentionCharPos += mentionCharPos.top;
          }
          topPos = _overMentionCharPos - containerHeight;
        }
      }
      if (topPos >= 0) {
        this.options.mentionContainerClass.split(" ").forEach(function (className) {
          _this3.mentionContainer.classList.add("".concat(className, "-bottom"));
          _this3.mentionContainer.classList.remove("".concat(className, "-top"));
        });
      } else {
        this.options.mentionContainerClass.split(" ").forEach(function (className) {
          _this3.mentionContainer.classList.add("".concat(className, "-top"));
          _this3.mentionContainer.classList.remove("".concat(className, "-bottom"));
        });
      }
      this.mentionContainer.style.top = "".concat(topPos, "px");
      this.mentionContainer.style.left = "".concat(leftPos, "px");
      this.mentionContainer.style.visibility = "visible";
    }
  }, {
    key: "setMentionContainerPosition_Fixed",
    value: function setMentionContainerPosition_Fixed() {
      var _this4 = this;
      this.mentionContainer.style.position = "fixed";
      this.mentionContainer.style.height = null;
      var containerPos = this.quill.container.getBoundingClientRect();
      var mentionCharPos = this.quill.getBounds(this.mentionCharPos);
      var mentionCharPosAbsolute = {
        left: containerPos.left + mentionCharPos.left,
        top: containerPos.top + mentionCharPos.top,
        width: 0,
        height: mentionCharPos.height
      };

      //Which rectangle should it be relative to
      var relativeToPos = this.options.fixMentionsToQuill ? containerPos : mentionCharPosAbsolute;
      var topPos = this.options.offsetTop;
      var leftPos = this.options.offsetLeft;

      // handle horizontal positioning
      if (this.options.fixMentionsToQuill) {
        var rightPos = relativeToPos.right;
        this.mentionContainer.style.right = "".concat(rightPos, "px");
      } else {
        leftPos += relativeToPos.left;

        //if its off the righ edge, push it back
        if (leftPos + this.mentionContainer.offsetWidth > document.documentElement.clientWidth) {
          leftPos -= leftPos + this.mentionContainer.offsetWidth - document.documentElement.clientWidth;
        }
      }
      var availableSpaceTop = relativeToPos.top;
      var availableSpaceBottom = document.documentElement.clientHeight - (relativeToPos.top + relativeToPos.height);
      var fitsBottom = this.mentionContainer.offsetHeight <= availableSpaceBottom;
      var fitsTop = this.mentionContainer.offsetHeight <= availableSpaceTop;
      var placement;
      if (this.options.defaultMenuOrientation === "top" && fitsTop) {
        placement = "top";
      } else if (this.options.defaultMenuOrientation === "bottom" && fitsBottom) {
        placement = "bottom";
      } else {
        //it doesnt fit either so put it where there's the most space
        placement = availableSpaceBottom > availableSpaceTop ? "bottom" : "top";
      }
      if (placement === "bottom") {
        topPos = relativeToPos.top + relativeToPos.height;
        if (!fitsBottom) {
          //shrink it to fit
          //3 is a bit of a fudge factor so it doesnt touch the edge of the screen
          this.mentionContainer.style.height = availableSpaceBottom - 3 + "px";
        }
        this.options.mentionContainerClass.split(" ").forEach(function (className) {
          _this4.mentionContainer.classList.add("".concat(className, "-bottom"));
          _this4.mentionContainer.classList.remove("".concat(className, "-top"));
        });
      } else {
        topPos = relativeToPos.top - this.mentionContainer.offsetHeight;
        if (!fitsTop) {
          //shrink it to fit
          //3 is a bit of a fudge factor so it doesnt touch the edge of the screen
          this.mentionContainer.style.height = availableSpaceTop - 3 + "px";
          topPos = 3;
        }
        this.options.mentionContainerClass.split(" ").forEach(function (className) {
          _this4.mentionContainer.classList.add("".concat(className, "-top"));
          _this4.mentionContainer.classList.remove("".concat(className, "-bottom"));
        });
      }
      this.mentionContainer.style.top = "".concat(topPos, "px");
      this.mentionContainer.style.left = "".concat(leftPos, "px");
      this.mentionContainer.style.visibility = "visible";
    }
  }, {
    key: "getTextBeforeCursor",
    value: function getTextBeforeCursor() {
      var startPos = Math.max(0, this.cursorPos - this.options.maxChars);
      var textBeforeCursorPos = this.quill.getText(startPos, this.cursorPos - startPos);
      return textBeforeCursorPos;
    }
  }, {
    key: "onSomethingChange",
    value: function onSomethingChange() {
      var _this5 = this;
      var range = this.quill.getSelection();
      if (range == null) return;
      this.cursorPos = range.index;
      var textBeforeCursor = this.getTextBeforeCursor();
      var textOffset = Math.max(0, this.cursorPos - this.options.maxChars);
      var textPrefix = textOffset ? this.quill.getText(textOffset - 1, textOffset) : "";
      var _getMentionCharIndex = getMentionCharIndex(textBeforeCursor, this.options.mentionDenotationChars, this.options.isolateCharacter, this.options.allowInlineMentionChar),
        mentionChar = _getMentionCharIndex.mentionChar,
        mentionCharIndex = _getMentionCharIndex.mentionCharIndex;
      if (hasValidMentionCharIndex(mentionCharIndex, textBeforeCursor, this.options.isolateCharacter, textPrefix)) {
        var mentionCharPos = this.cursorPos - (textBeforeCursor.length - mentionCharIndex);
        this.mentionCharPos = mentionCharPos;
        var textAfter = textBeforeCursor.substring(mentionCharIndex + mentionChar.length);
        if (textAfter.length >= this.options.minChars && hasValidChars(textAfter, this.getAllowedCharsRegex(mentionChar))) {
          if (this.existingSourceExecutionToken) {
            this.existingSourceExecutionToken.abandoned = true;
          }
          this.renderLoading();
          var sourceRequestToken = {
            abandoned: false
          };
          this.existingSourceExecutionToken = sourceRequestToken;
          this.options.source(textAfter, function (data, searchTerm) {
            if (sourceRequestToken.abandoned) {
              return;
            }
            _this5.existingSourceExecutionToken = null;
            _this5.renderList(mentionChar, data, searchTerm);
          }, mentionChar);
        } else {
          if (this.existingSourceExecutionToken) {
            this.existingSourceExecutionToken.abandoned = true;
          }
          this.hideMentionList();
        }
      } else {
        if (this.existingSourceExecutionToken) {
          this.existingSourceExecutionToken.abandoned = true;
        }
        this.hideMentionList();
      }
    }
  }, {
    key: "getAllowedCharsRegex",
    value: function getAllowedCharsRegex(denotationChar) {
      if (this.options.allowedChars instanceof RegExp) {
        return this.options.allowedChars;
      } else {
        return this.options.allowedChars(denotationChar);
      }
    }
  }, {
    key: "onTextChange",
    value: function onTextChange(delta, oldDelta, source) {
      if (source === "user") {
        this.onSomethingChange();
      }
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(range) {
      if (range && range.length === 0) {
        this.onSomethingChange();
      } else {
        this.hideMentionList();
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu(denotationChar) {
      var selection = this.quill.getSelection(true);
      this.quill.insertText(selection.index, denotationChar);
      this.quill.blur();
      this.quill.focus();
    }
  }]);
}();
Quill.register("modules/mention", Mention);

export { Mention as default };
