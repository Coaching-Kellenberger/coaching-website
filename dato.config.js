module.exports = (dato, root, i18n) => {
    root.directory("content/", (dir) => {
        i18n.availableLocales.forEach((locale) => {
            i18n.locale = locale;
            dir.createPost(`_index.${locale}.md`, "yaml", {
                frontmatter: {
                    title: dato.placeholder.title,
                    text: dato.placeholder.text,
                },
            });
        });
    });
};
