import styled from "styled-components";

export const Wrapper = styled.div`
    .box {
        width: 100%;
        height: 900px;
        background-color: rgb(245,245,245);
        .title {
            position: relative;
            margin: 0 auto;
            img {
                width: 100%;
                position: absolute;
                top: 100px;
            }
            .quick {
                position: relative;
                top: 500px;
            }
        }
        .button {
            position: relative;
            top: 520px;
        }
    }
`