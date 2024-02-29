'format cjs';

var wrap = require('word-wrap');
var map = require('lodash.map');
var longest = require('longest');
var chalk = require('chalk');

var filter = function (array) {
    return array.filter(function (x) {
        return x;
    });
};

var headerLength = function (answers) {
    return (
        answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0)
    );
};

var maxSummaryLength = function (options, answers) {
    return options.maxHeaderWidth - headerLength(answers);
};

var filterSubject = function (subject, disableSubjectLowerCase) {
    subject = subject.trim();
    if (!disableSubjectLowerCase && subject.charAt(0).toLowerCase() !== subject.charAt(0)) {
        subject =
            subject.charAt(0).toLowerCase() + subject.slice(1, subject.length);
    }
    while (subject.endsWith('.')) {
        subject = subject.slice(0, subject.length - 1);
    }
    return subject;
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function (options) {
    var types = options.types;

    var length = longest(Object.keys(types)).length + 1;
    var choices = map(types, function (type, key) {
        return {
            name: (key + ':').padEnd(length) + ' ' + type.description,
            value: type.title
        };
    });

    return {
        prompter: function (cz, commit) {
            cz.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: "Selecione o tipo de mudança que voce deseja adicionar:",
                    choices: choices,
                },
                {
                    type: 'input',
                    name: 'scope',
                    message:
                        'Qual escopo está recebendo está mudança? (opcional)',
                    default: options.defaultScope,
                    filter: function (value) {
                        return options.disableScopeLowerCase
                            ? value.trim()
                            : value.trim().toLowerCase();
                    }
                },
                {
                    type: 'input',
                    name: 'subject',
                    message: function (answers) {
                        return (
                            'Titulo do Commit (máximo ' +
                            maxSummaryLength(options, answers) +
                            ' caracteres):\n'
                        );
                    },
                    default: options.defaultSubject,
                    validate: function (subject, answers) {
                        var filteredSubject = filterSubject(subject, options.disableSubjectLowerCase);
                        return filteredSubject.length == 0
                            ? 'Descrição é requerida'
                            : filteredSubject.length <= maxSummaryLength(options, answers)
                                ? true
                                : 'Tamanho da descrição deve ser menor ou igual a ' +
                                maxSummaryLength(options, answers) +
                                ' caracteres. Tamanho atual é ' +
                                filteredSubject.length +
                                ' caracteres.';
                    },
                    transformer: function (subject, answers) {
                        var filteredSubject = filterSubject(subject, options.disableSubjectLowerCase);
                        var color =
                            filteredSubject.length <= maxSummaryLength(options, answers)
                                ? chalk.green
                                : chalk.red;
                        return color('(' + filteredSubject.length + ') ' + subject);
                    },
                    filter: function (subject) {
                        return filterSubject(subject, options.disableSubjectLowerCase);
                    }
                },
                {
                    type: 'input',
                    name: 'body',
                    message:
                        'Descrição completa da mudança: (Pressione enter para pular)\n',
                    default: options.defaultBody
                }
            ]).then(function (answers) {
                var wrapOptions = {
                    trim: true,
                    cut: false,
                    newline: '\n',
                    indent: '',
                    width: options.maxLineWidth
                };

                // parentheses are only needed when a scope is present
                var scope = answers.scope ? '(' + answers.scope + ')' : '';

                // Hard limit this line in the validate
                var head = answers.type + scope + ': ' + answers.subject;

                // Wrap these lines at options.maxLineWidth characters
                var body = answers.body ? wrap(answers.body, wrapOptions) : false;

                commit(filter([head, body]).join('\n\n'));
            });
        }
    };
};
