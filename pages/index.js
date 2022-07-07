import React, { useState, useEffect } from 'react';
import Main from '../components/Main';
import Head from 'next/head';

const Index = () => {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>Matvey Zenin</title>
            <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        </Head>
            <Main />
        </>
    );
};

export default Index;
