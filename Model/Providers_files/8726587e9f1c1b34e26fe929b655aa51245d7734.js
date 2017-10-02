(function (window, booking) {
    "use strict";
    if (booking.jstmpl)
        return;

    var jstmpl,
        jstmpl_setup,
        VAR_STACK,
        set_var_stack,
        queueVS = [],
        MAX_LEVEL = 42,
        translations,
        Template,
        get_var,
        get_text,
        get_var_plural,
        get_number_var,
        interpolate,
        _get_var,
        get_v,
        _interpolate,
        _interpolated_tags,
        _interpolate_tags,
        get_if_var,
        get_trans,
        set_var,
        perl_bool,
        perl_not,
        parse_float,
        repeat_array,
        static_hostname,
        is_empty_object,
        seq,
        rand,
        defined,
        length,
        substr,
        sprintf,
        ucfirst,
        lcfirst,
        ucfirstword,
        time,
        in_array,
        _in,
        templates,
        filters,
        log;

    Template = function (closure, name) {
        this.closure = closure;
        this.name = name;
    };

    get_var = function get_var(name) {
        var res = [];

        _get_var(res, name, 0);

        return res.length === 1 ? res[0] : res.join('');
    };

    get_number_var = function get_number_var(value, unused, base_var) {
        // here we accept the empty string as well
        if (/^[0-9]+$/.test(value)) {
            return value;
        } else if (value === '') {
            return null;
        }
        log(sprintf("Attempting to use non-numeric value '%s' for translation tag '%s'", value, base_var));
        return 0;
    };

    log = function log(msg, tmpl){
        msg = msg || "BHCJS runtime issue";
        if( booking && booking.env && booking.env.b_dev_server ) {
            tmpl && console.warn('Template: ' + tmpl);
            console.error(msg);
        } else {
            jstmpl.error_out && window.onerror && window.onerror('JSTMPL:: ' + msg, tmpl || 'jstmpl', 0);
        }
    };

    interpolate = function interpolate(value) {
        if (typeof value !== 'string' || value.indexOf('{') === -1)
            return value;

        var res = [];

        _interpolate(res, value, 0);

        return res.length === 1 ? res[0] : res.join('');
    };

    _interpolate_tags = new Array(MAX_LEVEL);

    _interpolate = function _interpolate(res, value, depth) {
        var curr = 0;
        var length = value.length;

        for (;;) {
            var start = value.indexOf('{', curr);

            if (start === -1) {
                // no more variable markers, concatenate trailing chars and end
                if (curr === 0)
                    res.push(value);
                else
                    res.push(value.substring(curr));
                break;
            }
            else if (start !== curr) {
                // concatenate the chars before the '{'
                res.push(value.substring(curr, start));
                curr = start;
            }

            var end = value.indexOf('}', start + 1);

            if (end === start + 1) {
                res.push('{}');
                curr = end + 1;
                continue;
            }

            if (end === -1) {
                res.push(value.substring(curr));
                break;
            }

            for (var span = start + 1; span < end; ++span) {
                var c = value.charAt(span).toLowerCase();

                if (!((c >= '0' && c <= '9') || (c >= 'a' && c <= 'z') || c == '_' || c == '/' || c == '-'))
                    break;
            }

            // don't check for '\x{...}' as the Perl version does
            if (span === end) {
                _get_var(res, value.substring(start + 1, end), depth + 1);
                curr = end + 1;
            } else {
                res.push(value.substring(start, span));
                curr = span;
            }
        }
    };

    _get_var = function _get_var(res, name, depth) {
        if (depth > 0) {
            if (depth >= MAX_LEVEL) {
                console.warn("Detected excessive recursion in tag sequence: %s, returning '%s'", interpolate_tags.slice(1, MAX_LEVEL).join(" "), value);
                res.push(name);
                return;
            } else if (name === _interpolate_tags[depth - 1]) {
                console.warn("Detected self-referential tag '%s', returning '%s'", value, value);
                res.push(name);
                return;
            }
        }

        _interpolate_tags[depth] = name;

        for (var i = 0, l = VAR_STACK.length; i < l; ++i) {
            // TODO ?? should we go through the prototype
            if (name in VAR_STACK[i]) {
                var v = VAR_STACK[i][name];

                if (typeof v === 'string' && v.indexOf('{') !== -1)
                    _interpolate(res, v, depth + 1);
                else
                    res.push(v);

                return;
            }
        }

        if (translations && name in translations) {
            v = translations[name];

            if (typeof v === 'string' && v.indexOf('{') !== -1)
                _interpolate(res, v, depth + 1);
            else
                res.push(v);

            return;
        }

        res.push('');
    };

    get_v = function get_v(name) {
        for (var i = 0, l = VAR_STACK.length; i < l; ++i) {
            // TODO ?? should we go through the prototype
            if (name in VAR_STACK[i]) {
                return VAR_STACK[i][name];
            }
        }

        return '';
    };

    get_if_var = function get_if_var(name) {
        for (var i = 0, l = VAR_STACK.length; i < l; ++i) {
            // TODO ?? should we go through the prototype
            if (name in VAR_STACK[i]) {
                var v = VAR_STACK[i][name];
                return v instanceof Array ? v.length :
                       v === '0'          ? 0        :
                                            v;
            }
        }

        if (translations && name in translations)
            return translations[name];

        return false;
    };

    perl_bool = function perl_book(v) {
        return v === '0' ? '' :
               v         ? 1  :
                           '';
    };

    perl_not = function perl_not(v) {
        return v  === '0' ? 1 :
               !v         ? 1 :
                            '';
    };

    parse_float = function parse_float(s) {
        var v = parseFloat(s);

        return isFinite(v) ? v : 0;
    };

    set_var = function set_var(name, value) {
        VAR_STACK[VAR_STACK.length - 2][name] = value;
    };

    is_empty_object = function is_empty_object(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    };

    seq = function seq(from, to, step) {
        var result = [];
        from = from || 0;
        to = to || 0;
        step = Math.abs(step || 1);

        if (typeof from === 'string' && !isNaN(from)) {
            from = Number(from);
        }

        if (typeof to === 'string' && !isNaN(to)) {
            to = Number(to);
        }

        if (/^[A-Za-z]$/.exec(from) || /^[A-Za-z]$/.exec(to)) {
            if (from.length !== 1 || to.length !== 1 ||
                    (/[a-z]/.exec(from) && !/[a-z]/.exec(to)) ||
                    (/[A-Z]/.exec(from) && !/[A-Z]/.exec(to))) {
                log("Invalid range '" + from + "'-'" + to + "' in seq()");
            }

            from = from.charCodeAt(0);
            to = to.charCodeAt(0);

            if (from <= to) {
                while (from <= to) {
                    result.push({ value: String.fromCharCode(from) });
                    from += step;
                }
            } else {
                while (from >= to) {
                    result.push({ value: String.fromCharCode(from) });
                    from -= step;
                }
            }
        } else if (from <= to) {
            while (from <= to) {
                result.push({ value: from });
                from += step;
            }
        } else {
            while (from >= to) {
                result.push({ value: from });
                from -= step;
            }
        }

        return result;
    };

    repeat_array = function repeat_array(array, count) {
        var res = [];

        for (var i = 0; i < count; ++i) {
            for (var j = 0, l = array.length; j < l; ++j) {
                res.push(array[j]);
            }
        }

        return res;
    };

    ucfirst = function ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.substr(1);
    };

    lcfirst = function lcfirst(str) {
        return str.charAt(0).toLowerCase() + str.substr(1);
    };

    ucfirstword = function ucfirstword(str) {
        var words = str.split(/\s/);

        for (var i = 0, l = words.length; i < l; ++i) {
            words[i] = ucfirst(words[i]);
        }

        return words.join(' ');
    };

    in_array = function in_array(v) {
        var value = v.toString();

        for (var i = 1, l = arguments.length; i < l; ++i) {
            if (arguments[i].toString() === value)
                return 1;
        }

        return 0;
    };

    rand = function rand(range) {
        if (range === undefined) {
            return Math.random();
        } else {
            return Math.random() * range;
        }
    };

    get_trans = function get_trans(_text, _get, _set, _variable_or_number) {
        log("to use TMPL_TRANS/TMPL_TRANSLIST, pass 'get_trans' to setup()");
    };

    get_text = function get_text(_text, _var, _variable_or_number) {
        log("to use TMPL_TEXT, pass 'get_text' to setup()");
    };

    get_var_plural = function get_text(_text, _variable_or_number) {
        log("to use TMPL_VAR, with N attribute, pass 'get_var_plural' to setup()");
    };

    static_hostname = function static_hostname(file, no_counter, no_proto, bad_empty) {
        log("to use TMPL_STATIC_URL/TMPL_SCRIPT_URL, pass 'get_static_hostname' to setup()");
    };

    substr = function substr(str, start, len){
      return str.substr(start, len);
    };

    sprintf = function sprintf() {
      var args = [].slice.apply(arguments),
          str = args.splice(0,1)[0],
          rep;

      while(rep = args.splice(0,1)[0]){
        str = str.replace(/%\w/, rep);
      }
      return str;
    };

    defined = function defined(_var) {
      return _var !== undefined ? 1 : 0;
    };

    time = function time() {
      return +new Date()/1000;
    };

    set_var_stack = function set_var_stack(vs) {
      VAR_STACK = vs;
      return vs;
    }

    filters = {};
    templates = {};

    Template.prototype = {
        render: function (data, trans) {
          data = data || {};
          var res = '';

          queueVS.push(VAR_STACK);
          VAR_STACK = [{}, data];
          try {
            res = this.closure(VAR_STACK);
          } catch (e) { log(e, this.name); }
          VAR_STACK = queueVS.pop();

          return res;
        },
        fn: {
          FILTERS: filters,
          F: filters,
          GET_VAR: get_var,
          GET_V: get_v,
          GET_IF_VAR: get_if_var,
          INTERPOLATE: interpolate,
          GET_TRANS: get_trans,
          SET_VAR: set_var,
          GET_TEXT: get_text, //deprecated - here to pass tests
          PERL_BOOL: perl_bool,
          PERL_NOT: perl_not,
          PARSE_FLOAT: parse_float,
          REPEAT_ARRAY: repeat_array,
          STATIC_HOSTNAME: static_hostname,
          IS_EMPTY_OBJECT: is_empty_object,
          MB: get_var,
          MC: get_v,
          MD: get_if_var,
          ME: get_trans,
          MF: get_text,
          MG: interpolate,
          MI: parse_float,
          MJ: perl_bool,
          MK: perl_not,
          ML: repeat_array,
          MN: set_var,
          MO: get_number_var,
          VP: get_var_plural,
          SV: set_var_stack,
          seq: seq,
          defined: defined,
          substr: substr,
          sprintf: sprintf,
          ucfirst: ucfirst,
          lcfirst: lcfirst,
          ucfirstword: ucfirstword,
          rand: rand,
          time: time,
          in_array: in_array
        }
    };

    jstmpl_setup = function (args) {
        var extend = function (a, b) {
            if (!b)
                return;

            for (var k in b)
                if (b.hasOwnProperty(k))
                    a[k] = b[k];
        };

        extend(Template.prototype.fn, args.fn);
        extend(Template.prototype.fn.FILTERS, args.filters);
        if ('get_trans' in args)
             Template.prototype.fn.GET_TRANS = Template.prototype.fn.ME = args.get_trans;
        if ('get_text' in args)
             Template.prototype.fn.GET_TEXT = Template.prototype.fn.MF = args.get_text;
        if ('get_var_plural' in args)
             Template.prototype.fn.GET_VAR_PLURAL = Template.prototype.fn.VP = args.get_var_plural;
        if ('get_static_hostname' in args)
             Template.prototype.fn.STATIC_HOSTNAME = args.get_static_hostname;
        if ('get_csrf_token' in args)
             Template.prototype.fn.CSRF_TOKEN = args.get_csrf_token;
        if ('get_date' in args)
             Template.prototype.fn.DATE = args.get_date;
        if ('get_helper' in args)
             Template.prototype.fn.HELPER = args.get_helper;
        if ('translations' in args)
            translations = args.translations;
    }

    jstmpl = function (name, template) {
        if (template === undefined) {
          return name in templates ? templates[name] : templates['__no_op__'];
        } else {
          var tmpl = new Template(template, name);
          templates[name] = tmpl;
          return tmpl;
        }
    };

    jstmpl.setup = jstmpl_setup;
    jstmpl.fn = Template.prototype.fn;

    jstmpl('__no_op__', function(){ return log('JSTMPL -> TMPL not found') || ''; } );

    booking.jstmpl = jstmpl;
}(window, window.booking || {}));

