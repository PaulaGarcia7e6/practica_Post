<template>
    <div class="bodyJornal">
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
                <path fill="#000000"
                    d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-1.9l10-10V8l-6-6H6m7 1.5L18.5 9H13V3.5m7.1 9.5c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-2 1.8L12 20.9V23h2.1l6.1-6.1l-2.1-2.1Z" />
            </svg>
            <h2>My journal</h2>
        </header>
        <main>
            <form action="" class="">
                <textarea name="" id="" cols="30" rows="10" v-model="journalText" maxlength="280"
                    placeholder="New Journal Entry for danielkelly_io" class="notBtn"></textarea> <br>
                    <div class="d-flex j-c-c">
                        <emotes @emitCustomEvent="handleCustomEvent" />
                    </div>
                    <p class="text-center"> {{ errMSG }} </p>
                <div class="d-flex j-c-b">
                    <div>
                        <p>{{ journalText.length }} / 280</p>
                    </div>
                    <button @click="add" class="submit notBtn j-c-b">
                        <p>Remember</p>
                        <div class="img-size">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#333333"
                                    d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
            <hr>
            <ol v-for="post in posts">
                <li>
                    <post :journalText="post.journalText" :date="post.formatDate" :imgName="post.imgName" />
                </li>
            </ol>
        </main>
    </div>
</template>
<script lang="ts" setup>
import emotes from '@/components/emotes.vue';
import post from '@/components/post.vue';
import { ref, type Ref, watch } from 'vue';

type Post = {
    formatDate: string;
    journalText: string;
    imgName: string;
};
const posts = ref<Array<Post>>([]);
const journalText: Ref<string> = ref("");
let imgName:string = ''
let errMSG: Ref<string> = ref('')

const add = (e: Event) => {
    const journalDate = new Date()
    e.preventDefault();
    if (!imgName) {
        // Mostrar mensaje de error o hacer algo para indicar al usuario que debe seleccionar un emote
        errMSG.value = "please, select a emote for the jornal";
        return;
    }
    const post: Post = {
        formatDate: `${diasSemana(new Date().getDay())} ${journalDate.getDate()} at ${journalDate.getHours()}:${journalDate.getMinutes()}`,
        journalText: journalText.value,
        imgName: imgName
    };
    console.log(post)
    posts.value.unshift(post)
    imgName = ''
    errMSG.value = ''
    console.log(posts)
}
const handleCustomEvent = (data: string) => {
    // Manejar los datos emitidos por el componente hijo
    console.log(data)
    imgName = data;
};
function diasSemana(dia: number) {
    let nameDay: string = ''
    switch (dia) {
        case 0:
            nameDay = "Sunday";
        case 1:
            nameDay = "Monday";
        case 2:
            nameDay = "Tuesday";
        case 3:
            nameDay = "Wednesday";
        case 4:
            nameDay = "Thursday";
        case 5:
            nameDay = "Friday";
        case 6:
            nameDay = "Saturday";
    }
    return nameDay
}
</script>
<style scoped>
header {
    display: flex;
    align-items: center;
}

textarea {
    width: 630px;
    height: 130px;
    border-radius: 10px;
    border: 1px grey solid;
    padding: 20px;
}

.bodyJornal {
    margin: 0 auto;
    width: 80vh;
    display: grid;
}

.submit {
    display: flex;
    align-items: center;
    background-color: aqua;
    height: 3rem;
    width: 10rem;
    border-radius: 10px;
    padding: 5px;
}

.submit>div {
    width: 2rem;
}

.submit>div>svg {
    width: 100%;
}
</style>