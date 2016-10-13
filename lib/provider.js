'use babel';

class Provider {
    selector = '*';
    malou = {};

    malouWords = {
        'malou'    : 'default',
        'malou-xs' : 'xs',
        'malou-sm' : 'sm',
        'malou-md' : 'md',
        'malou-lg' : 'lg'
    }

    sizes = {
        'xs' : 1,
        'sm' : 2,
        'md' : 3,
        'lg' : 4
    }

    constructor(malou) {
        this.malou = malou;
    }

    getSuggestions(config) {
        var buffer = config.editor.buffer;
        var bufferPosition = config.bufferPosition;
        var line = buffer.getTextInRange([[bufferPosition.row, 0], bufferPosition])
        var lastWords = line.split(" ").splice(-1);

        if (lastWords[0] === undefined) {
            return [];
        }

        var lastWord = lastWords[0];

        if (lastWord.trim().length === 0) {
            return [];
        }

        var suggestions = [];
        for (var label of Object.keys(this.malouWords)) {
            var size = this.malouWords[label] == "default" ? this.malouWords['malou-md'] : this.malouWords[label];
            var rightLabel = this.malouWords[label] == "default" ? "Default" : this.malouWords[label];
            if (label.indexOf(lastWord) !== -1) {
                suggestions.push({
                    "text": this.getText(this.sizes[size]),
                    "replacementPrefix": lastWord,
                    "displayText": "Eddy Malou Lorem Ipsum",
                    "rightLabel": rightLabel
                });
            }
        }
        return suggestions;
    }

    getText(size) {
        return this.malou.getParagraph(size);
    }

}

export default Provider;