(function(booking) {
    booking.jstmpl = booking.jstmpl || {
        setup: function() {
            // eslint-disable-next-line no-console
            console.error('This is a mocked method. It\'s needed for client BHC templates to work, and doesn\'t need to work while we don\'t use them');
        }
    };

    if (booking.jstmpl.translations)
        return;

    var get_booking_trans,
        get_booking_text,
        _get_booking_trans,
        _translate,
        _exceptions,
        cdf,
        jstmpl = booking.jstmpl,
        env = booking.env;

    var get_booking_trans = function(s, get_var, set_var, count_var) {
        var n = 0;
        var exists_count_var = !!((count_var === 0) || count_var); // `count_var` can be 0 as well

        if (exists_count_var) {
            if (/^[0-9]+$/.test(count_var)) {
                n = parseInt(count_var, 10);
            } else {
                var rcv = get_var(count_var);

                if (!/^[0-9]+$/.test(rcv)) {
                    // eslint-disable-next-line no-console
                    console.warn('Trying to use a non-numeric template var for exception tool on copy \'%s\'', s);
                } else {
                    n = rcv;
                }
            }

            set_var('num', n);
        }

        if (env && env.global_translation_tags) {
            for (var prop in env.global_translation_tags) {
                if (!get_var(prop)) {
                    set_var(prop, env.global_translation_tags[prop]);
                }
            }
        }

        return _get_booking_trans(s, get_var, set_var, n, exists_count_var);
    };

    var _get_booking_trans = function(s, get_var, set_var, n, exceptions) {
        var parts = s.split('/');
        var trans;

        if (parts[0] === '') {
            parts.shift();
        }

        if (parts.length == 1) {
            var part = parts[0];
            if (part.charAt(0) === '{' && part.charAt(part.length - 1) === '}') {
                part = part.substr(1, part.length - 2);
            }

            parts = ['private', part, 'name'];
        }

        for (var i = 0, max = parts.length; i < max; ++i) {
            var part = parts[i];

            if (part.charAt(0) === '{' && part.charAt(part.length - 1) === '}') {
                parts[i] = get_var(part.substr(1, part.length - 2));
            }
        }

        trans = _translate(parts[0], parts[1], parts[2]);
        if (exceptions) {
            trans = _exceptions(parts, n) || trans;
        }

        if (trans) {
            var placeholders = trans.match(/{.*?}/g);
            if (!placeholders) {
                return trans;
            }

            for (var i = 0, max = placeholders.length; i < max; ++i) {
                var pl = placeholders[i], replacement;

                if (pl.indexOf('/') === -1) {
                    replacement = get_var(pl.substr(1, pl.length - 2));
                } else {
                    replacement = _get_booking_trans(pl, get_var, set_var, n, exceptions);
                }

                // replace all substrings
                trans = trans.split(pl).join(replacement);
            }
        }

        return trans || '';
    };

    var _translate = function(group, id, name) {

        if (group === 'private') {
            var value = ((cdf && cdf['private']) || {})[id];

            /**
             *
             * If a copy experiment is set up for the given tag, the
             * value will be not a string, but an object containing
             * experiment_hash and value.
             *
             * Stage 0 for that experiment is tracked in backed, here we need top
             * track stage 1.
             *
             **/

            if (value && typeof value !== 'string' && value.experiment_hash && value.value) {
                booking.et && booking.et.stage(value.experiment_hash, 1);
                value = value.value;
            }

            return value;
        } else {
            return (((cdf && cdf[group]) || {})[id] || {})[name || 'name'];
        }
    };

    var _exceptions = function(parts, n) {
        var suffix = '', prefix = 'language_exception_' + parts[1] + '_';

        if (parts[0] !== 'private') {
            suffix = '_' + parts[2];
        }

        var attempts = [n];

        if (n >= 100) {
            var l = n % 100;
            if (l < 10) {
                attempts.push('*0');
            }
            attempts.push('*' + l);
        }
        if (n >= 10) {
            attempts.push('*' + (n % 10));
        }

        for (var i = 0, max = attempts.length; i < max; ++i) {
            var trans = _translate(parts[0], prefix + attempts[i] + suffix, parts[2]);

            if (trans) {
                return trans;
            }
        }

        return '';
    };

    var get_booking_text = function(s, count_var, plural_text) {
        if (plural_text)
            throw 'Can\'t use TMPL_TEXT on client-side templates';

        return get_booking_trans(
            s,
            jstmpl.fn.GET_VAR,
            jstmpl.fn.SET_VAR,
            count_var
        );
    };

    jstmpl.setup({
        get_trans: get_booking_trans,
        get_var_plural: get_booking_text,
        get_text: get_booking_text
    });

    var _fakeStack = function(_vars) {
        var _vars = _vars || {};
        return {
            gv: function(name) {
                return typeof _vars[name] !== 'undefined' ? _vars[name] : '';
            },
            sv: function(name, value) {
                _vars[name] = value;
            }
        };
    };

    jstmpl.translations = function(s, count_var, _vars) {
        var _fake = _fakeStack(_vars);
        return get_booking_trans(s, _fake.gv, _fake.sv, count_var);
    };


    jstmpl.translations.set = function(v) {
        if (v) {
            cdf = v;
            jstmpl.setup({
                translations: v['private'] || {}
            });
        }

        return cdf;
    };
}(window.booking || {}));

