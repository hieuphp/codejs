window.jQuery || document.write('<script  async='async'  src="https://rawgit.com/hieuphp/codejs/master/jquery-ui.js"><\/script>');
(function (d, s, a) {
    var b, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(a)) return;
    b = d.createElement(s);
    b.id = a;
    b.src = '//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5';
    fjs.parentNode.insertBefore(b, fjs)
}(document, 'script', 'facebook-jssdk'));
var $ = jQuery.noConflict();
$(document).ready(function () {
    $("#f_chat_name").html(f_chat_name);
    $("#f_enter_1").html(f_chat_star_1);
    $("#f_enter_2").html(f_chat_star_2);
    $("#f_enter_4").html(f_chat_star_4);
    $("#f_chat_source").html("<a target='_blank' href='http://www.xedien1banh.com'><i class='fa fa-question-circle'></i> Live Chat Facebook</a><label>" + f_chat_vs + "</label>");
    setTimeout(function () {
        f_ck_chat()
    }, 100)
});

function fb_e_html(a, b) {
    try {
        document.getElementById(a).innerHTML = b
    } catch (err) {}
}function fb_e_style(a, b) {
    try {
        document.getElementById(a).style.display = b
    } catch (err) {}
}function check_fist_vist_f() {
    var _ = f_read_cki("check_fist_vist_f");
    (0 == _ || "" == _) && (fb_eshow("f-chat-conent"), f_create_cki("check_fist_vist_f", "1", 1), f_create_cki("f_chat_open", "1", 1))
}function chat_f_close() {
    fb_ehide('b-c-facebook'), f_create_cki('chat_f_close', 1, 1), $('body').find('.zopim').remove(), fb_eshow('chat_f_b_smal'), on_playsound('click')
}function chat_f_show() {
    f_create_cki('chat_f_close', '0', 1), fb_eshow('b-c-facebook'), fb_eshow('f-chat-conent'), fb_ehide('chat_f_b_smal')
}function f_bt_start_chat() {
    f_create_cki('f_bt_start_chat', '1', 10), fb_ehide('fb_chat_start'), fb_ehide('fb_alert_num'), on_playsound('click')
}function f_c_start_chat() {
    var t = f_read_cki('f_bt_start_chat');
    0 == t || '' == t ? (fb_eshow('fb_chat_start'), fb_eshow('fb_alert_num'), f_chat_step()) : (fb_ehide('fb_chat_start'), fb_ehide('fb_alert_num'))
}function b_f_chat() {
    var t = f_read_cki('f_chat_open');
    0 == t || '' == t ? (fb_eshow('f-chat-conent'), f_create_cki('f_chat_open', '1', 1)) : (fb_ehide('f-chat-conent'), f_create_cki('f_chat_open', '0', 1)), on_playsound('click')
}function f_ck_chat() {
    check_fist_vist_f();
    f_c_start_chat();
    var t = f_read_cki('chat_f_close');
    if ('' == t || 0 == t || '0' == t) {
        fb_eshow('b-c-facebook'), fb_ehide('chat_f_b_smal');
        var e = f_read_cki('f_chat_open');
        (1 == e || '1' == e) && fb_eshow('f-chat-conent')
    } else fb_eshow('chat_f_b_smal'), fb_ehide('b-c-facebook')
}function f_chat_step() {
    f_enter_chat('1', 3500), f_enter_chat('2', 5500), f_enter_chat('3', 6e3), f_enter_chat('4', 7e3)
}function f_enter_chat(t, e) {
    setTimeout(function () {
        fb_eshow('f_enter_' + t)
    }, e), setTimeout(function () {
        on_playsound('door_bgell')
    }, e), setTimeout(function () {
        fb_e_html('fb_alert_num', t)
    }, e)
}function fb_eshow(t) {
    fb_e_style(t, 'block')
}function fb_ehide(t) {
    fb_e_style(t, 'none')
}function f_create_cki(t, e, n) {
    if (n) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
        var c = '; expires=' + o.toGMTString()
    } else var c = '';
    document.cookie = t + '=' + e + c + '; path=/'
}function f_read_cki(t) {
    for (var e = t + '=', n = document.cookie.split(';'), o = 0; o < n.length; o++) {
        for (var c = n[o];
        ' ' == c.charAt(0);) c = c.substring(1, c.length);
        if (0 == c.indexOf(e)) return c.substring(e.length, c.length)
    }
    return ''
}function on_playsound(t) {
    1 == web_sound && $.ionSound.play(t)
}function ionSound() {
    1 == web_sound && $.ionSound({
        sounds: ['click', 'door_bell'],
        path: f_chat_domain ,
        multiPlay: !0,
        volume: '1.0'
    })
}
var web_sound = !0;
jQuery(document).ready(function (t) {
    t(window).scroll(function () {
        var e = t(window).width();
        680 >= e ? f_create_cki('f_chat_open', '0', 1) : f_create_cki('f_chat_open', '1', 1)
    })
}), setTimeout(function () {
    f_ck_chat()
}, 100);
var $ = jQuery.noConflict();
!function (t) {
    if (!t.ionSound) {
        var e, n, o, c, _ = {},
            f = {},
            a = !1,
            i = function (e) {
                var c, a; - 1 !== e.indexOf(':') ? (c = e.split(':')[0], a = e.split(':')[1]) : c = e, f[c] = new Audio, n = f[c].canPlayType('audio/mp3'), o = 'probably' === n || 'maybe' === n ? _.path + c + '.mp3' : _.path + c + '.ogg', t(f[c]).prop('src', o), f[c].load(), f[c].preload = 'auto', f[c].volume = a || _.volume
            },
            u = function (t) {
                var e, n, o, c;
                if (-1 !== t.indexOf(':') ? (n = t.split(':')[0], o = t.split(':')[1]) : n = t, e = f[n], 'object' == typeof e && null !== e) if (o && (e.volume = o), _.multiPlay || a) {
                    if (_.multiPlay) if (e.ended) e.play();
                    else {
                        try {
                            e.currentTime = 0
                        } catch (i) {}
                        e.play()
                    }
                } else e.play(), a = !0, c = setInterval(function () {
                    e.ended && (clearInterval(c), a = !1)
                }, 250)
            },
            l = function (t) {
                var e = f[t];
                if ('object' == typeof e && null !== e) {
                    e.pause();
                    try {
                        e.currentTime = 0
                    } catch (n) {}
                }
            },
            r = function (t) {
                var e = f[t];
                if ('object' == typeof e && null !== e) {
                    try {
                        f[t].src = ''
                    } catch (n) {}
                    f[t] = null
                }
            };
        t.ionSound = function (n) {
            if (_ = t.extend({
                sounds: ['water_droplet'],
                path: f_chat_domain ,
                multiPlay: !0,
                volume: '0.5'
            }, n), e = _.sounds.length, 'function' == typeof Audio || 'object' == typeof Audio) for (c = 0; e > c; c += 1) i(_.sounds[c]);
            t.ionSound.play = function (t) {
                u(t)
            }, t.ionSound.stop = function (t) {
                l(t)
            }, t.ionSound.kill = function (t) {
                r(t)
            }
        }, t.ionSound.destroy = function () {
            for (c = 0; e > c; c += 1) f[_.sounds[c]] = null;
            e = 0, t.ionSound.play = function () {}, t.ionSound.stop = function () {}, t.ionSound.kill = function () {}
        }
    }
}(jQuery), ionSound();
