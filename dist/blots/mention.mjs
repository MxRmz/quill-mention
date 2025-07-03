import Quill from 'quill';

const Embed = Quill.import("blots/embed");
class MentionEvent extends Event {
    constructor(name, options) {
        super(name, options);
        this.value = {};
        this.event = new Event(name);
    }
}
function isMentionBlotData(data) {
    return (typeof data === "object" &&
        data !== null &&
        "value" in data &&
        typeof data.value === "string" &&
        "denotationChar" in data &&
        typeof data.denotationChar === "string");
}
class MentionBlot extends Embed {
    constructor(scroll, node) {
        super(scroll, node);
        this.mounted = false;
    }
    static create(data) {
        const node = super.create();
        if (!isMentionBlotData(data) || !(node instanceof HTMLElement)) {
            return node;
        }
        const zeroWhiteSpace = document.createTextNode('\u200b');
        node.appendChild(zeroWhiteSpace);
        const denotationChar = document.createElement("span");
        denotationChar.className = "ql-mention-denotation-char";
        denotationChar.innerText = data.denotationChar;
        node.appendChild(denotationChar);
        if (typeof this.render === "function") {
            node.appendChild(this.render(data));
        }
        else {
            const mentionValue = document.createElement("span");
            mentionValue.className = "ql-mention-value";
            mentionValue.innerText = data.value;
            node.appendChild(mentionValue);
        }
        const androidFixSpan = document.createElement("span");
        androidFixSpan.innerHTML = "&nbsp;";
        androidFixSpan.setAttribute("style", "display: inline-block; height: 1px; width: 1px; overflow: hidden;");
        node.appendChild(androidFixSpan);
        return MentionBlot.setDataValues(node, data);
    }
    static setDataValues(element, data) {
        setTimeout(() => {
            const denotationSpan = element.getElementsByClassName("ql-mention-denotation-char")[0];
            if (denotationSpan) {
                denotationSpan.setAttribute("contenteditable", "inherit");
            }
        }, 0);
        const domNode = element;
        Object.keys(data).forEach((key) => {
            domNode.dataset[key] = data[key];
        });
        return domNode;
    }
    update(mutations, context) {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "contenteditable")
                continue;
            setTimeout(() => {
                const sel = document.getSelection();
                if (sel && sel.rangeCount > 0) {
                    this.remove();
                }
            }, 100);
            return;
        }
    }
    static value(domNode) {
        return domNode.dataset;
    }
    attach() {
        super.attach();
        if (!this.mounted) {
            this.mounted = true;
            this.clickHandler = this.getClickHandler();
            this.hoverHandler = this.getHoverHandler();
            this.domNode.addEventListener("click", this.clickHandler, false);
            this.domNode.addEventListener("mouseenter", this.hoverHandler, false);
        }
    }
    detach() {
        super.detach();
        this.mounted = false;
        if (this.clickHandler) {
            this.domNode.removeEventListener("click", this.clickHandler);
            this.clickHandler = undefined;
        }
    }
    getClickHandler() {
        return (e) => {
            const event = this.buildEvent("mention-clicked", e);
            window.dispatchEvent(event);
            e.preventDefault();
        };
    }
    getHoverHandler() {
        return (e) => {
            const event = this.buildEvent("mention-hovered", e);
            window.dispatchEvent(event);
            e.preventDefault();
        };
    }
    buildEvent(name, e) {
        const event = new MentionEvent(name, {
            bubbles: true,
            cancelable: true,
        });
        event.value = Object.assign({}, this.domNode.dataset);
        event.event = e;
        return event;
    }
}
MentionBlot.blotName = "mention";
MentionBlot.tagName = "span";
MentionBlot.className = "mention";

export { MentionBlot, MentionEvent, isMentionBlotData };
//# sourceMappingURL=mention.mjs.map