(function () {
    if (booking.jstmpl.fn.track_experiment)
        return;

    var track_experiment,
        experiment_variant,
        track_experiment_stage,
        track_custom_goal;

    track_experiment = function (hash){
        return booking.et.track(hash);
    }

    track_experiment_stage = function (hash, stage) {
        return booking.et.stage(hash, stage);
    };

    experiment_variant = function (hash) {
        return booking.et.track(hash);
    };

    track_custom_goal = function(hash, goalId) {
        return booking.et.customGoal(hash, goalId);
    }

    booking.jstmpl.setup({
        fn: {
            track_experiment:   track_experiment,
            track_experiment_stage:   track_experiment_stage,
            experiment_variant: experiment_variant,
            track_custom_goal: track_custom_goal
        }
    });

}());

(function (booking) {
    "use strict";
    if (!booking.jstmpl)
        return;

    var html,
        html_replace,
        break_lines,
        break_lines_replace,
        break_para,
        break_para_replace,
        text2entites,
        text2html,
        text2entities,
        text2para,
        html2para,
        js,
        js_replace,
        jsbool,
        jsstr,
        url,
        nospace,
        br,
        encode_entities,
        json,
        json_replace,
        encode_entities_replace,
        trim,
        html_entity_map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        },
        js_replace_map = {
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            "'":  "\\'",
            '\"': '\\"',
            '<': '\\u003c',
            '>': '\\u003e',
            '\\': "\\\\",
            '&#39;':  '&#39;',
            '&quot;': '&quot;'
        },
        json_replace_map = {
            ">": '\\u003e',
            "<": '\\u003c'
        };

    html_replace = function (s) { return html_entity_map[s]; };
    html = function (s) {
        return String(s).replace(/&(?!amp;|lt;|gt;|quot;|#39;|#47;)/g, '&amp;')
                        .replace(/[<>"'\/]/g, html_replace);
    };

    break_lines_replace = function (s, s1) {
        return '\n<br \/>' + (s1 ? '\n<br \/>' : '');
    };
    break_lines = function (s) {
        return s.replace(/(?:\r?\n)((?:\r?\n)*)/, break_lines_replace);
    };

    break_para_replace = function (s, s1) {
        return s1 ? "<\/p>\n<p>" : "\n<br \/>";
    };
    break_para = function (s) {
        return s.replace(/(?:\r?\n)((?:\r?\n)*)/, break_para_replace);
    };

    text2entities = function (s) {
        return break_lines(encode_entities(s));
    };

    text2html = function (s) {
        return break_lines(html(s));
    };

    text2para = function (s) {
        return '<p>' + break_para(html(s)) + '</p>';
    };

    html2para = function (s) {
        return '<p>' + break_para(String(s)) + '</p>';
    };

    js_replace = function (s) { return js_replace_map[s]; };
    js = function (s) {
        return String(s).replace(/([\b\f\n\r\t'"\\<>]|&quot;|&#39;)/g, js_replace);
    };

    jsbool = function (s) {
        return booking.jstmpl.fn.PERL_BOOL(s) ? 'true' : 'false';
    };

    jsstr = function (s) {
        if (s === null || s === undefined)
            return '';
        else
            return "'" + js(s) + "'";
    };

    url = function (s) {
        return encodeURIComponent(s).replace(/[!'()]/g, escape)
                                    .replace(/\*/g, "%2A");
    };

    nospace = function (s) {
        return String(s).replace(/ /g, '');
    };

    br = function (s) {
        return String(s).replace(/\n/g, '<br />');
    };

    encode_entities_replace = function (s) {
        if (s in html_entity_map)
            return html_entity_map[s];
        else
            return '&#' + s.charCodeAt(0) + ';';
    };
    encode_entities = function (s) {
        // &<>"'/, code points > 127, code points < 32 except for tab and newlines
        return String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f&<>"'\/\u00A0-\u9999<>]/g, encode_entities_replace);
    };

    trim = function (s) {
        return String(s).replace(/^\s+|\s+$/g, '');
    };

    json_replace = function(s) {
            return json_replace_map[s];
    };
    json = function (s) {
        return JSON.stringify(s).replace(/[<>]/g, json_replace);
    };

    booking.jstmpl.setup({
        filters: {
            html: html,
            text2entities: text2entities,
            text2html: text2html,
            text2para: text2para,
            html2para: html2para,
            js: js,
            jsbool: jsbool,
            jsstr: jsstr,
            url: url,
            nospace: nospace,
            br: br,
            entities: encode_entities,
            json: json,
            trim: trim
        }
    });
})(window.booking || {});

(function (booking) {
    "use strict";

    var _hash_string,
        _get_svg_fallback,
        get_static_hostname,
        get_date,
        get_helper,
        index,
        array_length,
        escape_html,
        escape_entities,
        svg_icon,
        icon_fn;

    _hash_string = function (str) {
        var hash = 0, i, chr, len;
        if (!str || str.length === 0) { return hash };
        for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    get_static_hostname = function get_static_hostname(file, no_counter, no_proto, bad_empty) {
        var _domain = '',
            proto = no_proto ? '' : document.location.protocol;

        if (!booking || !booking.env || !booking.env.static_hostnames || !booking.env.static_hostnames.length) {
            _domain =  proto + '//q.bstatic.com';
        } else if (booking.env.static_hostnames.length === 1 || !file) {
            _domain = booking.env.static_hostnames[0];
        } else if (!/https?:/.test(file.toString())){
            var hash = _hash_string(file.toString()),
                index = Math.abs(hash) % booking.env.static_hostnames.length;
            _domain = booking.env.static_hostnames[index];
        }
        if (no_proto) {
            _domain = _domain.replace(/^https?:/,'');
        }
        return _domain + file;
    };

    array_length = function array_length(array) {
        return Array.isArray(array) ? array.length : 0;
    };


    get_date = function get_date(value, format, begin_marker, end_marker, value_until) {
        var interpolate = B.require('utils/string-interpolate');
        var locale_format = B.require('formatting/date').locale_format;

        if (!value) {
            return '';
        }

        var
            values = value.split(' ').slice(0, 2),
            values_until = (value_until || '').split(' ').slice(0, 2),
            date_params = {
                date: values[0],
                time: values[1],
                date_until: values_until[0],
                time_until: values_until[1],
                format: format
            };

        return interpolate(locale_format(date_params), {
            begin_marker: begin_marker,
            end_marker: end_marker
        });

    };

    escape_html = function escape_html (str) {
        return booking.jstmpl.fn && booking.jstmpl.fn.FILTERS && booking.jstmpl.fn.FILTERS.html ?
            booking.jstmpl.fn.FILTERS.html(str) : '';
    };

    escape_entities = function escape_entities (str) {
        return booking.jstmpl.fn && booking.jstmpl.fn.FILTERS && booking.jstmpl.fn.FILTERS.entities ?
            booking.jstmpl.fn.FILTERS.entities(str) : '';
    };

    index = function index (str, substr, position) {
        if (typeof str === 'string' && typeof substr === 'string') {
            return str.indexOf(substr, position || 0);
        }
        return -1;
    };

    _get_svg_fallback = function _get_svg_fallback(element, classname) {
        return '<img src="' + element.src + '" class="' + classname + ' -fallback" />';
    }

    // This is the  implementation for client-side templates.
    // We fetch an existing <svg> element matching the given name, clone it and reset the attributes.
    // This means the icon must be already present in the page - if not, '' should be used,
    // which returns the final output string.
    // TODO: pre-compile icon templates in the same fashion as the backend code
    svg_icon = function svg_icon (name, params) {
        var height    = params.height;
        var width     = params.width;
        var classname = params['class'] || "";
        var name_flat = name.replace(/\//g, '-');

        var svg = document.querySelector('.bk-icon.-' + name_flat);

        if (!name || !params || !svg) return;

        classname = "bk-icon -" + name_flat + (classname ? " " + classname : "");

        // This condition has been introduced to make fallback for IE8 work.
        // We should remove it whenever we stop supporting legacy browsers.
        if (svg.tagName === 'IMG') {
            return _get_svg_fallback(svg, classname);
        }

        var viewbox = svg.getAttribute('viewBox');
        var vb = viewbox.split(' ');
        var source_width = parseInt(vb[2] - vb[0], 10);
        var source_height = parseInt(vb[3] - vb[1], 10);

        // proportionally resize if only one dimension is provided (mirrors Icon.pm)
        if (height && !width) {
            width = Math.floor(height / (source_height / source_width))
        } else if (width && !height) {
            height = Math.floor(width / (source_width / source_height))
        }

        Object.assign(params, {
            width: width || source_width,
            height: height || source_height,
            viewBox: viewbox,
            'class': classname
        });

        var attributes = Object.keys(params).reduce(function(p, key) {
            return  p + ' ' + key + '="' + params[key] + '"';
        }, '');

        var content = svg.innerHTML; // does not work on IE (8,9,10,11,Edge)
        if (!content && typeof XMLSerializer !== undefined) {
            var xs = new XMLSerializer();
            content = '';
            for (var nodes = svg.childNodes, i=0; i < nodes.length; i++) {
                content += xs.serializeToString(nodes[i]);
            }
        }

        // make sure we create the root svg from scratch to avoid carrying over modifications
        return '<svg ' + attributes + '>' + content + '</svg>';
    };

    icon_fn = function (name, width, height, classname) {
        try {
            return svg_icon(name, { width: width, height: height, 'class': classname })
        } catch (o_O) {
            if (window.B && B.env.b_dev_server) throw o_O;
            return ''
        }
    };

    get_helper = function get_helper (helper, params) {
        switch (helper) {
            case 'icon':
                var icon_name = params.name;
                delete params.name;
                return svg_icon(icon_name, params);
            default:
                throw new Error('unkown TMPL_HELPER ' + name);
        }
    };

    booking.jstmpl.setup({
        get_static_hostname: get_static_hostname,
        get_date: get_date,
        get_helper: get_helper,
        fn: {
            escape_html: escape_html,
            escape_entities: escape_entities,
            array_length: array_length,
        }
    });

}(window.booking));

