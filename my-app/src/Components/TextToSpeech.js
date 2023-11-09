import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMicrophone } from "react-icons/hi";


export const TextToSpeech = () => {
    const url = "http://localhost:8000/api/create-audio/";
    const [audioPath, setAudioPath] = useState("TEST_One minute of silence (ID 0917)_BSB.wav");
    const [selectedText, setSelectedText] = useState("");
    const [isTextPlayed, setIsTextPlayed] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // reference for audio tag
    const audioElem = useRef();

    const onFetchFinish = (audio) => {
        setAudioPath("./audio/" + audio.split("\\").at(-1))
        setIsPlaying(true);
    }
    // сорри за тупое название функции :D
    // fetch audio path from api and set it in audioPath state
    const getAudioPath = () => {
        if (selectedText.length === 0) {
            return;
        }
        return axios.post(url, { "text": selectedText }).then((res) => {
            window.localStorage.setItem('audioPath', "./audio/" + res.data.audio_path.split("\\").at(-1));
            console.log(res.data.audio_path.split("\\").at(-1))
            onFetchFinish(res.data.audio_path);
        });
    }

    //"./audio/TEST_One minute of silence (ID 0917)_BSB.wav"
    // useEffect(() => {
    //     window.localStorage.setItem('audioPath', "./audio/" + "my-app\\src\\Components\\audio\\1687676678.wav".split("\\").at(-1));
    // })
    const createPath = () => {
        let audio = require("./audio/TEST_One minute of silence (ID 0917)_BSB.wav");
        try {
            if (audioPath.endsWith("wav")) {
                audio = require("./audio/" + audioPath.split("/").at(-1));
            }
        }
        catch (err) {
            audio = require("./audio/TEST_One minute of silence (ID 0917)_BSB.wav");
        }

        return audio;
    }

    useEffect(() => {
        setAudioPath(window.localStorage.getItem('audioPath'));
    }, [audioPath])

    // playing audio after state change
    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
        }
        else {
            audioElem.current.pause();
        }
    }, [isPlaying])

    //require("./" + props.song.path).default
    //my-app\src\audio\1687801890.wav
    //my-app\src\Components\TextToSpeech.js
    return (
        < >
            {/* <audio src="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav" ref={audioElem} /> */}
            <audio
                src={createPath()}
                ref={audioElem}
                onEnded={() => {
                    setIsPlaying(false);
                }}
            />
            <div
            className="functions__onhover"
            id="tts_onhover"
            style={{display: "none", right: "64px", height: "71px"}}>
                <span className="functions__onhover__header">Озвучка текста</span>
                <span className="functions__onhover__text">Озвучить выделенный текст</span>
            </div>
            <HiOutlineMicrophone onMouseEnter={() => {
                if (selectedText !== window.getSelection().toString()) {
                    setIsPlaying(false);
                    setIsTextPlayed(false);
                    setAudioPath("TEST_One minute of silence (ID 0917)_BSB.wav");
                    console.log("Another selected text")
                }
                setSelectedText(window.getSelection().toString());

            }}
                onClick={(e) => {
                    if (isTextPlayed) {
                        setIsPlaying(!isPlaying);
                    }
                    else {
                        setIsPlaying(false);
                        setIsTextPlayed(true);
                        getAudioPath();
                    }
                }}
                className="functions__button"
            />
        </>
    );
};