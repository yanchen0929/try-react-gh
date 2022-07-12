import styled from "styled-components";

export const Wrapper = styled.div`
    .box {
        text-align: center;
        width: 100%;
        height: 50rem;
        background-color: rgb(245,245,245);
        .title {
            position: relative;
            margin: 0 auto;
            img {
                width: 70%;
                position: absolute;
                top: 10rem;
                right: 3.5rem;
            }
            .quick {
                position: relative;
                top: 25rem;
            }
        }
        .button {
            position: relative;
            top: 26rem;
        }
    }
`