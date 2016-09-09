/**
 * Created by mengkeys on 16-8-27.
 *
 */

i18n.setDefaultLanguage('zh-CN');
i18n.showMissing('[没有 "<%= label %>" 对应的中文翻译 <%= language %>]');

if (Meteor.isClient) {
    /**
     * Detects and set the language
     */
    detectLanguage = function() {
        var language = window.navigator.userLanguage || window.navigator.language;
        language = language.split('-')[0];
        i18n.setLanguage(language);
        T9n.setLanguage(language);
    };

    /**
     * Detects and set the language on startup
     */
    Meteor.startup(function () {
        translateDataTablesSimpleChinese();
        translateSummerNoteSimpleChinese();
        detectLanguage();
    });

}