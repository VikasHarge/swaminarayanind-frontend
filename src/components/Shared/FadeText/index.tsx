'use client'

import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

type FadeProp = {
    fade: 'fade-in' | 'fade-out'
}

type FadeTextProps = {
    fadeInterval: number,
    wordsArray: string[],
}

const FadeText = ({ fadeInterval, wordsArray }: FadeTextProps) => {

    const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
    const [wordIndex, setWordIndex] = useState(0)


    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
        }, fadeInterval)

        return () => clearInterval(fadeTimeout)
    }, [fadeProp])


    useEffect(() => {
        const wordTimeout = setInterval(() => {
            setWordIndex((prevword) => (prevword + 1) % wordsArray.length)
        }, (fadeInterval * 2))

        return () => clearInterval(wordTimeout)
    }, [])


    return (
        <h1 className={classNames('text-[45px] md:text-[50px] w-full lg:text-8xl font-extrabold bg-gradient-to-r from-blue-600  to-indigo-300 inline-block text-transparent bg-clip-text pb-2', fadeProp.fade)}>
            {wordsArray[wordIndex]}
        </h1>
    )
}

export default FadeText