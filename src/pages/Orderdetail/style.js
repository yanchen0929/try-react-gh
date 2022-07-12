import styled from 'styled-components'

export const Wrapper = styled.div`
    .bigbox {
        height: 4rem;
        .left {
            width: 50%;
            float: left;
            .left-up {
                font-size: 0.9rem;
                margin: 0.5rem;
            }
            .left-down {
                margin: 0.5rem;
            }
        }
        .right {
            float: right;
            margin: 0.5rem;
        }
    }
    .navbar {
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        .navbar-left {
            width: 20%;
            display: flex;
            img{
                width: 100%;
                height: 100%;
                margin: 0.1rem;
            }
        }
        .navbar-middle {
            flex: 1;
            position: relative;
            .navbar-middle-left {
                position: absolute;
                top: 40%;
                left: 5%;
                font-size: 0.8rem;
            }
            .navbar-middle-right {
                position: absolute;
                top: 37%;
                left: 28%;
                font-size: 1rem;
                font-weight: 700;
                color: #000;
            }
        }
        .navbar-right {
            background-color: #fff;
            float: right;
            width: 15%;
            display: flex;
            margin-top: 0.5rem;
            margin: 0.5rem;
            .btn {
                width: 8rem;
                font-size: 0.9rem;
            }
        }
    }
`