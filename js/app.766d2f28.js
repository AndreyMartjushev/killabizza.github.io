! function (t) {
    function e(e) {
        for (var s, n, h = e[0], a = e[1], c = e[2], l = 0, u = []; l < h.length; l++) n = h[l], Object.prototype.hasOwnProperty.call(r, n) && r[n] && u.push(r[n][0]), r[n] = 0;
        for (s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
        for (d && d(e); u.length;) u.shift()();
        return o.push.apply(o, c || []), i()
    }

    function i() {
        for (var t, e = 0; e < o.length; e++) {
            for (var i = o[e], s = !0, h = 1; h < i.length; h++) {
                var a = i[h];
                0 !== r[a] && (s = !1)
            }
            s && (o.splice(e--, 1), t = n(n.s = i[0]))
        }
        return t
    }
    var s = {},
        r = {
            0: 0
        },
        o = [];

    function n(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = s, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) n.d(i, s, function (e) {
                return t[e]
            }.bind(null, s));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "";
    var h = window.webpackJsonp = window.webpackJsonp || [],
        a = h.push.bind(h);
    h.push = e, h = h.slice();
    for (var c = 0; c < h.length; c++) e(h[c]);
    var d = a;
    o.push([63, 1]), i()
}({
    63: function (t, e, i) {
        "use strict";
        i.r(e);
        i(33), i(30), i(32);
        var s = !1;
        var r = {
                rightPressed: !1,
                leftPressed: !1,
                topPressed: !1,
                bottomPressed: !1,
                spacePressed: !1
            },
            o = {
                rightSide: !0,
                leftSide: !1,
                topSide: !1,
                bottomSide: !1
            },
            n = "right",
            h = 0,
            a = !1;

        function c(t) {
            var e = canvas.getBoundingClientRect();
            return {
                x: t.clientX - e.left,
                y: t.clientY - e.top
            }
        }

        function d(t, e, i, s) {
            this.x = t, this.y = e, this.width = i, this.height = s
        }
        var l = new Image;

        function u(t, e, i) {
            this.active = !0, this.speed = t, this.x = e, this.y = i, o.leftSide ? (this.xVelocity = -this.speed, this.yVelocity = 0) : o.rightSide ? (this.xVelocity = this.speed, this.yVelocity = 0) : o.topSide ? (this.xVelocity = 0, this.yVelocity = -this.speed) : o.bottomSide && (this.xVelocity = 0, this.yVelocity = this.speed), this.width = 25, this.height = 25, this.color = "#000", this.inBounds = function () {
                return this.x >= 0 && this.x <= v.width && this.y >= 0 && this.y <= v.height
            }, this.draw = function () {
                S.drawImage(l, this.x, this.y, this.width, this.height)
            }, this.update = function () {
                this.x += this.xVelocity, this.y += this.yVelocity, this.active = this.active && this.inBounds()
            }
        }

        function f(t) {
            this.sound = document.createElement("audio"), this.sound.src = t, this.sound.setAttribute("preload", "auto"), this.sound.setAttribute("controls", "none"), this.sound.style.display = "none", document.body.appendChild(this.sound), this.play = function () {
                this.sound.play()
            }, this.stop = function () {
                this.sound.pause()
            }
        }
        l.src = "images/antidote.png";
        var y = new Image;
        y.src = "images/player.png";
        var p = new f("sounds/hitBulletSound.mp3"),
            g = new f("sounds/deathSound.mp3");
        var w = new Image;

        function x(t, e, i, s) {
            d.call(this, t, e, i, s), this.active = !0, this.age = Math.floor(128 * Math.random()), this.xVelocity = 1, this.yVelocity = 0, k.score >= 10 && (this.xVelocity = 2, this.yVelocity = 1), k.score >= 20 && (this.xVelocity = 3, this.yVelocity = 2), this.inBounds = function () {
                return this.x >= 0 && this.x <= v.width && this.y >= 0 && this.y <= v.width
            }, this.draw = function () {
                S.drawImage(w, this.x, this.y, this.width, this.height)
            }, this.update = function () {
                this.x += this.xVelocity, this.y += this.yVelocity, this.yVelocity = 3 * Math.sin(this.age * Math.PI / 64), this.age++, this.active = this.active && this.inBounds()
            }, this.explode = function () {
                this.active = !1
            }
        }

        function m(t, e) {
            return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y
        }
        w.src = "images/enemy.png", i.d(e, "canvas", (function () {
            return v
        })), i.d(e, "ctx", (function () {
            return S
        })), i.d(e, "playerBullets", (function () {
            return b
        })), i.d(e, "enemies", (function () {
            return P
        })), i.d(e, "newPlayer", (function () {
            return k
        })), i.d(e, "btnPlayImage", (function () {
            return I
        })), i.d(e, "btnPlay", (function () {
            return V
        })), i.d(e, "colorInfo", (function () {
            return A
        })), i.d(e, "colorWarn", (function () {
            return E
        })), i.d(e, "colorBgStartWindow", (function () {
            return L
        })), i.d(e, "colorWhite", (function () {
            return O
        }));
        var v = document.getElementById("canvas"),
            S = v.getContext("2d");
        v.width = window.innerWidth, v.height = window.innerHeight;
        var b = [],
            P = [],
            k = new function (t, e, i, s) {
                d.call(this, t, e, i, s), this.health = 20, this.score = 0, this.frames = 4, this.currentFrame = 0, this.cadr = 0, this.draw = function () {
                    switch (3 == this.currentFrame ? (this.cadr = 32, this.currentFrame = 0) : 32 == this.cadr ? this.cadr = 0 : (this.cadr = this.cadr + 32, this.currentFrame++), r.rightPressed ? S.drawImage(y, this.cadr, 100, 32, 50, this.x, this.y, 32, 50) : r.leftPressed ? S.drawImage(y, this.cadr, 50, 32, 50, this.x, this.y, 32, 50) : r.topPressed ? S.drawImage(y, this.cadr, 150, 32, 50, this.x, this.y, 32, 50) : r.bottomPressed && S.drawImage(y, this.cadr, 0, 32, 50, this.x, this.y, 32, 50), n) {
                        case "right":
                            S.drawImage(y, 0, 100, 32, 50, this.x, this.y, 32, 50);
                            break;
                        case "left":
                            S.drawImage(y, 0, 50, 32, 50, this.x, this.y, 32, 50);
                            break;
                        case "top":
                            S.drawImage(y, 0, 150, 32, 50, this.x, this.y, 32, 50);
                            break;
                        case "bottom":
                            S.drawImage(y, 0, 0, 32, 50, this.x, this.y, 32, 50)
                    }
                    S.font = "16px Arial", S.fillStyle = A, S.fillText("Lives: " + this.health, 15, 20), S.fillText("Score: " + this.score, v.width - 90, 20)
                }, this.shoot = function () {
                    var t = this.midpoint(),
                        e = new u(5, t.x, t.y);
                    b.push(e)
                }, this.midpoint = function () {
                    return {
                        x: this.x + this.width / 2,
                        y: this.y + this.height / 2
                    }
                }, this.explode = function () {
                    this.active = !1
                }
            }(v.width / 2 - 50, v.height / 2 - 30, 32, 32),
            I = new Image;
        I.src = "images/btnDark.png";
        var V = new function (t, e, i, s, r, o, n, h) {
                this.x = t, this.y = e, this.w = i, this.h = s, this.state = r, this.imageShift = 0, this.image = o, this.text = n, this.fontSize = h
            }(v.width / 2 - 90, v.height / 2 - 30, 150, 66, "normal", I, "Play", "25px"),
            A = "#0095DD",
            E = "#ff0000",
            L = "#2F2F2F",
            O = "#ffffff";
        document.addEventListener("keydown", (function (t) {
                "Right" == t.key || "ArrowRight" == t.key ? (r.rightPressed = !0, n = "", o.rightSide = !0, o.leftSide = !1, o.topSide = !1, o.bottomSide = !1) : "Left" == t.key || "ArrowLeft" == t.key ? (r.leftPressed = !0, n = "", o.leftSide = !0, o.rightSide = !1, o.topSide = !1, o.bottomSide = !1) : "up" == t.key || "ArrowUp" == t.key ? (r.topPressed = !0, n = "", o.topSide = !0, o.leftSide = !1, o.rightSide = !1, o.bottomSide = !1) : "down" == t.key || "ArrowDown" == t.key ? (r.bottomPressed = !0, n = "", o.bottomSide = !0, o.topSide = !1, o.leftSide = !1, o.rightSide = !1) : "space" != t.key && 32 != t.keyCode || 0 == h && (k.shoot(), h = 1), 27 === t.keyCode && (s ? s && (s = !1) : s = !0)
            }), !1), document.addEventListener("keyup", (function (t) {
                "Right" == t.key || "ArrowRight" == t.key ? (r.rightPressed = !1, n = "right") : "Left" == t.key || "ArrowLeft" == t.key ? (r.leftPressed = !1, n = "left") : "up" == t.key || "ArrowUp" == t.key ? (r.topPressed = !1, n = "top") : "down" == t.key || "ArrowDown" == t.key ? (r.bottomPressed = !1, n = "bottom") : "space" != t.key && 32 != t.keyCode || (r.spacePressed = !1, h = 0)
            }), !1), document.addEventListener("click", (function (t) {
                var e = c(t);
                e.x > V.x && e.x < V.x + V.w && e.y > V.y && e.y < V.y + V.h && (a = !0)
            }), !1), document.addEventListener("mousemove", (function (t) {
                var e = c(t);
                e.x > V.x && e.x < V.x + V.w && e.y > V.y && e.y < V.y + V.h ? V.fontSize = "26px" : V.fontSize = "25px"
            }), !1),
            function t() {
                requestAnimationFrame(t),
                    function () {
                        S.clearRect(0, 0, v.width, v.height), k.draw(), b.forEach((function (t) {
                            t.draw()
                        })), P.forEach((function (t) {
                            t.draw()
                        })), t = S, e = V, void(a || (t.fillStyle = L, t.fillRect(0, 0, canvas.width, canvas.height), t.font = e.fontSize + " Arial", t.fillStyle = O, t.drawImage(e.image, 0, e.imageShift, e.w, e.h, e.x, e.y, e.w, e.h), t.fillText(e.text, e.x + e.w / 3, e.y + e.h / 2 + 5), t.font = "25px Arial", t.fillText("Press Play to start the game", e.x - 80, e.y - 40), t.fillText("Press Ecs to pause", 20, canvas.height - 25), t.fillText("Use the arrow buttons to move", e.x - 95, e.y + 110), t.fillText("Press Space to shoot", e.x - 45, e.y + 140))), k.health <= 0 && (i = k.score, void 0 === localStorage.record ? localStorage.record = i : localStorage.record < i && (localStorage.record = i), S.font = "30px Arial", S.fillStyle = E, S.fillText("YOU LOOSE", v.width / 2 - 90, v.height / 2 - 30), S.fillText("You score: " + k.score, v.width / 2 - 85, v.height / 2 + 20), S.fillText("You records: " + localStorage.record, v.width / 2 - 115, v.height / 2 + 70), v.classList.remove("canvasLowHealth"), p.stop(), g.play());
                        var t, e;
                        var i;
                        a && s && k.health > 0 && (S.font = "30px Arial", S.fillStyle = E, S.fillText("PAUSE", v.width / 2 - 60, v.height / 2))
                    }(), a && k.health > 0 && (s || function () {
                        if (r.rightPressed && k.x < v.width - k.width ? k.x += 7 : r.leftPressed && k.x > 0 && (k.x -= 7), r.topPressed && k.y > 0 ? k.y -= 7 : r.bottomPressed && k.y < v.height - k.height - 25 && (k.y += 7), b.forEach((function (t) {
                                t.update()
                            })), b = b.filter((function (t) {
                                return t.active
                            })), P.forEach((function (t) {
                                t.update()
                            })), P = P.filter((function (t) {
                                return t.active
                            })), Math.random() < .1) {
                            var t = new x(0, v.height / 4 + Math.random() * v.height / 2, 15, 15);
                            P.push(t)
                        }
                        k.health <= 10 && v.classList.add("canvasLowHealth"), b.forEach((function (t) {
                            P.forEach((function (e) {
                                m(t, e) && (e.explode(), t.active = !1, k.score++)
                            }))
                        })), P.forEach((function (t) {
                            m(t, k) && (t.explode(), k.explode(), k.health--, p.play())
                        }))
                    }())
            }()
    }
});
//# sourceMappingURL=app.766d2f28.js.map