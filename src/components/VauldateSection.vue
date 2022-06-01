<template>
    <div class="outer">
        <div class="inner">
            <img src="@/assets/vualdata.png" alt="banner" loading="lazy">
            <div class="inner__layout">
                <p>Send us a message</p>
                <label>
                    <input v-model="Name" placeholder="YourName">
                    <div v-if="v$.Name.$error">Name field has an error.</div>
                </label>
                <label>
                    <input v-model="email" placeholder="Email">
                    <div v-if="v$.email.$error">Email field has an error.</div>
                </label>
                <label>
                    <input v-model="message" placeholder="Message">
                    <div v-if="v$.message.$error">Message field has an error.</div>
                </label>
                <div class="btn__area">
                    <button @click="submit()">SEND</button>
                    <span v-if="done"> Succesful Send </span>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
    setup() {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            Name: '',
            message: '',
            email: '',
            done: false
        }
    },
    validations() {
        return {
            Name: { required }, // Matches this.firstName
            message: { required }, // Matches this.lastName
            email: { required, email } // Matches this.contact.email
        }
    }, methods: {
        async submit() {

            const result = await this.v$.$validate()
            if (!this.v$.$error) {
                console.log("DOne", result)
                this.done = true;
            }
            else {
                console.log("error")
            }
            // perform async actions

        }
    }
}
</script>

<style lang="scss" scoped>
.outer {
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:770px) {
        height: 41vh;
    }

    @media (max-width:426px) {
        height: 33vh;
    }

    .inner {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            filter: brightness(1);
        }

        .inner__layout {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 28%;
            height: 60%;
            bottom: 0;
            right: 20%;

            @media (max-width:781px) {
                width: 45%;
                height: 72%;
            }

            @media (max-width:426px) {
                width: 90%;
                left: 5%;
            }

            p {
                font-size: 25px;
                color: black;
                font-weight: 100;
                padding-top: 25px;
                padding-bottom: 25px;
                overflow: hidden;

                @media (max-width:426px) {
                    width: 50%;
                    right: 17%;
                    font-size: 15px;
                    color: black;
                    font-weight: 100;
                    padding-top: 13px;
                    padding-bottom: 0px;
                    overflow: hidden;
                }


            }

            label {
                width: 320px;
                overflow-x: hidden;
                overflow-y: hidden;
                margin-top: 15px;

                @media (max-width:781px) {
                    width: 270px;
                    margin-top: 5px;
                }

                @media (max-width:426px) {
                    width: 242px;
                    margin-top: 9px;
                }

                input {

                    height: 25px;
                    width: 100%;
                    border: none;
                    border-bottom: 1px solid gray;
                    outline: none;
                }

                div {
                    font-size: 10px;
                    color: red;
                }
            }

            .btn__area {
                width: 100%;
                margin-top: 50px;

                @media (max-width: 426px) {
                    margin-top: 0;
                }

                button {
                    margin-left: 7%;
                    padding: 12px;
                    width: 28%;
                    background-color: #f31131;
                    border-radius: 41px;
                    border: none;
                    color: white;
                    cursor: pointer;

                    @media (max-width:781px) {
                        margin-bottom: 15px;
                    }

                    @media (max-width: 426px) {
                        margin-top: 8px;
                        margin-left: 7%;
                        padding: 5px;
                        width: 27%;
                        background-color: #f31131;
                        border-radius: 41px;
                        border: none;
                        color: white;
                    }

                }

                span {
                    color: green;
                }
            }
        }
    }
}
</style>