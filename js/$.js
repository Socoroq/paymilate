"use strict";

function $(selector, parent = document) {

    class Control {

        constructor(selector, parent) {

            this.selector = selector;
            this.parent = parent;

        }

        // debuging
        debug(info = this) {
            console.log(info);
            return this;
        }

        // get elemetns
        getElements(selector, parent = document) {

            this.$e = parent.querySelectorAll(selector);

            return this.$e;

        } 
        // get elemetn
        getElement(selector, parent = document) {

            this.$e = parent.querySelector(selector);

            return this.$e;

        } 
        

        // single event
        event(func, type = 'click') {

            this.getElement(this.selector, this.parent)

            this.$e.addEventListener(type, (e) => {

                this.eventObj = e;

                func()

            });

            return this;
        }

        toggleClass(name = 'active') {
            this.getElements(this.selector, this.parent)

            this.$e.forEach(elem => {
                elem.classList.toggle(name);
            });
        }

        toggleAttr(name, value = null) {
            this.getElements(this.selector, this.parent)

            this.$e.forEach(elem => {
                if (elem.hasAttribute(name)) {
                    elem.removeAttribute(name);
                }
                else if (!elem.hasAttribute(name)) {
                    elem.setAttribute(name, value);
                }
            });
        }
            
        singleToggle(name = 'active', type = 'click') {

            this.getElements(this.selector, this.parent);

            this.$e.forEach(elem => {
                console.log(elem);
                elem.addEventListener('click', (e) => {
                    e.preventDefault();
                    elem.classList.toggle('active');
                });

            });

            return this;
        }

    }

    return new Control(selector, parent);

}

const edit = $('#bp--edit');
const inputs = $('.bp--item');
const group = $('.bp__input-group');
edit.event(() => {
    
    inputs.toggleClass();
    inputs.toggleAttr('disabled');
    group.toggleClass();

});

const sw = $('.switch');
sw.singleToggle();
sw.debug();