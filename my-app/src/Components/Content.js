import parse from 'html-react-parser';
import React, { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import {
    CifrovyeNosInf,
    KubSummyDvukhVyrazheniy,
    KvadratRaznosti,
    OkruzhnostIKrug,
    RshenieKvadratnyhUrovneniy,
    RshenieLineynyhUrovneniy,
    SilaArkhimeda,
    SummaChBGP,
    Teploobmen,
    ZvukovyeVolny
} from "../content/allContent.js";
import "./css/Content.css";

// import topics from "../topics";

const files = {
    "kvadrat-raznosti.html": <KvadratRaznosti />,
    "kub-summy-dvukh-vyrazhenii.html": <KubSummyDvukhVyrazheniy />,
    "summa-chlenov-beskonechno-ubyvaiushchei-progressii.html": <SummaChBGP />,
    "reshenie-kvadratnykh-uravnenii.html": <RshenieKvadratnyhUrovneniy />,
    "reshenie-lineinykh-uravnenii.html": <RshenieLineynyhUrovneniy />,
    "okruzhnost-i-krug.html": <OkruzhnostIKrug />,
    "zvukovye-volny.html": <ZvukovyeVolny />,
    "sila-arkhimeda.html": <SilaArkhimeda />,
    "teplovoe-dvizhenie.html": <Teploobmen />,
    "tsifrovye-nositeli-informatsii.html": <CifrovyeNosInf />
}
export const Content = ({ subjectGrade, isBold, topic }) => {
    function splitIntoSyllables(word) {
        // Remove any leading or trailing spaces
        word = word.trim();

        // Define the Russian vowels and vowel groups
        const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
        const vowelGroups = ['её', 'ие', 'ии', 'ия', 'ий', 'ое', 'ёе', 'уе', 'ые', 'эе', 'юе', 'яе'];

        let syllables = [];
        let currentSyllable = '';

        // Iterate over the characters in the word
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // Check if the current character is a vowel
            if (vowels.includes(char)) {
                // Check if the current and next characters form a vowel group
                if (vowelGroups.includes(word.substr(i, 2))) {
                    currentSyllable += word.substr(i, 2);
                    i++; // Skip the next character
                } else {
                    // Start a new syllable
                    if (currentSyllable.length > 0) {
                        syllables.push(currentSyllable);
                    }
                    currentSyllable = char;
                }
            } else if (char === "'") {
                // Include the apostrophe in the current syllable
                currentSyllable += char;
                syllables.push(currentSyllable);
                currentSyllable = '';
            } else {
                // Add the current character to the current syllable
                currentSyllable += char;
            }
        }

        // Add the last syllable if it's not empty
        if (currentSyllable.length > 0) {
            syllables.push(currentSyllable);
        }

        return syllables;
    }


    function formatTextElement(data) {
        const words = data.split(' ')

        return <span>
            {words.map((word, ind) => {
                return <span key={ind}><b>{word.slice(0, word.length / 2)}</b>{word.slice(word.length / 2, word.length)} </span>
            })}
        </span>
    }

    const modifyHTMLContent = (htmlContent) => {
        if (isBold) {
            const formattedContent = parse(htmlContent, {
                replace: (domNode) => {

                    if (domNode.type === "text") {
                        return formatTextElement(domNode.data)
                    }

                }
            });
            return formattedContent;
        }
        return parse(htmlContent);


    };

    const [content, setContent] = useState(modifyHTMLContent(ReactDOMServer.renderToString(files[topic.content])))

    useEffect(() => {
        setContent(modifyHTMLContent(ReactDOMServer.renderToString(files[topic.content])))
    }, [topic, isBold])
    return (
        <div className="content__container">
            <div className="content__topic">{content}</div>
        </div>
    );
};
