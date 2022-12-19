/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: color-scales, theme-color-scales, heatmap-part, theme-heatmap
 * Version: 8.11.0.1934 (2021-12-01)
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2021. All rights reserved.
 */
(function (global, factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var wrapper = function (w) {
			if (!w.document) {
				throw Error('AnyChart requires a window with a document');
			}
			factory.call(w, w, w.document);
			try {
				w.acgraph.isNodeJS = Object.prototype.toString.call(global.process) == '[object process]';
			} catch (e) {}
			return w.anychart;
		};
		module.exports = global.document ? wrapper(global) : wrapper;
	} else {
		factory.call(global, window, document);
	}
})(typeof window !== 'undefined' ? window : this, function (window, document, opt_noGlobal) {
	var $,
		_,
		$_ = this.anychart;
	if ($_ && (_ = $_._)) {
		$ = $_.$;
	} else {
		throw Error('anychart-base.min.js module should be included first. See modules explanation at https://docs.anychart.com/Quick_Start/Modules for details');
		$ = {};
		_ = {};
	}
	if (!_.color_scales) {
		_.color_scales = 1;
		(function ($) {
			var $N, cO, dO, eO, hO;
			$.XN = function (a, b) {
				var c = a.g('fontSize') != b;
				null === b ? delete a.Ld.fontSize : (a.Ld.fontSize = b);
				c && a.B(4);
			};
			$.YN = function (a) {
				var b = {};
				$.Gc(
					a.Oa,
					function (a, d) {
						if ($.n(a)) {
							if ('adjustByHeight' == d || 'adjustByWidth' == d) d = 'adjustFontSize';
							b[d] = this.md(d);
						}
					},
					a
				);
				return b;
			};
			$.ZN = function (a, b) {
				return $.Ak(Eea, a, b || 'clip');
			};
			$N = function () {
				$.Sy.call(this);
			};
			$.aO = function () {
				$.Uy.call(this);
				this.Fa('defaultColorRange');
				$.uu(this, this, this.Cf, this.gg, null, this.Cf);
				this.vc.ua(this, 'mousedown', this.As);
				this.re |= 1024;
				$.Q(this.ta, [
					['length', this.re, 9],
					['align', this.re, 9],
					['colorLineSize', this.re, 9],
				]);
			};
			$.bO = function (a) {
				a.line && (a.line.zl(), a.line.remove(), (a.line = null));
				a.lines && (a.lines.length = 0);
			};
			cO = function (a) {
				if (a.b) {
					var b = a.scale();
					if (b && $.J(b, $.kz)) {
						a.i = {};
						for (var c = a.b, d = c.Ac(); d.advance(); ) {
							var e = ($.n(c.ea) ? d.o(c.ea) : null) || d.get(c.bf ? c.bf.Cl : c.Dr[1]);
							!(e = b.Bn(e)) || (0, window.isNaN)(e.start) || (0, window.isNaN)(e.end) || (a.i[e.sourceIndex] || (a.i[e.sourceIndex] = []), a.i[e.sourceIndex].push(d.la()));
						}
					}
				}
			};
			dO = function (a, b, c) {
				var d = 0;
				b.enabled() && ((d = b.g('length')), (b = b.g('position')), (d = 'center' == b ? Math.max((d - a.g('colorLineSize')) / 2, 0) : $.n(c) ? (0 < c ? ('outside' == b ? 0 : d) : 0 > c ? ('inside' == b ? 0 : d) : d) : d));
				return d;
			};
			eO = function (a) {
				var b = 0,
					c = $.Ar(a, 'marker');
				if (c && c.enabled()) {
					a = a.g('orientation');
					b = 2 * c.g('size');
					var d = c.g('offsetX');
					c = c.g('offsetY');
					d = $.n(d) ? d : 0;
					c = $.n(c) ? c : 0;
					switch (a) {
						case 'top':
							b += c;
							break;
						case 'right':
							b -= d;
							break;
						case 'bottom':
							b -= c;
							break;
						case 'left':
							b += d;
					}
				}
				return b;
			};
			$.fO = function (a, b) {
				if (a.b) {
					var c = a.scale(),
						d = $.Ar(a, 'marker'),
						e = a.b,
						f = e.jd() || (e.zn ? e.zn() : void 0),
						h = d && d.enabled();
					e = e.enabled() && f == c;
					if (a.enabled() && h && c && e && ((c = a.line.qb()), (h = $.Za(a.scale().transform(b, 0.5), 0, 1)), !(0, window.isNaN)(h))) {
						e = a.g('orientation');
						f = d.g('size');
						switch (e) {
							case 'top':
								var k = c.left + c.width * h;
								var l = c.top + c.height + f;
								var m = 180;
								break;
							case 'bottom':
								k = c.left + c.width * h;
								l = c.top - f;
								m = 0;
								break;
							case 'left':
								k = c.left + c.width + f;
								l = c.top + c.height - c.height * h;
								m = 90;
								break;
							case 'right':
								(k = c.left - f), (l = c.top + c.height - c.height * h), (m = -90);
						}
						$.V(d);
						d.sa('rotation', m);
						d.ic({ value: { x: k, y: l } });
						d.da(!1);
						d.W();
						d.Td().visible(!0);
					}
				}
			};
			$.gO = function (a) {
				var b = $.Ar(a, 'marker');
				a.scale() && b && b.Td().visible(!1);
			};
			hO = function () {
				$.aO.call(this);
			};
			$.Dx.prototype.zn = $.ca(28, function () {
				return this.tb;
			});
			var Eea = { Hla: 'always-show', Wma: 'clip', O7: 'drop' };
			$.H($N, $.Sy);
			$N.prototype.$0 = function (a, b, c, d, e) {
				b = Math.round(b.left + a * b.width);
				b = 1 == a ? b + e : b - e;
				a = this.g('length');
				e = this.g('position');
				if ('outside' == e) {
					var f = c.top - d / 2;
					var h = -a;
				} else 'center' == e ? ((f = c.top + (c.height - a) / 2), (h = a)) : 'inside' == e && ((f = c.Ta() + d / 2), (h = a));
				this.path.moveTo(b, f);
				this.path.lineTo(b, f + h);
			};
			$N.prototype.cT = function (a, b, c, d, e) {
				b = Math.round(b.top + b.height - a * b.height);
				b = 1 == a ? b - e : b + e;
				a = this.g('length');
				e = this.g('position');
				'outside' == e ? ((c = c.bb() + d / 2), (d = a)) : 'center' == e ? ((c = c.left + (c.width - a) / 2), (d = a)) : ((c = c.left - d / 2), (d = -a));
				this.path.moveTo(c, b);
				this.path.lineTo(c + d, b);
			};
			$N.prototype.XS = function (a, b, c, d, e) {
				b = Math.round(b.left + a * b.width);
				b = 1 == a ? b + e : b - e;
				a = this.g('length');
				e = this.g('position');
				if ('outside' == e) {
					var f = c.Ta() + d / 2;
					var h = a;
				} else 'center' == e ? ((f = c.top + (c.height - a) / 2), (h = a)) : 'inside' == e && ((f = c.top - d / 2), (h = -a));
				this.path.moveTo(b, f);
				this.path.lineTo(b, f + h);
			};
			$N.prototype.aT = function (a, b, c, d, e) {
				b = Math.round(b.top + b.height - a * b.height);
				b = 1 == a ? b - e : b + e;
				a = this.g('length');
				e = this.g('position');
				if ('outside' == e) {
					var f = c.left - d / 2;
					var h = -a;
				} else 'center' == e ? ((f = c.left + (c.width - a) / 2), (h = a)) : 'inside' == e && ((f = c.bb() + d / 2), (h = a));
				this.path.moveTo(f, b);
				this.path.lineTo(f + h, b);
			};
			$.H($.aO, $.Uy);
			var iO = {};
			$.wq(iO, [[0, 'colorLineSize', $.Fq], $.Z.WJ, $.Z.$J]);
			$.S($.aO, iO);
			$.g = $.aO.prototype;
			$.g.ra = $.Uy.prototype.ra | 1024;
			$.g.ol = function () {
				return new $N();
			};
			$.g.zz = function () {
				this.line || ($.J(this.scale(), $.hz) ? (this.line = $.rk()) : $.J(this.scale(), $.kz) && ((this.line = $.pk()), (this.lines = [])), this.line.zIndex(this.zIndex()), this.line.parent(this.O()), this.line.cursor('pointer'), $.tu(this, this.line));
				return this.line;
			};
			$.g.yr = function (a) {
				this.Wl || ((this.Wl = new $.gy()), $.W(this, 'marker', this.Wl), this.Wl.ic({ value: { x: 0, y: 0 } }), $.L(this.Wl, this.jaa, this));
				return $.n(a) ? (this.Wl.N(a), this.B(1024, 1), this) : this.Wl;
			};
			$.g.jaa = function (a) {
				$.X(a, 1) && this.B(1024, 1);
			};
			$.g.target = function (a) {
				return $.n(a) ? (this.b != a && ((this.b = a), cO(this), $.L(this.b, this.Fka, this)), this) : this.b;
			};
			$.g.Fka = function (a) {
				$.X(a, 132) && cO(this);
			};
			$.g.lq = function (a, b) {
				var c = this.scale(),
					d = {};
				if ($.J(c, $.hz)) {
					var e = (0, window.parseFloat)(b);
					var f = c.uE(e);
					var h = 'number';
				} else if ($.J(c, $.kz)) {
					e = b;
					f = c.Wa().names()[a];
					h = 'string';
					var k = c.Bn(b);
					k && (d.colorRange = { value: { color: k.color, end: k.end, name: k.name, start: k.start, index: k.sourceIndex }, type: '' });
				}
				d.index = { value: a, type: 'number' };
				d.value = { value: f, type: h };
				d.tickValue = { value: e, type: 'number' };
				d.max = { value: $.n(c.max) ? c.max : null, type: 'number' };
				d.min = { value: $.n(c.min) ? c.min : null, type: 'number' };
				d.scale = { value: c, type: '' };
				return $.rv(new $.Hw(d));
			};
			$.g.WQ = function (a, b, c, d, e) {
				c = a.top + a.height + c / 2 - d;
				var f = this.scale();
				if ($.J(f, $.hz))
					this.line
						.moveTo(a.left + b, c)
						.lineTo(a.left - b + a.width, c)
						.lineTo(a.left - b + a.width, c - e)
						.lineTo(a.left + b, c - e)
						.close();
				else if ($.J(f, $.kz)) {
					d = f.qr();
					f = f.Jj();
					for (var h = a.width / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
						var m = d[k];
						m = m.color || f[m.sourceIndex] || f[f.length - 1];
						var p = this.lines[k] ? this.lines[k].clear() : (this.lines[k] = this.line.path()),
							q = a.left + b + h * k;
						p.moveTo(q, c)
							.lineTo(q + h, c)
							.lineTo(q + h, c - e)
							.lineTo(q, c - e)
							.close();
						p.stroke(this.g('stroke'));
						p.fill(m);
					}
				}
			};
			$.g.VQ = function (a, b, c, d, e) {
				c = a.left - c / 2 + d;
				var f = this.scale();
				if ($.J(f, $.hz))
					this.line
						.moveTo(c, a.top + b)
						.lineTo(c, a.top - b + a.height)
						.lineTo(c + e, a.top - b + a.height)
						.lineTo(c + e, a.top + b)
						.close();
				else if ($.J(f, $.kz)) {
					d = f.qr();
					f = f.Jj();
					for (var h = a.height / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
						var m = d[k];
						m = m.color || f[m.sourceIndex] || f[f.length - 1];
						var p = this.lines[k] ? this.lines[k].clear() : (this.lines[k] = this.line.path()),
							q = a.top + b + h * (d.length - 1 - k - 1);
						p.moveTo(c, q)
							.lineTo(c, q + h)
							.lineTo(c + e, q + h)
							.lineTo(c + e, q)
							.close();
						p.stroke(this.g('stroke'));
						p.fill(m);
					}
				}
			};
			$.g.TQ = function (a, b, c, d, e) {
				c = a.top - c / 2 + d;
				var f = this.scale();
				if ($.J(f, $.hz))
					this.line
						.moveTo(a.left + b, c)
						.lineTo(a.left - b + a.width, c)
						.lineTo(a.left - b + a.width, c + e)
						.lineTo(a.left + b, c + e)
						.close();
				else if ($.J(f, $.kz)) {
					d = f.qr();
					f = f.Jj();
					for (var h = a.width / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
						var m = d[k];
						m = m.color || f[m.sourceIndex] || f[f.length - 1];
						var p = this.lines[k] ? this.lines[k].clear() : (this.lines[k] = this.line.path()),
							q = a.left + b + h * k;
						p.moveTo(q, c)
							.lineTo(q + h, c)
							.lineTo(q + h, c + e)
							.lineTo(q, c + e)
							.close();
						p.stroke(this.g('stroke'));
						p.fill(m);
					}
				}
			};
			$.g.UQ = function (a, b, c, d, e) {
				c = a.left + a.width + c / 2 - d;
				var f = this.scale();
				if ($.J(f, $.hz))
					this.line
						.moveTo(c, a.top + b)
						.lineTo(c, a.top - b + a.height)
						.lineTo(c - e, a.top - b + a.height)
						.lineTo(c - e, a.top + b)
						.close();
				else if ($.J(f, $.kz)) {
					d = f.qr();
					f = f.Jj();
					for (var h = a.height / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
						var m = d[k];
						m = m.color || f[m.sourceIndex] || f[f.length - 1];
						var p = this.lines[k] ? this.lines[k].clear() : (this.lines[k] = this.line.path()),
							q = a.top + b + h * (d.length - 1 - k - 1);
						p.moveTo(c, q)
							.lineTo(c, q + h)
							.lineTo(c - e, q + h)
							.lineTo(c - e, q)
							.close();
						p.stroke(this.g('stroke'));
						p.fill(m);
					}
				}
			};
			$.g.jo = function () {
				var a = this.zz(),
					b = this.scale();
				b || this.scale($.iz());
				if ($.J(b, $.hz)) a.clear(), a.stroke(this.g('stroke')), (b = $.Xb(b.Jj())), this.Mb() ? (b.angle = 0) : (b.angle = 90), a.fill(b);
				else if ($.J(b, $.kz)) for (a = 0, b = this.lines.length; a < b; a++) this.lines[a].clear();
				switch (this.g('orientation')) {
					case 'top':
						var c = this.WQ;
						break;
					case 'right':
						c = this.VQ;
						break;
					case 'bottom':
						c = this.TQ;
						break;
					case 'left':
						c = this.UQ;
				}
				a = this.g('stroke');
				a = $.Zb(a);
				a = !a || $.ip(a) ? 0 : a.thickness ? (0, window.parseFloat)(a.thickness) : 1;
				b = 0 == a % 2 ? 0 : 0.5;
				var d = this.ob(),
					e = eO(this),
					f = Math.round(this.g('colorLineSize')),
					h = dO(this, this.Wa(), 1),
					k = dO(this, this.wb(), 1);
				c.call(this, d, b, a, Math.max(h, k, e), f);
			};
			$.g.ob = function () {
				if (!this.Fq || this.J(4)) {
					var a = this.ja();
					if (a) {
						a.top = Math.round(a.top);
						a.left = Math.round(a.left);
						a.width = Math.round(a.width);
						a.height = Math.round(a.height);
						if (this.Mb()) {
							var b = a.width;
							var c = a.height;
						} else (b = a.height), (c = a.width);
						var d = this.Pg(b);
						c = this.width() ? $.M(this.width(), c) : $.Yy(this, a, d);
						var e = this.padding(),
							f = $.M(e.g('top'), a.height),
							h = $.M(e.g('right'), a.width),
							k = $.M(e.g('bottom'), a.height);
						e = $.M(e.g('left'), a.width);
						var l = this.g('align'),
							m;
						this.Mb() ? (d + h + e > b && (d = b - (h + e)), 'left' == l || 'top' == l ? (m = e) : 'right' == l || 'bottom' == l ? (m = b - d - h) : 'center' == l && (m = (b - d - h - e) / 2)) : (d + k + f > b && (d = b - (k + f)), 'left' == l || 'top' == l ? (m = f) : 'right' == l || 'bottom' == l ? (m = b - d - k) : 'center' == l && (m = (b - d - k - f) / 2));
						switch (this.g('orientation')) {
							case 'top':
								var p = a.top + f;
								var q = a.left + m;
								var r = c;
								var t = d;
								break;
							case 'right':
								p = a.top + m;
								q = a.left + a.width - c - h;
								r = d;
								t = c;
								break;
							case 'bottom':
								p = a.top + a.height - c - k;
								q = a.left + m;
								r = c;
								t = d;
								break;
							case 'left':
								(p = a.top + m), (q = a.left + e), (r = d), (t = c);
						}
						this.Fq = new $.I(Math.round(q), Math.round(p), Math.round(t), Math.round(r));
					} else this.Fq = new $.I(0, 0, 0, 0);
					this.I(4);
				}
				return this.Fq;
			};
			$.g.Pg = function (a) {
				return $.M(this.g('length'), a);
			};
			$.g.f0 = function (a, b) {
				var c = this.Wa(),
					d = this.wb(),
					e = c.g('position'),
					f = d.g('position');
				c = dO(this, c);
				var h = dO(this, d);
				d = eO(this);
				'outside' == e ? ('outside' == f ? (e = Math.max(a + c, b + h)) : ((e = 'inside' == f ? Math.max(a + c, b) : Math.max(a + c, b + h)), (d = Math.max(h, d)))) : 'inside' == e ? ('outside' == f ? ((e = Math.max(a, b + h)), (d = Math.max(c, d))) : ((e = 'inside' == f ? Math.max(a, b) : Math.max(a, b + h)), (d = Math.max(c, h, d)))) : 'outside' == e ? ((e = Math.max(a + c, b + h)), (d = Math.max(c, d))) : ((e = 'inside' == f ? Math.max(a + c, b) : Math.max(a + c, b + h)), (d = Math.max(c, h, d)));
				f = this.g('stroke');
				f = !f || $.ip(f) ? 0 : f.thickness ? (0, window.parseFloat)(f.thickness) : 1;
				f = Math.round(this.g('colorLineSize')) + f;
				return e + d + f;
			};
			$.g.scale = function (a) {
				(a = $.aO.u.scale.call(this, a)) || (this.f || ((this.f = $.iz()), this.f.Jj('#fff', '#000')), (a = this.f));
				return a;
			};
			$.g.LT = function () {
				return 48;
			};
			$.g.xg = function (a) {
				$.X(a, 2) && $.bO(this);
				$.aO.u.xg.call(this, a);
			};
			$.g.W = function () {
				if (!this.yc()) return this;
				var a = $.Ar(this, 'marker');
				this.J(1024) && (a && (a.O(this.O()), a.zIndex(this.zIndex() + 1), a.W(), a.Td().visible(!1)), this.I(1024));
				if (a && (this.J(2) && a.O(this.O()), this.J(8))) {
					var b = this.zIndex();
					a.zIndex(b + 1);
				}
				return $.aO.u.W.call(this);
			};
			$.g.As = function (a) {
				if (this.b) {
					var b = this.scale(),
						c = this.b,
						d = c && (c.jd() || (c.zn ? c.zn() : void 0));
					if (this.enabled() && b && c.enabled() && d == b) {
						d = this.line.qb();
						if (this.Mb()) {
							var e = a.clientX;
							var f = d.left + $.ak(this.O().Ia()).x;
							d = (e - f) / d.width;
						} else (e = a.clientY), (f = d.top + $.ak(this.O().Ia()).y), (d = (d.height - (e - f)) / d.height);
						d = b.Jc(d);
						a.metaKey || a.shiftKey || !c.map || c.map.he();
						if ($.J(b, $.kz)) (d = b.Bn(d)), b && c && ((e = this.i[d.sourceIndex]), (b = c.wc()), (b = b.Yc()), 'single' == b.g('hoverMode') ? (this.ag = { X: c, ud: e }) : (this.ag = [{ X: c, ud: e, Jn: e[e.length - 1], Ee: { index: e[e.length - 1], Nf: 0 } }]));
						else if ($.J(b, $.hz)) {
							a = c.Ac();
							e = window.Infinity;
							for (var h = window.NaN, k = b.sh(), l = b.ci(); a.advance(); ) {
								f = a.get(c.bf ? c.bf.Cl : c.Dr[1]);
								f = $.Za(f, k, l);
								var m = Math.abs(d - f);
								e > m && ((e = m), (h = f));
							}
							e = [];
							a = c.Ac();
							for (d = h; a.advance(); ) (f = a.get(c.bf ? c.bf.Cl : c.Dr[1])), (f = $.Za(f, k, l)), f == d && e.push(a.la());
							b && c && ((b = c.wc()), (b = b.Yc()), 'single' == b.g('hoverMode') ? (this.ag = { X: c, ud: e }) : (this.ag = [{ X: c, ud: e, Jn: e[e.length - 1], Ee: { index: e[e.length - 1], Nf: 0 } }]));
						}
					}
				}
			};
			$.g.Cf = function (a) {
				if (this.b) {
					var b = this.scale(),
						c = this.b,
						d = c.jd() || (c.zn ? c.zn() : void 0);
					if (this.enabled() && b && c.enabled() && d == b) {
						d = this.line.qb();
						if (this.Mb()) {
							var e = a.clientX;
							var f = d.left + $.ak(this.O().Ia()).x;
							d = (e - f) / d.width;
						} else (e = a.clientY), (f = d.top + $.ak(this.O().Ia()).y), (d = (d.height - (e - f)) / d.height);
						d = b.Jc(d);
						if ($.J(b, $.kz)) {
							a = b.Bn(d);
							var h = this.i[a.sourceIndex];
							b = c.wc();
							f = b.Yc();
							'single' == f.g('hoverMode') ? (this.ag = { X: c, ud: h }) : (this.ag = [{ X: c, ud: h, Jn: h[h.length - 1], Ee: { index: h[h.length - 1], Nf: 0 } }]);
						} else if ($.J(b, $.hz) && c) {
							f = c.Ac();
							h = window.Infinity;
							for (var k = window.NaN, l = b.sh(), m = b.ci(); f.advance(); ) {
								e = f.get(c.bf ? c.bf.Cl : c.Dr[1]);
								e = $.Za(e, l, m);
								var p = Math.abs(d - e);
								h > p && ((h = p), (k = e));
							}
							h = [];
							f = c.Ac();
							for (d = k; f.advance(); ) (e = f.get(c.bf ? c.bf.Cl : c.Dr[1])), (e = $.Za(e, l, m)), e == d && h.push(f.la());
							b &&
								c &&
								((b = c.wc()),
								(f = b.Yc()),
								'single' == f.g('hoverMode')
									? (this.ag &&
											!(0, $.qD)(
												h,
												function (a) {
													return $.Aa(this.ag.ud, a);
												},
												this
											) &&
											b.dispatchEvent(b.al('hovered', a, [{ X: c, ud: [], Ee: { index: this.ag.ud[this.ag.ud.length - 1], Nf: 0 } }], !1)),
									  (this.ag = { X: c, ud: h }))
									: (this.ag = [{ X: c, ud: h, Jn: h[h.length - 1], Ee: { index: h[h.length - 1], Nf: 0 } }]));
						}
						$.fO(this, d);
					}
				}
			};
			$.g.gg = function () {
				$.gO(this);
				var a = this.b;
				a && (this.Ra = a);
			};
			$.g.remove = function () {
				var a = $.Ar(this, 'marker');
				a && a.remove();
				$.aO.u.remove.call(this);
			};
			$.g.F = function () {
				var a = $.aO.u.F.call(this);
				$.Xq(this, iO, a);
				a.marker = this.yr().F();
				return a;
			};
			$.g.U = function (a, b) {
				$.aO.u.U.call(this, a, b);
				$.Pq(this, iO, a, b);
				this.yr(a.marker);
			};
			$.g.R = function () {
				$.ud(this.Wl, this.f);
				this.f = this.Wl = null;
				$.aO.u.R.call(this);
			};
			$.H(hO, $.aO);
			$.zu(hO, $.aO);
			var jO = $.aO.prototype;
			jO.marker = jO.yr;
			jO = hO.prototype;
			$.F('anychart.standalones.colorRange', function () {
				var a = new hO();
				a.Fa('standalones.colorRange');
				return a;
			});
			jO.padding = jO.padding;
			jO.draw = jO.W;
			jO.parentBounds = jO.ja;
			jO.container = jO.O;
		}.call(this, $));
	}
	if (!_.theme_color_scales) {
		_.theme_color_scales = 1;
		(function ($) {
			$.ra($.fa.anychart.themes.defaultTheme, {
				defaultColorRange: { enabled: !1, stroke: '#B9B9B9', orientation: 'bottom', title: { enabled: !1 }, colorLineSize: 10, padding: { top: 10, right: 0, bottom: 0, left: 0 }, margin: 0, align: 'center', length: '50%', marker: { padding: 3, positionFormatter: $.BN, enabled: !0, disablePointerEvents: !1, position: 'center', rotation: 0, anchor: 'center', offsetX: 0, offsetY: 0, type: 'triangle-down', fill: '#333 0.85', stroke: 'none', size: 7 }, labels: { offsetX: 0, offsetY: 0, fontSize: 11, padding: 0 }, ticks: { stroke: '#B9B9B9', position: 'outside', length: 5, enabled: !0 }, minorTicks: { stroke: '#B9B9B9', position: 'outside', length: 3, enabled: !1 } },
				defaultOrdinalColorScale: {
					inverted: !1,
					ticks: { maxCount: 100 },
					autoColors: function (a) {
						return $.Ol('#90caf9', '#01579b', a);
					},
				},
				defaultLinearColorScale: { maxTicksCount: 1e3, colors: ['#90caf9', '#01579b'], minimumGap: 0, maximumGap: 0 },
			});
			$.ra($.fa.anychart.themes.defaultTheme.standalones, { colorRange: { enabled: !0, zIndex: 50 } });
		}.call(this, $));
	}
	if (!_.heatmap_part) {
		_.heatmap_part = 1;
		(function ($) {
			var kO = function (a) {
					$.OA.call(this, a);
				},
				lO = function (a, b, c) {
					if (c) {
						var d = b == $.hm ? 'normal' : b == $.Ao ? 'hover' : 'select';
						b = a.o(d + 'X');
						var e = a.o(d + 'Y'),
							f = a.o(d + 'Width');
						a = a.o(d + 'Height');
						a = new $.I(b, e, f, a);
						c.rect.Kf(a);
						c.hatchRect.Kf(a);
					}
				},
				mO = function (a, b, c, d, e) {
					$.wB.call(this, a, b, c, d, e);
					$.Qu(this.Pa().labels(), 'same');
					this.Pa().labels().jb(this);
					this.b = $.dm('stroke', 2, !0);
					this.ca.Un('stroke', [1024, 65, 4294967295]);
				},
				nO = function (a, b, c, d, e) {
					if ((a = a.gA([a.Pa().labels, a.kb().labels, a.selected().labels], [], ['label', 'hoverLabel', 'selectLabel'], a.cE(), !0, null, b, c, !1)))
						if (((c = $.Wu(a)), c.adjustByHeight || c.adjustByHeight)) {
							var f = b.o(d + 'Width');
							b = b.o(d + 'Height');
							d = new $.Ju().N(c.padding);
							f -= d.g('left') + d.g('right');
							b -= d.g('top') + d.g('bottom');
							$.pd(d);
							b = $.lv(a, f, b, c.minFontSize, c.maxFontSize, c.adjustByWidth, c.adjustByHeight);
							e = Math.min(e || window.Infinity, b);
						}
					return e;
				},
				oO = function (a, b) {
					$.VB.call(this, !1);
					this.Fa('heatMap');
					this.qe = 'heat-map';
					this.sa('defaultSeriesType', 'heat-map');
					this.Ra = this.Ae(this.g('defaultSeriesType'), a || null, b);
					$.Q(this.ta, [
						[
							'labelsDisplayMode',
							32768,
							1,
							0,
							function () {
								this.Ra.B(256);
							},
						],
					]);
				},
				pO = function (a, b) {
					var c = {},
						d = 0,
						e = a.values(),
						f = [];
					if (e)
						for (var h = 0; h < e.length; h++) {
							var k = e[h],
								l = a.transform(k, 0),
								m = a.transform(k, 1);
							if (!b || (1 >= Math.min(l, m) && 0 <= Math.max(l, m))) (c[$.vo(k)] = d++), f.push(String(k));
						}
					return { values: c, names: f };
				},
				qO = function (a, b) {
					var c = new oO(a, b);
					c.$O(c.uf('colorScale'), c.Zt());
					c.Wg();
					c.$c();
					return c;
				};
			$.H(kO, $.OA);
			$.WG[30] = kO;
			$.g = kO.prototype;
			$.g.type = 30;
			$.g.flags = 512;
			$.g.Lp = ['y'];
			$.g.Fh = { rect: 'rect', hatchRect: 'rect' };
			$.g.tg = function (a, b) {
				var c = this.bd.dd(b);
				lO(a, b, c);
			};
			$.g.MB = function (a, b) {
				var c = a.o('shapes');
				lO(a, b, c);
			};
			$.H(mO, $.wB);
			$.g = mO.prototype;
			$.g.nQ = 1.3e-5;
			$.g.jF = { '%XValue': 'x' };
			$.g.Sa = function (a) {
				var b = this.xa.Sa(a);
				return $.n(a) ? this : b;
			};
			$.g.HQ = function () {
				var a = this.Pa().labels(),
					b = this.kb().labels(),
					c = this.selected().labels(),
					d = a.enabled(),
					e = d || b.enabled(),
					f = d || c.enabled(),
					h = a.$B();
				e = (h || b.$B()) && e;
				f = (h || c.$B()) && f;
				h = d && h;
				var k, l;
				d = k = l = window.NaN;
				$.XN(a, null);
				$.XN(b, null);
				$.XN(c, null);
				if (h || e || f) {
					var m = this.$();
					for (m.reset(); m.advance(); ) m.o('missing') || (h && (d = nO(this, m, $.hm, 'normal', d)), e && (k = nO(this, m, $.Ao, 'hover', k)), f && (l = nO(this, m, $.Bo, 'select', l)));
				}
				h ? $.XN(a, d) : $.XN(a, null);
				e ? $.XN(b, k) : $.XN(b, null);
				f ? $.XN(c, l) : $.XN(c, null);
			};
			$.g.kha = function (a, b, c, d) {
				b = a.o('left');
				var e = a.o('right');
				c = a.o('top');
				var f = a.o('bottom'),
					h = this.b(this, $.hm),
					k = this.b(this, $.Ao),
					l = this.b(this, $.Bo);
				h = $.cc(h) / 2;
				k = $.cc(k) / 2;
				l = $.cc(l) / 2;
				e -= b;
				f -= c;
				a.o('normalX', b + h);
				a.o('normalY', c + h);
				a.o('normalWidth', e - h - h);
				a.o('normalHeight', f - h - h);
				a.o('hoverX', b + k);
				a.o('hoverY', c + k);
				a.o('hoverWidth', e - k - k);
				a.o('hoverHeight', f - k - k);
				a.o('selectX', b + l);
				a.o('selectY', c + l);
				a.o('selectWidth', e - l - l);
				a.o('selectHeight', f - l - l);
				return d;
			};
			$.g.ID = function (a) {
				var b = this.sl(),
					c = this.ab(),
					d = a.get('x'),
					e = a.get('y'),
					f = b.transform(d, 0),
					h = b.transform(d, 1),
					k = c.transform(e, 0);
				c = c.transform(e, 1);
				if ((0 > f && 0 > h) || (0 > k && 0 > c) || (1 < f && 1 < h) || (1 < k && 1 < c)) return !1;
				var l = Math.round(this.Qe(f, !0)),
					m = Math.round(this.Qe(k, !1)),
					p = Math.round(this.Qe(h, !0)),
					q = Math.round(this.Qe(c, !1));
				k = this.i / 2;
				f = this.f / 2;
				e = Math.min(l, p);
				l = Math.max(l, p);
				p = Math.min(m, q);
				m = Math.max(m, q);
				e += Math.ceil(k);
				p += Math.floor(f);
				l -= 1 == h ? Math.ceil(k) : Math.floor(k);
				m -= 1 == c ? Math.floor(f) : Math.ceil(f);
				a.o('left', e);
				a.o('top', p);
				a.o('right', l);
				a.o('bottom', m);
				a.o('x', b.transform(d, 0.5));
				return !0;
			};
			$.g.RI = function (a, b) {
				this.Wj.length = 0;
				this.Wj.push(this.kha);
				var c = this.$();
				for (c.reset(); c.advance(); ) this.QA(c, a, b);
				this.Wj.length = 0;
			};
			$.g.eG = function (a) {
				var b = this.$(),
					c = b.o('left'),
					d = b.o('top'),
					e = b.o('right');
				b = b.o('bottom');
				a = $.Ko(new $.I(c, d, e - c, b - d), a);
				a.x = Math.floor(a.x);
				a.y = Math.floor(a.y);
				return a;
			};
			$.g.sf = function (a, b, c) {
				var d = this.xa.g('labelsDisplayMode'),
					e = this.gA([this.Pa().labels, this.kb().labels, this.selected().labels], [], ['label', 'hoverLabel', 'selectLabel'], this.cE(), !0, null, a, b, !1);
				if (e) {
					var f = b == $.hm ? 'normal' : b == $.Ao ? 'hover' : 'select';
					b = a.o(f + 'X');
					var h = a.o(f + 'Y'),
						k = a.o(f + 'Width');
					f = a.o(f + 'Height');
					h = $.nn(b, h, k, f);
					b = this.Pa().labels();
					'drop' == d && ((k = $.Wu(e)), (k.width = null), (k.height = null), (k = b.measure(e.Bf(), e.ic(), k)), h.left > k.left + 0.5 || h.bb() < k.bb() - 0.5 || h.top > k.top + 0.5 || h.Ta() < k.Ta() - 0.5) && (b.clear(e.la()), (e = null));
					e && ((d = 'always-show' == d ? this.ga : $.ob(this.ga, h)) ? (e.clip(d), c && e.W()) : b.clear(e.la()));
				}
				a.o('label', e);
			};
			$.g.MX = function (a, b, c, d, e, f, h) {
				$.dv(a, $.so([h, 0, f, $.oo, d, 0, c, $.oo, a, $.oo, f || c, $.qo, f, $.po, a, $.qo, c, $.po]));
			};
			$.g.fE = function () {
				var a = this.wc();
				a = $.Ga(a.Yg, a.Zg);
				for (var b = 0, c = 0, d = 0, e = a.length; d < e; d++) {
					var f = a[d];
					if (f && f.enabled()) {
						var h = $.cc(f.g('stroke'));
						f.Mb() ? h > c && (c = h) : h > b && (b = h);
					}
				}
				this.i = b;
				this.f = c;
				mO.u.fE.call(this);
			};
			$.g.J_ = function (a) {
				var b = this.ga,
					c = b.Ta() - this.Op().bottom();
				b = b.Ub() + this.Op().top();
				return $.Za(a, b, c);
			};
			$.g.vS = function () {
				return [this, this.wc()];
			};
			$.g.QT = function () {
				return {};
			};
			$.g.um = function (a, b) {
				var c = { chart: { value: this.wc(), type: '' }, series: { value: this, type: '' }, scale: { value: this.Qa(), type: '' }, index: { value: b.la(), type: 'number' }, x: { value: b.get('x'), type: 'string' }, y: { value: b.get('y'), type: 'string' }, heat: { value: b.get('heat'), type: 'number' }, seriesName: { value: this.name(), type: 'string' } },
					d = this.wc().jd();
				if (d) {
					var e = b.get('heat');
					if ($.J(d, $.kz)) {
						var f = d.Bn(e);
						f && (c.colorRange = { value: { color: f.color, end: f.end, name: f.name, start: f.start, index: f.sourceIndex }, type: '' });
						c.color = { value: d.Oq(e), type: '' };
					}
				}
				return c;
			};
			$.g.He = function (a, b, c) {
				b = mO.u.He.call(this, a, b, c);
				c = $.qv(b);
				var d = b.kg();
				c.x = { value: d.get('x'), type: 'string' };
				c.y = { value: d.get('y'), type: 'string' };
				c.heat = { value: d.get('heat'), type: 'number' };
				var e;
				a = a || this.g('color') || 'blue';
				var f = this.wc().jd();
				f && ((d = d.get('heat')), $.n(d) && (e = f.Oq(d)), (c.scaledColor = { value: e, type: '' }));
				c.colorScale = { value: f, type: '' };
				c.sourceColor = { value: e || a, type: '' };
				return $.rv(b, c);
			};
			var rO = mO.prototype;
			rO.tooltip = rO.Sa;
			$.H(oO, $.VB);
			oO.prototype.ra = $.VB.prototype.ra | -2147483648;
			var sO = {};
			sO['heat-map'] = {
				Db: 30,
				Ib: 2,
				Kb: [
					{ name: 'rect', Pb: 'rect', Wb: 'fill', Xb: 'stroke', Zb: !0, Gb: !1, zIndex: 0 },
					{ name: 'hatchRect', Pb: 'rect', Wb: 'hatchFill', Xb: null, Zb: !0, Gb: !0, zIndex: 1e-6 },
				],
				Nb: null,
				Hb: null,
				Bb: $.XG | 5767168,
				zb: 'y',
				yb: 'y',
			};
			oO.prototype.gj = sO;
			var tO = ['normal', 'hovered', 'selected'],
				uO = ['data', 'tooltip'];
			(function () {
				function a(a, b) {
					for (var c = [], d = 1; d < arguments.length; d++) c.push(arguments[d]);
					d = this.yi(0);
					d = d[a].apply(d, c);
					return $.n(c[0]) ? this : d;
				}
				for (var b = 0; b < tO.length; b++) {
					var c = tO[b];
					oO.prototype[c] = $.qa(a, c);
				}
			})();
			$.Kq(oO, ['fill', 'stroke', 'hatchFill', 'labels', 'markers'], 'normal');
			var vO = {};
			$.vq(vO, 0, 'labelsDisplayMode', $.ZN);
			$.S(oO, vO);
			$.g = oO.prototype;
			$.g.Ps = function () {
				return 'heat-map';
			};
			$.g.Sv = function (a) {
				return this.uj() ? null : oO.u.Sv.call(this, a);
			};
			$.g.Et = function (a, b) {
				return new mO(this, this, a, b, !0);
			};
			$.g.wA = function () {
				return $.et;
			};
			$.g.oD = function () {
				return ['HeatMap chart scale', 'ordinal'];
			};
			$.g.iH = function () {
				return 'ordinal';
			};
			$.g.uu = function () {
				this.Ra.B(1024);
				this.B(8421376, 1);
			};
			$.g.jd = function (a) {
				if ($.n(a)) {
					if (null === a && this.tb) (this.tb = null), this.B(-2147483136, 1);
					else if ((a = $.mt(this.tb, a, null, 48, ['HeatMap chart color scale', 'ordinal-color, linear-color'], this.Tp, this))) {
						var b = this.tb == a;
						this.tb = a;
						this.tb.da(b);
						b || this.B(-2147483136, 1);
					}
					return this;
				}
				return this.tb;
			};
			$.g.Tp = function (a) {
				$.X(a, 6) && this.B(-2147483136, 1);
			};
			$.g.Kl = function (a) {
				var b,
					c = [];
				if ('categories' == a) {
					this.nb();
					var d = this.jd();
					if (d && $.J(d, $.kz)) {
						var e = this.Ra,
							f = d.qr();
						a = 0;
						for (b = f.length; a < b; a++) {
							var h = f[a];
							'default' !== h.name && c.push({ text: h.name, iconEnabled: !0, iconType: 'square', iconFill: h.color, disabled: !this.enabled(), sourceUid: $.oa(this), sourceKey: a, meta: { X: e, scale: d, we: h } });
						}
					}
				}
				return c;
			};
			$.g.Js = function (a) {
				return 'categories' == a;
			};
			$.g.wr = function (a, b) {
				var c = a.o();
				if ('categories' == this.$f().g('itemsSourceMode')) {
					var d = c.X;
					var e = c.scale;
					if (e && d) {
						var f = [];
						c = c.we;
						for (var h = d.Ac(); h.advance(); ) {
							var k = h.get('heat');
							c == e.Bn(k) && f.push(h.la());
						}
						if ((e = $.xo(b.domTarget))) 'single' == this.Yc().g('hoverMode') ? (e.ag = { X: d, ud: f }) : (e.ag = [{ X: d, ud: f, Jn: f[f.length - 1], Ee: { index: f[f.length - 1], Nf: 0 } }]);
					}
				}
			};
			$.g.uq = function (a, b) {
				var c = a.o();
				if ('categories' == this.$f().g('itemsSourceMode')) {
					var d = c.X;
					var e = c.scale;
					if (e && d) {
						var f = c.we,
							h = d.Ac();
						for (c = []; h.advance(); ) {
							var k = h.get('heat');
							f == e.Bn(k) && c.push(h.la());
						}
						if ((e = $.xo(b.domTarget))) 'single' == this.Yc().g('hoverMode') ? (e.ag = { X: d, ud: c }) : (e.ag = [{ X: d, ud: c, Jn: c[c.length - 1], Ee: { index: c[c.length - 1], Nf: 0 } }]);
					}
				}
			};
			$.g.tq = function (a, b) {
				var c = a.o();
				if ('categories' == this.$f().g('itemsSourceMode') && 'single' == this.Yc().g('hoverMode')) {
					var d = $.xo(b.domTarget);
					d && (d.X = c.X);
				}
			};
			$.g.cG = function (a, b) {
				for (var c = [], d = 0, e = a.length; d < e; d++) {
					var f = a[d],
						h;
					f.Ee ? (h = { index: f.Ee.index, distance: f.Ee.Nf }) : (h = { index: window.NaN, distance: window.NaN });
					c.push({ series: f.X, points: b ? [] : f.ud ? $.Ha(f.ud) : [], nearestPointToCursor: h });
				}
				return c;
			};
			$.g.OD = function (a, b, c) {
				a = oO.u.OD.call(this, a, b, c);
				a.series = this;
				return a;
			};
			$.g.$d = function (a) {
				return this.Ra.$d(a);
			};
			$.g.Su = function () {
				return !0;
			};
			$.g.Pk = function () {
				return this.Ra.Pk();
			};
			$.g.UR = function () {
				var a = this.J(327680);
				oO.u.UR.call(this);
				if (a) {
					var b = null,
						c = null,
						d = this.ab(),
						e = this.Qa(),
						f = $.Vt(e),
						h = $.Vt(d);
					if (f || h) {
						if (f) {
							var k = f;
							b = [];
						}
						if (h) {
							var l = h;
							c = [];
						}
						for (var m = this.Ra.Ac(); m.advance(); ) {
							if (f) {
								a = e.Vv(m.get('x'));
								var p = m.get(k);
								$.n(b[a]) || (b[a] = p || m.get('x') || m.get('heat'));
							}
							h && ((a = d.Vv(m.get('y'))), (p = m.get(l)), $.n(c[a]) || (c[a] = p || m.get('y') || m.get('heat')));
						}
						f && (e.Mk = b);
						h && (d.Mk = c);
					}
					this.B(-2147483648);
				}
				if (this.J(-2147483648)) {
					if (this.tb && this.tb.If()) {
						this.tb.zg();
						m = this.Ra.$();
						for (m.reset(); m.advance(); ) this.tb.Wc(m.get('heat'));
						this.tb.Fg();
					}
					this.Ra && this.Ra.B(2048);
					this.B(32768);
					this.I(-2147483648);
				}
			};
			$.g.data = function (a, b) {
				if ($.n(a)) {
					if (a) {
						var c = a.title || a.caption;
						c && this.title(c);
						a.rows && (a = a.rows);
					}
					this.Ra.data(a, b);
					return this;
				}
				return this.Ra.data();
			};
			$.g.Uj = function (a) {
				this.Ra.Uj(a);
				return this;
			};
			$.g.select = function (a) {
				this.Ra.select(a);
				return this;
			};
			$.g.wM = function (a) {
				this.nb();
				var b = 'selected' == a,
					c = pO(this.Qa(), b);
				a = c.values;
				var d = c.names;
				c = pO(this.ab(), b);
				b = c.values;
				var e = c.names;
				c = [];
				for (var f = 0; f < e.length; f++) c.push([e[f]]);
				for (e = this.Ra.Xf(); e.advance(); ) {
					f = a[$.vo(e.get('x'))];
					var h = b[$.vo(e.get('y'))],
						k = String(e.get('heat'));
					(0, window.isNaN)(f) || (0, window.isNaN)(h) || (c[h][f + 1] = k);
				}
				d.unshift('#');
				return { headers: d, data: c };
			};
			$.g.F = function () {
				var a = oO.u.F.call(this),
					b = a.chart;
				delete b.barsPadding;
				delete b.barGroupsPadding;
				delete b.crosshair;
				delete b.defaultSeriesType;
				return a;
			};
			$.g.$O = function (a, b) {
				if ($.ea(a)) var c = b[a];
				else $.z(a) ? (c = $.gt(a, null)) || (c = b[a]) : $.C(a) ? (c = $.gt(a.type, null)) && c.N(a) : (c = null);
				c && this.jd(c);
			};
			$.g.dt = function (a, b, c) {
				this.$O(a.colorScale, b);
				oO.u.dt.call(this, a, b, c);
				$.Pq(this, vO, a);
			};
			$.g.ct = function (a, b, c) {
				oO.u.ct.call(this, a, b, c);
				$.Xq(this, vO, a);
				$.dA(a, 'colorScale', this.jd(), b, c);
			};
			$.g.bP = function (a, b, c) {
				b = {};
				var d = tO,
					e;
				for (e = 0; e < d.length; e++) {
					var f = d[e];
					$.n(a[f]) && (b[f] = a[f]);
				}
				d = uO;
				for (e = 0; e < d.length; e++) (f = d[e]), $.n(a[f]) && (b[f] = a[f]);
				this.Ra.U(b, c);
			};
			$.g.WO = function (a) {
				var b = this.Ra.F(),
					c = tO,
					d;
				for (d = 0; d < c.length; d++) {
					var e = c[d];
					$.n(b[e]) && (a[e] = b[e]);
				}
				c = uO;
				for (d = 0; d < c.length; d++) (e = c[d]), $.n(b[e]) && (a[e] = b[e]);
			};
			$.g.R = function () {
				oO.u.R.call(this);
				this.Ra = null;
			};
			var wO = oO.prototype;
			wO.getType = wO.La;
			wO.xGrid = wO.hm;
			wO.yGrid = wO.jm;
			wO.xAxis = wO.Xh;
			wO.yAxis = wO.jj;
			wO.xScale = wO.Qa;
			wO.yScale = wO.ab;
			wO.hover = wO.Uj;
			wO.select = wO.select;
			wO.unhover = wO.Kd;
			wO.unselect = wO.he;
			wO.data = wO.data;
			wO.colorScale = wO.jd;
			wO.xZoom = wO.Rq;
			wO.yZoom = wO.Sq;
			wO.xScroller = wO.Kp;
			wO.yScroller = wO.Qr;
			wO.annotations = wO.Kk;
			$.Xp['heat-map'] = qO;
			$.F('anychart.heatMap', qO);
		}.call(this, $));
	}
	if (!_.theme_heatmap) {
		_.theme_heatmap = 1;
		(function ($) {
			$.ra($.fa.anychart.themes.defaultTheme, {
				heatMap: {
					annotations: { annotationsList: [], zIndex: 2e3 },
					isVertical: !1,
					scales: [{ type: 'ordinal' }, { type: 'ordinal', inverted: !0 }, { type: 'ordinal-color' }],
					xScale: 0,
					yScale: 1,
					colorScale: 2,
					background: { enabled: !0 },
					xAxes: [{ orientation: 'top' }],
					yAxes: [{}],
					xGrids: [],
					yGrids: [],
					tooltip: {
						enabled: !0,
						title: { enabled: !0, fontSize: 13, fontWeight: 'normal' },
						contentInternal: { fontSize: 11 },
						separator: { enabled: !0 },
						titleFormat: function () {
							return this.name || this.x;
						},
						format: function () {
							if (void 0 !== this.heat) {
								var a = 'Value: ' + this.valuePrefix + this.heat + this.valuePostfix;
								(0, window.isNaN)(+this.heat) || (a += '\nPercent Value: ' + ((100 * this.heat) / this.getStat('sum')).toFixed(1) + '%');
								return a;
							}
							return 'x: ' + this.x + '\ny: ' + this.y;
						},
					},
					legendItem: { iconStroke: null },
					legend: { itemsSourceMode: 'categories' },
					defaultXAxisSettings: { enabled: !0, orientation: 'bottom', ticks: { enabled: !1 }, title: { text: 'X-Axis', padding: 5 }, scale: 0 },
					defaultYAxisSettings: { enabled: !0, orientation: 'left', ticks: { enabled: !1 }, title: { text: 'Y-Axis', padding: 5 }, scale: 1 },
					defaultSeriesSettings: {
						heatMap: {
							normal: {
								fill: function () {
									if (this.colorScale) {
										var a = this.iterator.get('heat');
										a = this.colorScale.valueToColor(a);
									} else a = $.Vl(this.sourceColor, 0.85, !0);
									return a;
								},
								stroke: '1 #ffffff',
								labels: {
									disablePointerEvents: !0,
									enabled: !0,
									fontSize: 11,
									anchor: 'center',
									adjustFontSize: { width: !0, height: !0 },
									minFontSize: 7,
									maxFontSize: 13,
									hAlign: 'center',
									vAlign: 'middle',
									fontWeight: 'normal',
									fontColor: '#212121',
									selectable: !1,
									background: { enabled: !1 },
									padding: { top: 2, right: 4, bottom: 2, left: 4 },
									position: 'center',
									format: function () {
										return $.AN(this.heat);
									},
								},
								markers: { enabled: !1, disablePointerEvents: !1, position: 'center', rotation: 0, anchor: 'center', offsetX: 0, offsetY: 0, size: 4, positionFormatter: $.BN, fill: '#dd2c00', type: 'circle', stroke: 'none' },
								hatchFill: !1,
							},
							hovered: { fill: '#757575', stroke: '2 #ffffff', labels: { fontColor: '#f5f5f5', enabled: null }, markers: { enabled: null, size: 6 }, hatchFill: null },
							selected: { fill: '#333 0.85', stroke: '2 #ffffff', labels: { fontColor: '#fff', enabled: null }, markers: { enabled: null, size: 6, fill: '#333 0.85', stroke: '1.5 #212121' }, hatchFill: null },
							tooltip: {
								enabled: !0,
								title: { enabled: !0, fontSize: 13, fontWeight: 'normal' },
								contentInternal: { fontSize: 11 },
								separator: { enabled: !0 },
								titleFormat: function () {
									return this.name || this.x;
								},
								format: function () {
									if (void 0 !== this.heat) {
										var a = 'Value: ' + this.valuePrefix + this.heat + this.valuePostfix;
										(0, window.isNaN)(+this.heat) || (a += '\nPercent Value: ' + ((100 * this.heat) / this.getStat('sum')).toFixed(1) + '%');
										return a;
									}
									return 'x: ' + this.x + '\ny: ' + this.y;
								},
							},
						},
					},
					labelsDisplayMode: 'drop',
					clip: !0,
					xZoom: { continuous: !0, startRatio: 0, endRatio: 1 },
					yZoom: { continuous: !0, startRatio: 0, endRatio: 1 },
					yScroller: { orientation: 'right', inverted: !0 },
					a11y: { titleFormat: $.SN },
				},
			});
		}.call(this, $));
	}
	$_ = window.anychart;
	$_.$ = $;
	$_._ = _;
});
