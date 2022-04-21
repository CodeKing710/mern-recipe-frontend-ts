"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Handle session saving/requesting
const BE_API_URL = 'http://localhost:4000';
let id;
if (localStorage.getItem('user_id') != null) {
    //Session ID saved proceed with login
    id = localStorage.getItem('user_id');
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield fetch(`${BE_API_URL}/${id}`);
    }))();
}
else {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        let fname = prompt('What is your name?');
        let res = yield fetch(`${BE_API_URL}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fname: fname })
        });
        res = yield res.json();
        localStorage.setItem('user_id', res._id);
        id = res._id;
    }))();
}
//Handle Pageload sequence
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    let name = yield fetch(`${BE_API_URL}/${id}`);
    name = yield name.json();
    console.log(name);
    document.getElementById('hi').innerHTML = `Hi ${name.fname}`;
});
