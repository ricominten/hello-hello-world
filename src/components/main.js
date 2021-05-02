/** @jsxImportSource @emotion/react */
import React from "react";
import { Global } from "@emotion/react";
import * as styles from "./main.style";

const Main = () => (
    <>
        <Global styles={styles.global} />
        <main>
            <div css={styles.titleGroup(true)}>
                <span css={styles.before(false)} role="presentation">I</span>
                <h1 css={styles.title}>
                    <span css={styles.letters(false, 1)}>h</span>
                    <span css={styles.letters(false, 2)}>e</span>
                    <span css={styles.letters(false, 3)}>l</span>
                    <span css={styles.letters(false, 4)}>l</span>
                    <span css={styles.letters(false, 5)}>o</span>
                    <span css={styles.letters(false, 6)}>?</span>
                </h1>
            </div>
            <div css={styles.titleGroup(false)}>
                <span css={styles.before(true)} role="presentation">I</span>
                <h1 css={styles.title}>
                    <span css={styles.letters(true, 1)}>h</span>
                    <span css={styles.letters(true, 2)}>e</span>
                    <span css={styles.letters(true, 3)}>l</span>
                    <span css={styles.letters(true, 4)}>l</span>
                    <span css={styles.letters(true, 5)}>o</span>
                    <span css={styles.letters(true, 5)}>&nbsp;</span>
                    <span css={styles.letters(true, 6)}>w</span>
                    <span css={styles.letters(true, 7)}>o</span>
                    <span css={styles.letters(true, 8)}>r</span>
                    <span css={styles.letters(true, 9)}>l</span>
                    <span css={styles.letters(true, 10)}>d</span>
                    <span css={styles.letters(true, 11)}>!</span>
                </h1>
            </div>
            <div css={styles.dot} />
        </main>
        <footer>
            <p css={styles.footer}>made by <a href="ricominten.com">ricominten.com</a></p>
        </footer>
    </>
);

export default Main;